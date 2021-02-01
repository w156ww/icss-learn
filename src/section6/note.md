## 全兼容的多列均匀布局问题

### 总结
> 第一种, 使用 flex 方法。

> 方法二采用 text-aligen: justify; 属性。


#### text-aligen: justify;
想要该属性生效，需满足下列条件：
1、使用该属性两端对齐，需要注意在元素之前添加**[空格|换行符|制表符]**才能起作用；
2、当给元素使用该属性后，需要再子元素的最后一个元素上添加 text-align-last: justify; 属性。该属性只有在 text-align: justify; 时才生效；
3、由于 text-align-last 属性兼容性不好。可以采用伪元素的方式，在父元素添加一个 ::after。通过给伪元素设置 inline-block , 设置宽度 100%，配合容器的 justify 即可。
    该方法是根据 justify 的特性实现的。justify 只有在存在第二行的星狂洗啊，第一行才两端对齐，所以这里创造一个假的第二行即可。



