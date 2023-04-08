
const template = document.createElement('template');
// template.innerHTML = `
//     <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
// `;

class Slider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.innerHTML = `<h1>Hello World...</h1>`;
    this.style.color = "red";
}
}

customElements.define('slider', Slider);
