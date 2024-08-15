---
title: 常见问题
icon: circle-check
order: 4
category:
  - 使用指南
tag:
  - 常见问题

editLink: false
prev: false
next: false
comment: true
---

## 1 开始之前

这里是一些常见问题的汇总，您可以反馈问题的解决方式在评论区。我会持续收集不同用户遇到的问题，并反馈在这里

::: warning 注意
阅读之前，请务必确认已阅读 [配置环境](./required.md) 的内容，如果没有。请返回阅读
:::

## 2 常见问题

::: details 脚本终端提示我游戏窗口大小不对，但配置与文档的要求一样

这是因为你的 `DPI` 是在进入游戏后才修改的，`DPI` 变小会导致游戏窗口的实际大小一起变小，而不是游戏设置里面所说的 “分辨率”。导致获取到的实际窗口大小与文档不相符
![DPI_Problems](/image/dpi_problems.png)

::: tip 解决方案
- **如果您未启动游戏：** 启动游戏前修改 `DPI` 为 `100%`
- **如果您已启动游戏：** 调整 `DPI` 为 `100%` 后在游戏设置里设定游戏窗口为任意大小。再改回要求的 `1280x720`
:::

::: details 使用 CPU 识别，脚本终端报错含有 avx_supported() 字样的内容
`PaddlePaddle`（飞桨）的 `CPU 识别` 基于 `AVX` 指令集，一般来说，现代的 `CPU` 均支持 `AVX` 的指令集

当您出现这个错误，则说明您可能在 `BIOS` 禁用了 `AVX`。如果不是，则说明您的设备过于老旧，建议您更换设备
![AVX_Problems](/image/AVX_problems.png)
::: tip 解决方案
- **您是小白：** 在 `BIOS` 内启用 `AVX` 指令集
- **您有基础：** 参考 [高级设置](./configure.md) 的 **1 使用 Conda 环境** 配置 `GPU` 版本
:::