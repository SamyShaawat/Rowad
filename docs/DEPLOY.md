# How the site is deployed

Merging a pull request into `dev` deploys the site. Nothing else does.

## Flow

1. Work on a branch from `dev`, open a pull request into `dev`, merge it.
2. GitHub Actions (`.github/workflows/ci.yml`) runs on the merge:
   - **quality-checks**: formatting, TypeScript, ESLint.
   - **e2e**: builds the site and runs the Playwright tests against it (`e2e/`).
   - **deploy**: builds again, then uploads `build/` to `public_html/` on the cPanel server over SSH (rsync).
3. After uploading, the job tests the live site: 10 pages and the sitemap return 200, the security headers and the `www` redirect are present, and `https://rowad.com/version.txt` equals the commit that was deployed.

## Safety rules built into the job

- One deploy at a time (`concurrency: deploy-production`). A queued run that is no longer the newest commit on `dev` skips the upload.
- No `rsync --delete`. `public_html` also holds server-only files. The job keeps a manifest (`.deploy-manifest`) of what it uploaded and removes only files that the last deploy uploaded and this build no longer has (`scripts/stale-files.sh`).
- `.htaccess` (HTTPS, `www` redirect, legacy URLs, `/ar` pages, security headers, caching) is copied from the repo root into every deploy. Change it in the repo, not on the server.

## Secrets (repository settings)

`CPANEL_HOST`, `CPANEL_USER`, `CPANEL_SSH_KEY` (an unencrypted private key whose public key is authorized in cPanel > SSH Access).

## Run it locally

```bash
pnpm install
pnpm dev                          # dev server
pnpm build                        # static export to build/, plus error pages and sitemap
CI=1 pnpm playwright test         # e2e against build/ (build first)
```

## If a deploy fails

Open the run in the Actions tab. The deploy step prints the public key it uses (compare it with cPanel > SSH Access). The smoke test names the page or header that failed. Fix forward with a new pull request; the live site keeps the last good upload until the next successful run.
