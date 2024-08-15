---
title: Fight
icon: object-ungroup
order: 4
category:
  - Develop
tag:
  - Fight

editLink: false
prev: false
next: false
comment: false
---

## 1 Before Read

In order to help developers better develop combat strategies, this page will tell some basic combat strategy settings. If you have a good strategy, you are welcome to [Project Home](https://github.com/?q=zenle) PR

## 2 基本代码

To `fight\tactics\艾莲.yaml` as an example

::: details 艾莲 Combat strategy
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

You can see our `Fighting strategy file` basic units and formats are

```yaml
-   key: "Key"
    type: "Type"
    duration: Duration
    delay: Delay
    repeat: Repeat
```

At the same time, after the procedure defaults to each execution twice, the `ordinary combat strategy` (`艾莲.yaml`), execute a `skill combat strategy` (`艾莲技能.yaml`)

::: tip Tips
In programming, before `:` is `key names`, After `:` is `key value`

```yaml
Key names: "Key value"
```

At the same time, the beginning of each unit must be `-`, each line needs to be indentified (the `Tab` key on the keyboard), generally four spaces

```yaml
-   key: "left"
    type: "press"
    duration: 0.025
    delay: 0.1
    repeat: 5
```

We call the code from the first section of `yaml` as a `unit`
:::

You know this can be developed, I will explain in detail the parameters of the `fighting strategy file`

## 3 Details

This chapter aims to introduce the content corresponding to the `key value` of each `key name`

### 3.1 key

**Key name description:** When executing to the unit, press which key

**Optional parameter:**

| Key  | significance           |
| ----- | -------------- |
| a     | Corresponding letters on the keyboard |
| b     | Corresponding letters on the keyboard |
| c     | Corresponding letters on the keyboard |
| d     | Corresponding letters on the keyboard |
| ...   | Corresponding letters on the keyboard |
| z     | Corresponding letters on the keyboard |
| left  | Left mouse button       |
| right | Right mouse button       |

**Code example:**

```yaml
# Left mouse button
-   key: "left"
```

### 3.2 type

**Key name description:** When the unit is executed, how should the key should be executed?

**Optional parameter:**

| Key  |significance                   |
| ----- | ---------------------- |
| press | Press the button (it will be lifted automatically) |
| down  | Hold down the button (not automatically lift) |
| up    | Lift the button (restore this button) |

**Code example:**

```yaml
# Press the left mouse button
-   key: "left"
    type: "press"
```

```yaml
# Hold down the left mouse button and let go
-   key: "left"
    type: "down"

-   key: "left"
    type: "up"
```

### 3.3 duration

**Key name description:** When you execute it to the unit, how long do you need to press the button?

**Optional parameter:** All positive integer and decimal, cannot be negative

**Code example:**

```yaml
# Press the left mouse button and last 0.025 seconds
-   key: "left"
    type: "press"
    duration: 0.025
```

### 3.4 delay

**Key name description:** How long does it take to interval when performing the unit

**Optional parameter:** All positive integers and decimals cannot be negative. The default is `0.1`

**Code example:**

```yaml
# Press the left mouse button and last 0.025 seconds, wait for 0.1 seconds after the execution is completed
-   key: "left"
    type: "press"
    duration: 0.025
    delay: 0.1
```

### 3.4 repeat

**Key name description:** You need to be executed several times the unit

**Optional parameter:** All positive integers cannot be negative or decimal. The default is `1`

**Code example:**

```yaml
# Press the left mouse button and last for 0.025 seconds, and wait for 0.1 seconds after the execution is completed. Repeat the unit 2 times
-   key: "left"
    type: "press"
    duration: 0.025
    delay: 0.1
    repeat: 2
```