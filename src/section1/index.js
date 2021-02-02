

function render() {
    const body = document.body;
    let temp = "";
    for (let i = 0; i < 8; i++) {
        temp += `
        <section>
            <h2>方法${i + 1}</h2>
            <div class="method-${i + 1}"></div>
        </section>`;
    }
    body.innerHTML = temp;
}

render()