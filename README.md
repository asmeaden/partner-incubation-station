# Partner Incubation site

Zero-build static site (plain HTML, CSS and JavaScript) published to GitHub Pages from `docs/`.

## Preview locally

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

Then open http://localhost:8080/.

## Publish

Every merge into `main` deploys automatically via `.github/workflows/pages.yml`.
`main` is protected: changes go through a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Source material

Source decks live in the team SharePoint, not in this public repo, and are excluded by `.gitignore`.
The site links to them rather than holding copies.
