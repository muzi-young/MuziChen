# css 开发中常用代码段

## **超出显示省略号** 

### 单行显示省略号

```css
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
```

### 多行显示省略号

```css
text-overflow: ellipsis; 
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: n; // n代表行数
overflow: hidden;
```

### 文字使用渐变色

```html
<text>文字使用渐变<text>
```

```css
text{
    display: inline-block;
	background: linear-gradient(0deg, #fdf0ce 0%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

> 注：1.如果是text设置行内块属性
>
> ​		2.设置渐变背景 就是字体的渐变效果
>
> ​		3.` background-clip: text;`
>
> ​		4.颜色设置为透明
>
> ​		<span style="color:red;">5.这是最内层元素，其内不可再写其他元素</span>

### 