---
title: 文档格式
comment: false
next: false
editLink: false
prev: false
icon: pen-nib
category:
  - 关于网站
  
tag:
  - 文档格式
---

## 1 开始之前

如果您要参与到文档建设，请您认真学习本页内容。如果您的文档格式并不符合我们的格式要求，将会被拒绝 `PR` 请求。当然，无论通过与否，我们都十分感激您花时间为我们项目做出的贡献，但为了更好的阅读体验，我们会对格式有很严的要求

## 2 注意事项

如果您作为开发者参与到我们的文档开发中来，请您注意以下几点

1. 请不要随意修改别人写的文档，错字或翻译除外
2. 请不要随意修改 `theme.ts`，`config.ts`，这将会对框架产生影响。如果您希望为框架增加一些新功能请在 `PR` 中说明
3. 请严格遵守本文档的开发要求

## 3 目录说明

我们的网站目录设计如下所示

::: details 目录设计
```markdown
ZZZ_Vercel
├─ src
│  ├─ portfolio.md
│  ├─ README.md
│  ├─ zh
│  │  ├─ portfolio.md
│  │  ├─ README.md
│  │  ├─ website
│  │  │  ├─ contribute.md
│  │  │  ├─ format.md
│  │  │  ├─ README.md
│  │  │  └─ updatelog.md
│  │  ├─ demo
│  │  │  ├─ configure.md
│  │  │  ├─ deploy.md
│  │  │  ├─ README.md
│  │  │  ├─ required.md
│  │  │  └─ solve.md
│  │  └─ community
│  │     ├─ bug.md
│  │     ├─ discuss.md
│  │     ├─ problem.md
│  │     ├─ README.md
│  │     └─ updatelog.md
│  ├─ website
│  │  ├─ contribute.md
│  │  ├─ format.md
│  │  ├─ README.md
│  │  └─ updatelog.md
│  ├─ demo
│  │  ├─ configure.md
│  │  ├─ deploy.md
│  │  ├─ README.md
│  │  ├─ required.md
│  │  └─ solve.md
│  ├─ community
│  │  ├─ bug.md
│  │  ├─ discuss.md
│  │  ├─ problem.md
│  │  ├─ README.md
│  │  └─ updatelog.md
│  └─ .vuepress
│     ├─ client.ts
│     ├─ config.ts
│     ├─ theme.ts
│     ├─ styles
│     │  ├─ config.scss
│     │  ├─ index.scss
│     │  └─ palette.scss
│     ├─ sidebar
│     │  ├─ en.ts
│     │  ├─ index.ts
│     │  └─ zh.ts
│     ├─ public
│     │  ├─ ···
│     ├─ navbar
│     │  ├─ en.ts
│     │  ├─ index.ts
│     │  └─ zh.ts
```
:::

| 文档编辑      | 文件说明                                                     | 框架设置                  | 文件说明             |
| ------------- | ------------------------------------------------------------ | ------------------------- | -------------------- |
| `/src/zh`     | 此处存放了所有的中文文档                                     | `src/.vuepress/navbar`    | 配置文档上方的导航栏 |
| `/src`        | 此处存放了所有的英文文档                                     | `src/.vuepress/sidebar`   | 配置文档左侧的导航栏 |
| `/src/public` | 此处用来存储文档需要引用的文件，引用时 `public` 文件夹将被当作根目录位置的文件夹处理<br/>例如在 `public` 下的图片只需要写 `/public/xxx.png` （只能用 `/`） | `src/.vuepress/config.ts` | 配置框架             |
|               |                                                              | `src/.vuepress/theme.ts`  | 配置主题和插件参数   |

## 4 基本原则

### 4.1 空格原则

**定义：** 空格原则指的是中英文及部分标点或者是控件之间需要留一个空格

::: md-demo 例子
**中文英文之间需要空格：** 本项目是 ZZZAuto 的文档，并非出于盈利目的开设

**标点符号之间需要空格：** 无论如何，他都是一个 “伟大” 的人

**特殊控件之间需要空格：** 本项目基于 `Vuepress` 框架构建
:::

但有的标点符号可能并不需要，一般来说。全角符号（中文的标点符号）是不需要空格的，如果遇到半角符号（英文的标点符号），您需要空一格。这会让文章看起来更加协调

### 4.2 示例原则

**定义：** 当遇到需要读者操作的文章，您需要提供示例或图片辅助理解

对于小白来说，口头讲述让他们理解并不现实，也不高效。因此您需要图片或例子来帮助他们理解和配置

就像 `4.1 空格原则` 这样，您需要提供例子给他们。如果是很简单的操作（例如 `打开资源管理器`）则不用

### 4.3 控件原则

**定义：** 当部分文本具有特殊含义的时候，您需要使用控件以突出它并不是普通的文本内容

::::md-demo 例子
**文本指向项目或编程语言等与编程有关的特殊名词：** `ZZZAuto` 基于 `Python` 开发

**该文本作为总结性或者小标题使用：** **我是总结**

**文本指向一个操作：** 打开 `设置`

**文本指向一段代码：** `print("hello world")`

**文本指向一个链接：** [ZZZAuto](https://github.com/sMythicalBird/ZenlessZoneZero-Auto)

**该内容作为提示，警告等重要的文本出现：**

::: tip 提示
我是提示
提示容器的更多参数请参考 [md-enhance 提示容器](https://plugin-md-enhance.vuejs.press/zh/guide/stylize/hint.html)
:::
::::

### 4.4 大写原则

**定义：** 对于单词，除了该单词是专有名词外，其他一律开头大写

:::md-demo 例子
`Python`

`md-enhance`

`Github`

`.html`
:::

### 4.5 标题原则

**定义：** 使用小数字让文章结构更加清晰

一般来说，第一个标题是 `二级标题`，其他标题都隶属于 `二级标题` 下，不使用 `一级标题` 是由于主题限制，一级标题会作为文档在侧边栏呈现的标题。因此文章正文中无法采用 `一级标题`

您需要使用小数字来让读者看清文章的目录结构，同时标题不能越级。最好仅使用 `二级标题` 和 `三级标题`

:::: md-demo 例子
## 1 我是二级标题

### 1.1 我是它的一号子标题

### 1.2 我是它的二号子标题
::::

同时 `文章标题` 的字数最好是四个字，`正文标题` 内容不限

### 4.6 图片原则

**定义：** 一张图片需要填写 `Alt` 属性，并放置在文字下方

::::md-demo 例子
请按 `Windows + Q` 输入 `显示器设置`

![搜索显示器](/image/MonitorSearch.png)

关闭 `HDR 模式` 和 `夜间模式`

![关闭HDR和夜间模式](/image/MonitorSetting.png)
::::

#### 4.7 存储原则

**定义：** 所有文件必须存放在 `public` 目录下，必须使用指定方式命名

存放在 `public` 下将有助于您修改和应用文件，图片放在 `src/.vuepress/public/image` 下，视频放在 `src/.vuepress/public/videos` 下

所有的文档必须使用英文命名，最好是只有一个单词，需要多个单词请用 `_` 连接，不能有中文，其他特殊符号，空格
