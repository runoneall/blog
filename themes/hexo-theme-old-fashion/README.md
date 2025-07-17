# hexo-theme-old-fashion

old fashion theme for hexo

- Install

```shell
git clone https://github.com/runoneall/hexo-theme-old-fashion.git themes/hexo-theme-old-fashion
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
