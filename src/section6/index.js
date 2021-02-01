import './index.css'



function render() {
    const body = document.body;
    body.innerHTML = `
<div class="container">
    <div class="justify">
        <i>1</i>
        <i>2</i>
        <i>3</i>
        <i>4</i>
        <i>5</i>
        <!--[if lte IE 7]> <b></b><!
        [endif]--><!-- 兼容不支持伪元素的 ie678 -->
    </div>
    <div class="justify">
        <i>1</i>
        <i>2</i>
        <i>3</i>
        <i>4</i>
    </div>
    <div class="justify">
        <i>1</i>
        <i>2</i>
        <i>3</i>
    </div>
    <div class="justify">
        <i>1</i>
        <i>2</i>
    </div>
    <div class="justify">
        <i>1</i>
    </div>
</div>
    `;
}

render()