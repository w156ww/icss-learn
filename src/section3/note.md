## 层叠顺序与堆栈上下文


#### 七阶层叠图
![七阶层叠图](./7阶层叠.png)


##### 层叠顺序
1. 形成堆叠上下文环境的元素的背景与边框
2. 拥有负 z-index 的子堆叠上下文元素 （负的越高越堆叠层级越低）
3. 正常流式布局，非 inline-block，无 position 定位（static除外）的子元素
4. 无 position 定位（static除外）的 float 浮动元素
5. 正常流式布局， inline-block元素，无 position 定位（static除外）的子元素（包括 display:table 和 display:inline ）
6. 拥有 z-index:0 的子堆叠上下文元素
7. 拥有正 z-index: 的子堆叠上下文元素（正的越低越堆叠层级越低）


#### 堆叠上下文
> 堆叠上下文是HTML元素的三位概念，可以理解为 z 轴的大小

>如果形成了堆叠上下文，将不在遵守上述层叠顺序的关系，仅与 z-index 相关

* 根元素 (HTML),
* z-index 值不为 "auto"的 绝对/相对定位，
* 一个 z-index 值不为 "auto"的 flex 项目 (flex item)，即：父元素 display: flex|inline-flex，
* opacity 属性值小于 1 的元素（参考 the specification for opacity），
* transform 属性值不为 "none"的元素，
* mix-blend-mode 属性值不为 "normal"的元素，
* filter值不为“none”的元素，
* perspective值不为“none”的元素，
* isolation 属性被设置为 "isolate"的元素，
* position: fixed
* 在 will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值
* -webkit-overflow-scrolling 属性被设置 "touch"的元素


