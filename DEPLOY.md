# DEPLOY.md

## Deploy to Cloudflare Pages (static upload workflow)

This project is a static site. Build the CSS first, then upload the `public/` folder.

## 1. Install dependencies

```bash
npm install
```

## 2. Build Tailwind CSS

```bash
npm run build
```

This creates:

```text
public/assets/app.css
```

## 3. Confirm folder contents

Your deployable folder is:

```text
public/
  index.html
  assets/
    app.css
```

## 4. Deploy to Cloudflare Pages

### Option A — Direct Upload
1. Log in to Cloudflare.
2. Go to **Workers & Pages**.
3. Click **Create application**.
4. Choose **Pages**.
5. Choose **Upload assets** / **Direct Upload**.
6. Upload the contents of the `public/` folder.
7. Finish the deploy.

### Option B — Git-based deploy
1. Put this project in its own GitHub repo.
2. In Cloudflare Pages choose **Connect to Git**.
3. Select the repo.
4. Use the following build settings:

- Build command:
```bash
npm run build
```

- Build output directory:
```text
public
```

## 5. Custom domain
Once deployed:
1. Open the Pages project
2. Go to **Custom domains**
3. Add your domain:
   - `hamforge.dev` for hamforge
   - `joshbenham.com` for Josh Benham

## Notes
- If you upload directly, always run `npm run build` first.
- If you use Git deploys, Cloudflare will run the build automatically.
- Replace placeholder images in `public/images/` whenever you are ready.
