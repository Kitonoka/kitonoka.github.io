# kitonoka.github.io

Personal developer website built with **Astro**, **TypeScript**, and **Tailwind CSS**.

The site contains personal information, social links, and dynamically fetched GitHub projects.

The site also contains useful utilities. Refer to the [Projects](#projects) section below.

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

### CSS Gradient

Visual CSS gradient generator with support for linear, radial, and conic gradients, including color stops, positioning, and live CSS output.

[View project →](https://kitonoka.github.io/projects/css-gradient/)

### JWT Decoder

Local JSON Web Token decoder for inspecting JWT headers, payloads, signatures, and common claims without verifying the signature.

[View project →](https://kitonoka.github.io/projects/jwt/)

### Regex Lab

Client-side regular expression testing and debugging tool with match highlighting, capture groups, replacements, flags, and common regex presets.

[View project →](https://kitonoka.github.io/projects/regex/)

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
