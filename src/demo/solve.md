---
title: Solve
icon: circle-check
category:
  - Use guide
tag:
  - Solve

editLink: false
prev: false
next: false
comment: true
---

## 1 Before Read

Here is a summary of some common problems. You can solve the problem in the comment area. I will continue to collect the problems encountered by different users and feedback here

::: warning 注意
Before reading, please be sure to read it [Settings](./required.md) , If not. Please return to reading
:::

## 2 Common Problem

::: details The script terminal remind me that the game window size is wrong, But the configuration and document requirements are the same

This is because your `DPI` is modified after entering the game. The smaller of `DPI` will cause the actual size of the game window to become smaller, rather than the "resolution" in the game settings. As a result, the actual window size obtained does not match the documentation
![DPI_Problems](/image/dpi_problems.png)

::: tip Solution
- **If you haven't launched the game:** Modification before starting the game `DPI` is `100%`
- **If you have started the game:** After adjusting the `DPI` to `100%`, set the game window in the game settings as any size. Change the required `1280x720`
:::

::: details Using CPU recognition, the script terminal error contains the word avx_supported()
`PaddlePaddle's` `CPU recognition` is based on the `AVX` instruction set. Generally speaking, modern `CPU` all supports the instruction set of `AVX`

When you have this error, it means that you may disable `AVX` in `BIOS`. If not, it means that your equipment is too old, it is recommended that you change the device
![AVX_Problems](/image/AVX_problems.png)
::: tip Solution
- **Simple way:** 在 `BIOS` 内启用 `AVX` 指令集
- **Set GPU version envirenment:** 参考 [Settings](./configure.md) 的 **1 Use Conda Envirenment** to deploy `GPU Version` 
:::