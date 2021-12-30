---
title: Typescript与Javascript有何不同？
categories:
  - Typescript
tags:
  - Javascript
  - Typescript
date: 2021-09-03 20:40:53
---
> TypeScript 其实就是类型化的 JavaScript，它不仅支持 JavaScript 的所有特性，还在 JavaScript 的基础上添加了静态类型注解扩展。

> JavaScript 有原始数据类型 string、number等，但是在声明的时候都没有定义数据类型，TypeScript 会对赋值及其他所有操作默认做静态类型检测，也就是说TypeScript 其实就是 JavaScript 的超集

### 基本类型的语法

```
let <变量名>:<数据类型> = 值;
数据类型有：基本数据类型number、string、boolean、null、undefined、symbol;还可以混合类型声明
如：let <变量名>:<数据类型1，数据类型2> = 值
这里既可以满足数据类型1或者数据类型2任意一者即可
```

Eggs：`let num:number = 1`  ,`:number`这里就是定义的数据类型

### 原始数据类型

**字符串string**
```
let firstname: string = 'Captain'; // 字符串字面量
let familyname: string = String('S'); // 显式类型转换
let fullname: string = `my name is ${firstname}.${familyname}`; // 模板字符串
```
**数字number**
```
/** 十进制整数 */
let integer: number = 6;
/** 十进制整数 */
let integer2: number = Number(42);
/** 十进制浮点数 */
let decimal: number = 3.14;
/** 二进制整数 */
let binary: number = 0b1010;
/** 八进制整数 */
let octal: number = 0o744;
/** 十六进制整数 */
let hex: number = 0xf00d;
<!-- 遇到比较大的整数的时候可以用big -->
let big: bigint =  100n;
```
**布尔值boolean**
```
/** TypeScript true为 真 */
let TypeScriptIsGreat: boolean = true;
 /** TypeScript false 为 否 */
let TypeScriptIsBad: boolean = false;
```
**Symbol**
```

```
**bigint**

**undefined**

**null**
