# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with Jekyll and hosted on GitHub Pages. The blog uses Jekyll 3.8.5 with the Minima theme and includes custom styling and layouts.

## Commands

### Development Server

Start the local development server:
```bash
jekyll serve --watch
```

To include draft posts:
```bash
jekyll serve --watch --drafts
```

Alternative (using bundle):
```bash
bundle exec jekyll serve --watch --drafts
```

### Build

Build the site for production:
```bash
jekyll build JEKYLL_ENV=production
```

Note: The environment variable can also be accessed via `ENV['JEKYLL_ENV']` in Ruby code.

### Installation

Install dependencies:
```bash
gem install jekyll bundler
bundle install
```

## Architecture

### Content Structure

- **`_posts/`**: Published blog posts in markdown format with naming convention `YYYY-MM-DD-title.md`
- **`_drafts/`**: Unpublished draft posts (visible only when using `--drafts` flag)
- **`_layouts/`**: HTML templates (`default.html`, `post.html`)
- **`_includes/`**: Reusable HTML components (`analytics.html`, `disqus.html`, `gh-comment.html`, `shared.html`)
- **`_sass/`**: Sass partials for styling

### Configuration

- **`_config.yml`**: Main Jekyll configuration file containing site settings, build settings, and plugin configuration
  - Site uses Disqus for comments (configured via `disqus: "oclockvn"`)
  - Kramdown markdown processor with GFM input
  - Plugins: jekyll-feed, jekyll-seo-tag, jekyll-sitemap
  - Excerpt separator: `<!--more-->`

### Styling

- Custom SCSS in `_sass/` directory compiled to `assets/css/style.css`
- Bootstrap grid and reboot CSS in `css/` directory
- Custom syntax highlighter CSS

### Environment-Specific Behavior

The site distinguishes between development and production environments:
- Production: Includes analytics (`jekyll.environment == 'production'`)
- Development: Shows edge badge indicator
- Access environment via `jekyll.environment` or `ENV['JEKYLL_ENV']`

## Important Notes

- The `_config.yml` file is NOT reloaded automatically during development. Restart the server after making changes to this file.
- Posts must follow the naming convention `YYYY-MM-DD-title.md` to be recognized by Jekyll.
- The blog uses GitHub-style markdown (GFM) via Kramdown.
