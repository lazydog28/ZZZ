---
title: 战斗策略
icon: object-ungroup
order: 4
category:
  - 开发指南
tag:
  - 战斗策略

editLink: false
prev: false
next: false
comment: false
---

## 1 基本代码

我们以 `fight\tactics\艾莲.yaml` 为例

::: details 艾莲战斗策略
```yaml
# 冲刺蓄力攻击
-   key: "w"
    type: "down"
    delay: 0
# 连按shift2次
-   key: "shift"
    type: "press"
    duration: 0.025
    delay: 0.1
    repeat: 2
# 鼠标左键按下
-   key: "left"
    type: "press"
    duration: 1.2
    delay: 0.1
# 松开w
-   key: "w"
    type: "up"
    delay: 0

# 平A第1段
-   key: "left"
    type: "press"
    duration: 0.025
    delay: 0.4
# 平A第2段
-   key: "left"
    type: "press"
    duration: 0.025
    delay: 0.4
# 平A第3段连按延长时间
-   key: "left"
    type: "press"
    duration: 0.025
    delay: 0.1
    repeat: 5

# 平A第1段
-   key: "left"
    type: "press"
    duration: 0.025
    delay: 0.4
# 平A第2段
-   key: "left"
    type: "press"
    duration: 0.025
    delay: 0.4
# 平A第3段连按延长时间
-   key: "left"
    type: "press"
    duration: 0.025
    delay: 0.1
    repeat: 5
```
:::

您可以看到我们的 `战斗策略文件` 基本单位及格式是

```yaml
-   key: "按键"
    type: "事件类型"
    duration: 持续时间
    delay: 间隔时间
    repeat: 重复
```

同时程序默认每执行两次 `普通战斗策略`（`艾莲.yaml`） 后，执行一次 `技能战斗策略`（`艾莲技能.yaml`）

::: tip 提示
在编程中，`:` 前面的一般称为 `键名`，`:` 后面的称为 `键值`

```yaml
键名: "键值"
```

同时每一单位的开头必须有 `-`，每一行需要有缩进（键盘上 `Tab` 键），一般为四个空格

```yaml
-   key: "left"
    type: "press"
    duration: 0.025
    delay: 0.1
    repeat: 5
```

我们把由 `-` 开头的一段 `yaml` 代码称为一个单位
:::

您知道这些就可以着手开发了， 接下来我会详细说明 `战斗策略文件` 的参数

## 2 细节说明

本章节旨在介绍每个 `键名` 对应的 `键值` 可填写的内容

### 2.1 key 按键

**键名说明：** 当执行到该单位时，按下哪个键

**可选参数：**

| 键值  | 意义           |
| ----- | -------------- |
| a     | 键盘上对应字母 |
| b     | 键盘上对应字母 |
| c     | 键盘上对应字母 |
| d     | 键盘上对应字母 |
| ...   | 键盘上对应字母 |
| z     | 键盘上对应字母 |
| left  | 鼠标左键       |
| right | 鼠标右键       |

**代码示例：**

```yaml
# 鼠标左键
-   key: "left"
```

### 2.2 type 事件类型

**键名说明：** 当执行到该单位时，按下的键应该以何种方式执行

**可选参数：**

| 键值  | 意义                   |
| ----- | ---------------------- |
| press | 按下按键（会自动抬起） |
| down  | 按住按键（不自动抬起） |
| up    | 抬起按键（恢复该按键） |

**代码示例：**

```yaml
# 按下鼠标左键
-   key: "left"
    type: "press"
```

```yaml
# 按住鼠标左键，之后松开
-   key: "left"
    type: "down"

-   key: "left"
    type: "up"
```

### 2.3 duration 持续时间

**键名说明：** 执行到该单位时，需要按下按键多久

**可选参数：** 所有的正整数和小数，不能为负

**代码示例：**

```yaml
# 按下鼠标左键并持续 0.025 秒
-   key: "left"
    type: "press"
    duration: 0.025
```

### 2.4 delay 间隔时间

**键名说明：** 执行完该单位时，需要间隔多长时间

**可选参数：** 所有的正整数和小数，不能为负。默认为 `0.1`

**代码示例：**

```yaml
# 按下鼠标左键并持续 0.025 秒，执行完成后等待 0.1 秒
-   key: "left"
    type: "press"
    duration: 0.025
    delay: 0.1
```

### 2.5 repeat 重复次数

**键名说明：** 需要重复执行几次该单位

**可选参数：** 所有的正整数，不能为负或小数。默认为 `1`

**代码示例：**

```yaml
# 按下鼠标左键并持续 0.025 秒，执行完成后等待 0.1 秒。重复执行该单位 2 次
-   key: "left"
    type: "press"
    duration: 0.025
    delay: 0.1
    repeat: 2
```