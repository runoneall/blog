# hexo-theme-old-fashion

old fashion theme for hexo

- Install

```shell
git clone --branch theme --single-branch https://github.com/runoneall/blog.git themes/hexo-theme-old-fashion
```

```yaml
# Modify _config.yml
theme: hexo-theme-old-fashion
```

- Sitemap

```shell
npm install hexo-generator-sitemap --save
```

```yaml
# Add To _config.yml
sitemap:
    path:
        - sitemap.xml
```

- Feed

```shell
npm install hexo-generator-feed --save
```

```yaml
# Add To _config.yml
feed:
    enable: true
    type:
        - atom
        - rss2
    path:
        - atom.xml
        - rss2.xml
```

- Code highlight

```yaml
# Modify _config.yml
syntax_highlighter: # disable build-in highlight
```

- Search

```shell
npm install hexo-generator-search --save
```

```yaml
# Add To _config.yml
search:
    path: search.xml
    field: post
    content: true
    format: html
```

Create File source/search/index.md

```markdown
---
title: 搜索
layout: search
---
```

- (Optional) Robots.txt

```shell
npm install hexo-generator-robotstxt --save
```

```yaml
# Add To _config.yml
robotstxt:
    useragent: "*"
    disallow:
    allow:
    sitemap: /sitemap.xml
```
