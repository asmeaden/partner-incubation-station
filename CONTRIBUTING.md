# Contributing

This repo holds the Partner Incubation website. Everything in `docs/` is published to
https://asmeaden.github.io/partner-incubation-station/ when it reaches `main`.

## How changes go live

1. **Create a branch** from `main` with a short name, for example `content/finops-journey`.
2. **Make your changes** and commit them to that branch.
3. **Open a pull request** into `main`. Describe what changed and add a screenshot for visual changes.
4. **Get it reviewed.** Check the change in the preview before approving.
5. **Merge.** The site redeploys automatically within about two minutes.

Nobody pushes directly to `main`; it is protected so every change goes through a pull request.

## Ways to edit

- **On github.com:** open a file, select the pencil icon, edit, then choose "Create a new branch and start a pull request". Good for wording fixes.
- **In the browser editor:** press `.` on the repo page to open VS Code in the browser. Good for edits across several files.
- **Locally:** clone the repo, then preview with `powershell -ExecutionPolicy Bypass -File .\serve.ps1` and open http://localhost:8080/.

## What belongs here

- Website files only: HTML, CSS, JavaScript, structured content files and images used on the pages.
- Do **not** commit source decks, internal documents, partner names or customer data. This repo is public and
  history keeps every file, even after deletion. Source decks live in the team SharePoint and are linked from the site.

## Conventions

- Plain HTML, CSS and JavaScript. No build step, no frameworks.
- Keep links relative so the site works at any address.
- Write in UK English, sentence case, plain language.
