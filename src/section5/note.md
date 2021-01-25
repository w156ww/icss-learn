## 单行居中，多行居左外加省略号显示

### 总结
> 第一种通过标签嵌套的方式，外部标签text-align：center；内部标签 left对齐，并且 display 设置为 inline-block 。让父元素的 center 生效。

> 方法二采用两个一样的标签方法，设置为相同的行高，相同的内容。其中一个正常left 布局。另一个采用绝对定位的方式，将第一行覆盖，并且配合 overflow: hidden 和 text-align: center; 来将超出部分隐藏掉并居中对齐。


#### 多行加省略号
省略号使用了 text-overflow: ellipsis; 属性。多行则使用了 -webkit-line-clamp: 2;-webkit-box-orient: vertical; 属性。并且都需要配合 overflow: hidden 使用。



