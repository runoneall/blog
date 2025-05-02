# hexo-theme-old-fashion

old fashion theme for hexo

- Sitemap

```shell
npm install hexo-generator-sitemap --save

# Add To _config.yml
sitemap:
  path:
  - sitemap.xml
```

- Feed

```shell
npm install hexo-generator-feed --save

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

- code highlight

```yaml
# Modify _config.yml
syntax_highlighter: # disable build-in highlight
```
