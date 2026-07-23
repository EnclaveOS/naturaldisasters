# Blank Netlify Visual Editor Site

This is a minimal Next.js starter prepared for GitHub, Netlify, and Netlify Visual Editor.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Local Visual Editor

In one terminal, run:

```bash
npm run dev
```

In another terminal, run:

```bash
npm run visual-editor
```

Then open the Visual Editor URL shown in the terminal, usually `http://localhost:8090/_stackbit`.

## Put it on GitHub

```bash
git init
git add .
git commit -m "Initial blank website"
git branch -M main
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

## Connect it to Netlify

1. In Netlify, choose **Add new project** and import the GitHub repository.
2. Use the included `netlify.toml` build settings.
3. After the first deploy succeeds, go to **Project configuration > Visual Editor**.
4. Set up the Visual Editor preview environment. Use a separate working branch such as `preview`.

## Editable content

The home page content lives at:

```text
content/pages/index.json
```

The Visual Editor configuration lives at:

```text
stackbit.config.ts
```
