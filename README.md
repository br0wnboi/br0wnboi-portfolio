# br0wnboi-portfolio

The source code for [br0wnboi.xyz](https://br0wnboi.xyz). 

This site is built using [Hugo](https://gohugo.io/) and is powered by the custom, terminal-inspired [hugo-theme-symbiote](https://github.com/br0wnboi/hugo-theme-symbiote) theme. It automatically deploys to Cloudflare Pages upon pushing to the `main` branch.

## 🚀 Usage

You can use the included `manage.sh` script to automate the process of creating new blog posts and deploying your site to Cloudflare without needing to memorize `git` or `hugo` commands.

### Running the script
```bash
./manage.sh
```

**The script will:**
1. Ask if you want to create a new blog post. If yes, it will automatically generate the file in `content/blog/` for you using Hugo.
2. Fetch the latest changes from your GitHub repository.
3. Compare your local files against what is currently live online and show you a clean summary of any uncommitted edits or missing commits.
4. Ask if you want to push all your current edits live. If yes, it will automatically stage, commit, and push everything to trigger a Cloudflare deployment.

## 📂 Manual Editing

If you prefer to edit files manually:
- **Homepage (Bio & Socials):** Edit `content/_index.md`
- **Projects:** Edit `content/projects.md`
- **Theme/Styling:** Update the submodule in `themes/hugo-theme-symbiote/`

## 🧪 Local Testing

To preview the site locally before deploying, run:
```bash
hugo server
```
Then open `http://localhost:1313` in your browser.
