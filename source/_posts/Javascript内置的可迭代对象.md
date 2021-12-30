---
title: Javascript内置的可迭代对象
date: 2021-08-31 17:26:35
categories: 
- Javascript
tags:
- js
- ES6
- iterator
---

### js内置的可迭代对象

> ES6中引入了迭代器和可迭代对象，并提出对迭代对象的支持（for···of循环、Map(iterable)构造器等···）
>
> 也就是说一个数据结构只要具有symbol.iterator属性，就可以认为是可迭代的(iterable)
>
> 因此 js可迭代对象有：`Array`、`Map`、`Set`、`String`、`Typed Array`、`函数的arguements`、`NodeList对象`

#### 数组Arrays

```
console.log([][Symbol.iterator])
 
for(let x of ['a','b'])
  console.log(x)
```

#### 字符串Strings 

```
console.log(""[Symbol.iterator])
for(let x of "abc")
  console.log(x)
```

####  Map

```
let map = new Map().set('a', 1).set('b', 2);
console.log(map[Symbol.iterator]);
for (let pair of map) {
  console.log(pair);
}
```

####  Set

```
let set = new Set().add('a').add('b');
for (let x of set) {
  console.log(x);
}
```

####   arguments

```
function printArgs() {
  for (let x of arguments) {
    console.log(x);
  }
}
printArgs('a', 'b');
```

####  Typed Arrays

####  Generators，ES6新增加