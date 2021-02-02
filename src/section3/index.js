import './index.css'



function render() {
    const body = document.body;
    body.innerHTML = `
        <section class="container">
            <div class="floatLeft">float</div>
            <div class="inlineBlock">inline-block</div>
        </section>
    `;
}

render()