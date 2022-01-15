# 如何判断是不是数组？
首先 js数据类型有 number、string、null、underfind、boolean、object、symbol
number，string，boolean，underfind可以通过typeof判断出类型
而object，array，null 返回都是object，所以要用其他的方式才能判断出
常用四种判断出数组类型的方法：
## 使用 instanceof 方法
判断是否是数组或者对象 a instanceof b
> a 是要判断的对象或者具体的数组
> b 是要判断哪种类型 Array或Object
如果判断数组 a instanceof Array 是数组返回true 否则返回false
如果判断对象 a instanceof Object 是对象返回true 否则返回false
## 通过 constructor 判断
实例的构造函数属性 constructor 指向构造函数,可以判断实例是不是数组
语法 a.constructor == [] 是数组返回true 否则返回false
## 使用Object.prototype.toString.call()判断
Object.prototype.toString.call(a) === '[object Array]' 是数组返回true 否则返回false
可以判断不同的类型 [object object]、[object Array]等
## 使用Array.isArray(a)判断
用于确定传递的值是否是一个数组，返回一个布尔值
> a 是要判断的数组