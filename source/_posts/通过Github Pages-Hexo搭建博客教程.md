---
title: 通过Github Pages+Hexo搭建博客教程
date: 2024-12-09 11:38:35
tags: []
categories: 默认
---

此方法适用于所有系统，但会存在路径与命令区别，请自行尝试后进行修改  
此教程使用Linux系统

# 前期准备

- 一个域名（没有也可以）
- 一台电脑（手机可用Termux）
- git（用于提交代码，到[这里](https://git-scm.com/)下载git安装包或使用包管理器安装）
- 一个Github账号（自行搜索）
- nodejs（用于安装Hexo及Hexo插件，到[这里](https://nodejs.org/en/download)下载或使用包管理器安装。若无特殊需要请使用LTS版本）
- 文本编辑器（UTF-8编码）
- 可能需要VPN（或换源）（站长的[v2ray仓库](https://github.com/runoneall/v2server)，8000多个节点随便用）
- 脑子与一定的动手能力（！！！）

# 本地搭建博客

- 使用 `npm install hexo-cli -g` 安装hexo本体
- 初始化博客 `hexo init blog`
- 进入 `cd blog` （在后续步骤中，这将简写为 `博客根目录` ）
- 补全 `npm install`
- 启动 `hexo g && hexo s` （hexo会在4000端口启动服务，请确保端口没有被占用）
- 打开 `127.0.0.1:4000` 查看安装是否成功

# 安装主题

若上一步进入了博客，则安装成功，但hexo默认主题并不好看，此部分将说明主题的安装方法，若你喜欢默认主题，请略过这一步

- 下载主题文件（一般在Github上，请自行搜索，并首选 `github.com` ）
- 解压主题文件（一般为 `.zip` 或 `.tar.gz` ，Windows解压工具推荐 [7-zip](https://7-zip.org/)）
- 将主题文件目录放入 `博客根目录` 下的 `themes` 文件夹下
- 进入 `主题文件夹` （在后续步骤中，这将简写为 `主题根目录` ）
- 本博客使用 `Fluid` 主题，所以以 `Fluid` 主题为例

## 分支: 安装并配置 `Fluid` 主题

- 进入[Github Releases](https://github.com/fluid-dev/hexo-theme-fluid/releases)
- 找到标有 `Latest` 标签的版本并点击
- 下滑找到 `Assets` 并点击 `Source code` （`zip` 或 `tar.gz`）
- 将下载的压缩包解压，将文件夹重命名为 `fluid`
- 放入 `博客根目录` 下的 `themes` 文件夹下
- 编辑 `博客根目录` 下的 `_config.yml` （在后续步骤中，这将简写为 `博客配置` ）
    - 将 `theme` 改为 `fluid`
        - 将 `language` 改为 `zh-CN` （可选）
- 进入 `博客根目录` 下的 `themes` 文件夹下的 `fluid` 文件夹 （在此分支中，这将简写为 `Fluid主题根目录` ）
- 编辑 `Fluid主题根目录` 下的 `_config.yml` （在此分支中，这将简写为 `Fluid主题配置` ）
    - `favicon` （浏览器标签页图标，可为Url）

                                                                              - `apple_touch_icon` （浏览器标签页图标，但仅用于苹果设备，可为Url）
                                                                              - `copy_btn` （代码块复制按钮，可为 `true` 或 `false` ）
                                                                              - `typing` （打字机，可为 `true` 或 `false` ）
                                                                              - 页头
                                                                                - `blog_title` （博客首页标题）
                                                                                  - `menu` （导航栏选项，按需修改）
                                                                              - `页脚`
                                                                                - `rss` （如果你的博客有rss，在这里填入地址）
                                                                              - `beian` （如果你有备案，在这里填写）（本站长不推荐，那样会很不自由）
                                                                              - `首页`
                                                                                - `banner_img` （首页大图，推荐使用图片CDN）（其它地方的 `banner_img` 也一样）
                                                                                  - `slogan` （首页副标题，这里讲述随机一言的制作方法）
                                                                                    - 找到 `api` 选项
                                                                                      - `enable` 填入 `true`
                                                                                      - `url` 填入 `"https://v1.hitokoto.cn/"`
                                                                                      - `method` 填入 `GET`
                                                                                      - `headers` 填入 `{}`
                                                                                      - `keys` 填入 `["hitokoto"]`
                                                                              - `关于页`

                                                                                - `hexo new page about` （创建关于页）

                                                                                  - 编辑博客目录下的 `/source/about/index.md` 文件

                                                                                  ```markdown
                                                                                  ---

                                                                                  title: about
                                                                                  layout: about
                                                                                  ```

                                                                                ***

                                                                              这里写关于页的正文，支持 Markdown, HTML
                                                                              ```	-`avatar`（你的头像，可为Url）

        -`name`（你的互联网化名）-`intro`（你的个性介绍）-`icons` （你的社交平台链接）

                                                                              - `友链页`
                                                                                - `items` （照着示例写）

- 更多请看注释说明和[主题官网](https://hexo.fluid-dev.com/docs/start)

## 分支结束

# 自定义 `博客配置`

- `title` （博客名）
- `author` （作者，填你的互联网化名）
- `url` （填写博客地址，将作为博客访问地址）（在后续步骤中，此将简写为 `博客地址` ）
- `new_post_name` （新文章地址，建议 `:title.md` 适用于SEO优化）
- `plugins:` （填入用到的插件）（在后续步骤中，此将简写为 `插件列表` ）

# 使用 `gulp` 压缩博客体积

- 进入 `博客根目录`
- 安装 `gulp` 及附加功能
    - `npm install --global gulp-cli` （全局安装gulp）
        - `npm install gulp-htmlclean --save-dev`  
          `npm install gulp-html-minifier-terser --save-dev`  
          （安装gulp的压缩html功能）
        - `npm install gulp-clean-css --save-dev` （安装gulp的压缩css功能）
        - `npm install gulp-terser --save-dev` （安装gulp的压缩js功能）
- 在 `博客根目录` 新建 `gulpfile.js` 文件并输入以下内容

```javascript
//用到的各个插件
var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css");
var htmlmin = require("gulp-html-minifier-terser");
var htmlclean = require("gulp-htmlclean");

// gulp-tester
var terser = require("gulp-terser");

// 压缩js
gulp.task("compress", async () => {
    gulp.src(["./public/**/*.js", "!./public/**/*.min.js"])
        .pipe(terser())
        .pipe(gulp.dest("./public"));
});

//压缩css
gulp.task("minify-css", () => {
    return gulp
        .src(["./public/**/*.css"])
        .pipe(
            cleanCSS({
                compatibility: "ie11",
            }),
        )
        .pipe(gulp.dest("./public"));
});

//压缩html
gulp.task("minify-html", () => {
    return gulp
        .src("./public/**/*.html")
        .pipe(htmlclean())
        .pipe(
            htmlmin({
                removeComments: true, //清除html注释
                collapseWhitespace: true, //压缩html
                collapseBooleanAttributes: true,
                //省略布尔属性的值，例如：<input checked="true"/> ==> <input />
                removeEmptyAttributes: true,
                //删除所有空格作属性值，例如：<input id="" /> ==> <input />
                removeScriptTypeAttributes: true,
                //删除<script>的type="text/javascript"
                removeStyleLinkTypeAttributes: true,
                //删除<style>和<link>的 type="text/css"
                minifyJS: true, //压缩页面 JS
                minifyCSS: true, //压缩页面 CSS
                minifyURLs: true, //压缩页面URL
            }),
        )
        .pipe(gulp.dest("./public"));
});

// 运行gulp命令时依次执行以下任务
gulp.task("default", gulp.parallel("compress", "minify-css", "minify-html"));
```

- 在博客启动时运行 `gulp` 命令

# 本地启动博客

- `hexo clean` （清除上一次启动生成的静态文件）
- `hexo g` （生成静态文件）
- `gulp` （压缩）
- `hexo s` （启动服务）
- 编写 `debug.sh` 以便捷启动

```shell
hexo clean
hexo g
gulp
hexo s

# 运行时输入 `sh debug.sh`
```

# 部署

- 新建Github仓库，名为 `你注册Github时用的用户名.github.io`
- 运行 `git config --global user.name "你注册Github时用的用户名"` 以设置用户名
- 运行 `git config --global user.email "你注册Github时用的邮箱"` 以设置邮箱
- 运行 `ssh-keygen -t rsa -C "随便几个字母+数字+特殊符号(不能是引号)的组合(越长越好)"`  
  网上答案说这里要用邮箱，但实测不用邮箱也可以，用邮箱可以保证唯一性，看个人吧
- 连按三个回车创建密钥
- 进入 `.ssh` 目录（隐藏目录，自己找方法）
- 找到 `id_rsa.pub` 文件并复制文件内容到剪贴板（公钥）
- 打开[GitHub SSH and GPG keys](https://github.com/settings/ssh/new)页面
    - `Title` 为标题，任意写
        - `Key` 为公钥内容，将从 `id_rsa.pub` 复制的内容粘贴进去
        - 点击 `Add SSH key` 添加
        - 使用 `ssh -T git@github.com` 测试链接，出现 `Hi 你注册Github时用的用户名! You've successfully authenticated, but GitHub does not provide shell access.` 则代表认证成功
- 进入到 `博客根目录` 运行 `npm install hexo-deployer-git --save` 安装部署工具
- 编辑 `博客配置` 添加以下内容

    ```yaml
    # Deployment
    deploy:
        type: git
        repo: git@github.com:你注册Github时用的用户名/你注册Github时用的用户名.github.io.git
        branch: blog #分支名称，除main或master都行
        ignore_hidden: false
    ```

- 编写 `deploy.sh` 便捷部署

    ```shell
    hexo clean
    hexo g
    gulp
    hexo d

    # 部署时运行 `sh deploy.sh`
    ```

- 进入到 `https://github.com/你注册Github时用的用户名/你注册Github时用的用户名.github.io`
- 点击 `Settings`
- 点击 `Pages`
- 设置 `Build and deployment`
    - `Source` 选择 `Deploy from a branch`
        - `Branch` 选择 `博客配置` 设置的分支名，路径选 `/(root)`
        - 点击 `Save`
- 现在博客已成功部署好，进入 `https://你注册Github时用的用户名.github.io` 查看
- `Github Pages` 还可绑定自定义域名，不展开叙述

# 本教程完
