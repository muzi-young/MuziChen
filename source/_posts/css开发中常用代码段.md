---
title: css开发中常用代码段
date: 2021-08-31 18:11:13
categories: 
- CSS
tags:
- css
---

## css 开发中常用代码段

### **超出显示省略号** 

#### 单行显示省略号

```css
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
```

#### 多行显示省略号

```css
text-overflow: ellipsis; 
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: n; // n代表行数
overflow: hidden;
```