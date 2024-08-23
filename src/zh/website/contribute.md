---
title: 参与制作
comment: false
next: false
editLink: false
prev: false
icon: code-pull-request
category:
  - 关于网站
  
tag:
  - 参与制作
---

## 1 准备工作

### 1.1 克隆源码

首先，您需要 `fork` 并 `clone` [文档仓库](https://github.com/lazydog28/ZZZ)。请确保您拥有一定的 `Markdown` 编写基础。如果没有，请前往 [Markdown 入门基础](https://markdown.com.cn/intro.html) 学习一些基本的语法知识


### 1.2 部署环境

在此之前，您需要自行配置好 `Node v20.12.1` 或者其他 `Stable` 版本，在此不作过多赘述

本项目基于 [Vuepress Hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope)，我们采用 `pnpm` 包管理器管理项目。因此您需要运行以下指令以部署环境

```bash
# 安装 pnpm 包管理器
npm install -g pnpm
# 安装 pnpm-lock.yaml 内的所有包
pnpm install
```

之后运行项目

```bash
pnpm docs:dev
```
更多内容请前往 [Vuepress 官网](https://vuepress.vuejs.org/zh/)，您需要了解一些关于 `Vuepress 框架` 的基本常识

:::: tip 启动参数解释

::: details package.json
```json
"scripts": {
  "docs:build": "vuepress-vite build src . --dest dist",
  "docs:clean-dev": "vuepress-vite dev src --clean-cache",
  "docs:dev": "vuepress-vite dev src",
  "docs:update-package": "pnpm dlx vp-update",
  "docs:buildg": "vuepress-vite build src . --dest D:\\Files\\Projects\\Github\\ZonelessZoneZeroDocument\\dist"
}
```
:::

如上所示，我们配置了多种启动模式

**docs:build：** 编译该文档到项目的 `.vuepress/dist` 目录下

**docs:clean-dev：** 清除缓存启动

**docs:dev：** 运行框架

**docs:update-package：** 更新框架

**docs:buildg：** 图方便加的一个生成方式，效果和 `docs:build` 一样，生成的位置不同
::::

::: danger 警告
请勿运行 `docs:update-package`，该指令会更新所有包。但不一定所有人都会更新，这将会导致冲突。同时更新的包可能会导致意想不到的问题需要解决。如果您修改了 `node_modules` 下的内容，您的 `PR` 请求将会被拒绝
:::