<<<<<<< HEAD
=======
import './index.css'
>>>>>>> 599e422e2071274cef529f618714dd642a2a9634


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
<<<<<<< HEAD
=======

>>>>>>> 599e422e2071274cef529f618714dd642a2a9634
}

render()