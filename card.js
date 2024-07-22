class Card extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        const title = this.getAttribute('titulo');
        const text = this.getAttribute('preco');
        const textDesc = this.getAttribute('descricao');
        const imgScr = this.getAttribute('img');

        const div = document.createElement("div");
        div.className = "card mb-3 mt-3";
        div.innerHTML = `
        <div class="col">
            <div class="card">
              <img src="${imgScr}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"> ${title} </h5>
                <p class="card-text fw-bold"> ${text} </p>
                <p class="card-text"> ${textDesc} </p>
                <a href="#" class="btn btn-primary"> Adicionar ao Carrinho </a>
              </div>
            </div>
        </div>`;
        this.appendChild(div);
    }
}

customElements.define("card-news", Card);