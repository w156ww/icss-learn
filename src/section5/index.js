import './index.css'



function render() {
    const body = document.body;
    body.innerHTML = `
    <section class="method1">
    <h2><p>单行居中</p></h2>
    <h2>
        <p>
            <span
                >多行居左，多行居左，多行居左，多行居左，多行居左</span
            >
        </p>
    </h2>
</section>
<section class="method2">
    <h2>
        <p>单行居中</p>
        <p class="pesudo">单行居中</p>
    </h2>
    <h2>
        <p>多行居左，多行居左，多行居左，多行居左，多行居左</p>
        <p class="pesudo">
            多行居左，多行居左，多行居左，多行居左，多行居左
        </p>
    </h2>
</section>
    `;
}

render()