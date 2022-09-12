# Svelte Markdown Wrapper

This is a Svelte wrapper for using Markdown and load its content in an automated way for display in a filetree that is included into a website.

You can add individual markdown files, which, after registering, will pop up automatically in a filetree and enable you to navigate between them. 

## Add .md Files
Add your files under `public/files/` and register your added file under `public/filelist.yaml`the following way:

```yaml
filelist:
  - file: test.md
    identifier: Testfile
  - file: new_added_file.md
    identifier: Title to be shown in Website
```

## Development:
Run the dev version using the following command:
```bash
$ npm run dev
```

## Build
Run the following command to build the project:
```bash
$ npm run build
```

## NPM Packages 
**Main NPM packages used in this project:**
- markdown-it: Main markdown library to translate markdown to html output.
- markdown-it-katex: Includes a formula renderer for markdown-it. 
- markdown-it-highlight: Includes highlight.js for code syntax highlighting. On top of using this plugin, copied the css from the node_modules path to `src/assets/highlightjs.css`
- github-markdown-css: GitHub css scheme for markdown copied from the node_modules path to `src/assets/github-markdown.css`, as well as light and dark theme optionally if wanted. 