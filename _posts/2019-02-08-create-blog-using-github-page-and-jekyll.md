---
title: Create static blog using github pages
tags: [git, tip, ha ha ha]
---

### 1. Install ruby

Window download at [Ruby window](https://jekyllrb.com/docs/installation/windows/)

check ruby version:

```
ruby -v
```

check gem version:

```
gem -v
```

### 2. Install Jekyll

```
gem install jekyll
```

check jekyll version:

```
jekyll -v
```

### 3. Create jekyll site

Execute this command in which you want to create source blog:

```
jekyll new src
```

where `src` is the name what-ever-you-want

to run the server:

```bash
cd src
jekyll serve --watch
```

app is available at `http://localhost:4000/`

### 4. Configuration

Site config via `_config.yml`, and they will be accessible in the templates via `{% raw %} {{ site.myvariable }} {% endraw %}`.

restart the server and rerun to see what changes.

Tips:

- Linking to posts:

{% raw %}
```
{{ site.baseurl }}{% post_url yyyy-MM-dd-name-of-the-post %}
```
{% endraw %}