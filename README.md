# kitonoka.github.io

Personal developer website built with **Astro**, **TypeScript**, and **Tailwind CSS**.

The site contains personal information, social links, and dynamically fetched GitHub projects.

## Stack

* Astro
* TypeScript
* Tailwind CSS
* GitHub REST API
* GitHub Pages

## Projects

Project pages are automatically discovered from `src/pages/projects/` during the Astro build.

Adding a new `.astro` page to this directory automatically adds it to the Projects section.

### SVG Create

Static SVG generator for creating project-based SVG content directly from Astro.

[View project →](https://kitonoka.github.io/projects/svg-create/)

## GitHub Projects

Public repositories are fetched from the GitHub API during the Astro build.

The site currently uses:

```text
https://api.github.com/users/Kitonoka/repos
```

Because the repositories are fetched at **build time**, new or updated repositories will appear after the site is rebuilt.

## Development

```bash
npm install
npm run dev
```

Build locally:

```bash
npm run build
```

## Deployment

The site is deployed to GitHub Pages through GitHub Actions.

Every push to `main` triggers:

1. Install dependencies with `npm ci`
2. Build the Astro site
3. Fetch the current GitHub repositories
4. Upload the generated `dist/` directory
5. Deploy it to GitHub Pages

Manual deployments can also be triggered from the **Actions** tab.

### Updating GitHub Projects

After changing repositories or GitHub-related site data, push to `main` or manually rerun the deployment workflow so Astro rebuilds the site and fetches the latest GitHub data.
