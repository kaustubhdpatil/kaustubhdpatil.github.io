# Kaustubh Patil - Personal Site

A single page (`index.html`) - no build step, no dependencies beyond two Google Fonts.

## Publish it free with GitHub Pages

1. Create a new public GitHub repo, e.g. `kaustubhdpatil.github.io` (using your GitHub username gives you the shortest possible URL) - or any repo name you like, such as `personal-site`.
2. Add `index.html` to the repo root (drag-and-drop it in the GitHub web UI, or via git):
   ```bash
   git init
   git add index.html README.md
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/kaustubhdpatil/<repo-name>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
5. Wait a minute or two - GitHub will give you a live URL:
   - `https://kaustubhdpatil.github.io` (if the repo is named `kaustubhdpatil.github.io`), or
   - `https://kaustubhdpatil.github.io/<repo-name>` (for any other repo name).

That's it - the site is live and free, and any future push to `main` updates it automatically.

## Editing later

Everything - content, styling, and the small count-up animation - lives in `index.html`. Open it in any editor; the CSS is in a `<style>` block near the top and the copy is plain HTML further down.

## License

This repository is licensed under the MIT License - see [LICENSE](LICENSE) for details.
