### Install

```
gem install jekyll bundler
```

### Start your blog

```
jekyll serve --watch
```

to serve the drafts, add option `--drafts`.

There is another way to start the server:

```
bundle exec jekyll serve --watch --drafts
```

### Build your blog

```
JEKYLL_ENV=production jekyll build
```

TIP: you can use `ENV['JEKYLL_ENV']` to get/set the env instead of `jekyll.environment` variable

More at: [Create static blog using github pages](https://oclockvn.github.io/2019/02/08/create-blog-using-github-page-and-jekyll.html)
