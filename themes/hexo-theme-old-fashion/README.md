# hexo-theme-old-fashion

old fashion theme for hexo

- Install

```shell
# 1. 创建并进入本地目录
mkdir -p themes/hexo-theme-old-fashion && cd themes/hexo-theme-old-fashion

# 2. 初始化 Git 仓库
git init

# 3. 启用稀疏检出
git config core.sparseCheckout true

# 4. 设置仅检出 `themes/hexo-theme-old-fashion` 目录
echo "themes/hexo-theme-old-fashion/*" >> .git/info/sparse-checkout

# 5. 添加远程仓库
git remote add origin https://github.com/runoneall/blog.git

# 6. 拉取指定分支（如 main 或 master）
git pull origin main
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
