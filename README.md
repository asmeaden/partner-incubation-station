# Partner Incubation site

Zero-build static site (plain HTML, CSS and JavaScript) published to GitHub Pages from `docs/`.

## Preview locally

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

Then open http://localhost:8080/.

## Publish

Every push to `main` deploys automatically via `.github/workflows/pages.yml`.

## Source material

PowerPoint decks and the HTML mock-up stay in OneDrive and are excluded by `.gitignore`.
Link to them from SharePoint/OneDrive rather than committing them to this public repo.
