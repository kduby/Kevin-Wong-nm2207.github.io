// Custom class for the element slider
class Slider extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});

    // Create spans
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    const title = document.createElement('h3');
    title.innerHTML = this.attributes.id.value;

    const scale = document.createElement('input');
    scale.setAttribute('type', 'range');
    scale.setAttribute('min', '0');
    scale.setAttribute('max', '10');
    scale.setAttribute('type', 'range');
    scale.setAttribute('value', '5');
    scale.addEventListener("change",changeSlider);

    var rating = document.createElement('h1');
    rating.innerHTML = scale.value;

    function changeSlider(){
      var slider = scale.value;
      rating.innerHTML = scale.value;
      scale.setAttribute('value', slider);
    }


    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
        position: center;
        margin: 20px 20px 50px;
      }

      h3 {
        font-weight: 200;
        font-size: 0.9em;
        margin: 5px 5px 50px;
        color: #999;
        display:inline-block;
      }

      h1 {
        font-weight: 500;
        font-size: 1em;
        margin: 10px 10px 50px;
        color: #5F9EA0;
        display:inline-block;
      }
      
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    // console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(scale);
    wrapper.appendChild(title);
    wrapper.appendChild(rating);
    // console.log(wrapper)
  }
}

// Define the new element
customElements.define('scale-slider', Slider);