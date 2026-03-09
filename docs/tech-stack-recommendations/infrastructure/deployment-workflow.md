# Deployment Workflow

**Date:** 2026-03-09
**Status:** Implemented

---

## Environment Structure

| Environment | Branch | URL | Purpose |
|-------------|--------|-----|---------|
| **Development** | Any feature branch | `localhost:5173` | Active development |
| **Staging** | `staging` | `staging.agenticagency.dev` | Pre-production testing |
| **Production** | `main` | `agenticagency.dev` | Live customer-facing site |

---

## Git Workflow

### Daily Development

```bash
# 1. Create feature branch from staging
git checkout staging
git pull origin staging
git checkout -b feature/my-feature

# 2. Develop locally
npm run dev

# 3. When ready, push and create PR to staging
git push origin feature/my-feature
# Create PR: feature/my-feature → staging
```

### Testing on Staging

```bash
# Merge PR to staging
# Vercel auto-deploys to staging.agenticagency.dev
# Test the changes on staging URL
```

### Promoting to Production

```bash
# Create PR: staging → main
# Review changes
# Merge PR
# Vercel auto-deploys to agenticagency.dev
```

---

## Branch Protection Rules (GitHub)

### `main` branch
- ✓ Require pull request before merging
- ✓ Require status checks to pass (build)
- ✓ Do not allow force pushes
- ✓ Do not allow deletions

### `staging` branch
- ✓ Require pull request before merging
- ✓ Require status checks to pass (build)

---

## Vercel Configuration

### Production Domain
- Branch: `main`
- Domain: `agenticagency.dev`

### Staging Domain
- Branch: `staging`
- Domain: `staging.agenticagency.dev`

### Preview Deployments
- All other branches get unique preview URLs
- Format: `nexus-{hash}.vercel.app`

---

## Environment Variables

Each environment can have different values:

| Variable | Development | Staging | Production |
|----------|-------------|---------|------------|
| `VITE_HUBSPOT_PORTAL_ID` | (empty) | Test portal | Production portal |
| `VITE_HUBSPOT_FORM_GUID` | (empty) | Test form | Production form |

Set in Vercel Dashboard → Settings → Environment Variables → Select environment.

---

## Pre-deployment Checklist

Before merging to `staging`:
- [ ] `npm run build` succeeds locally
- [ ] Tested on `localhost:5173`
- [ ] No console errors

Before merging to `main`:
- [ ] Tested on `staging.agenticagency.dev`
- [ ] All pages load correctly
- [ ] Forms work as expected
- [ ] Mobile responsive check

---

## Rollback Procedure

If production breaks:

```bash
# Option 1: Revert via Vercel Dashboard
# Go to Deployments → Find last working deployment → Promote to Production

# Option 2: Git revert
git checkout main
git revert HEAD
git push origin main
```

---

## CI/CD Pipeline (GitHub Actions)

The `.github/workflows/ci.yml` runs on every PR:
- Installs dependencies
- Runs build
- (Future: Run tests, linting)

PRs cannot be merged if build fails.
