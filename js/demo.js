

class Overlay {
  constructor() {
    this.DOM = {el: document.querySelector(".overlay")};
    this.DOM.reveal = this.DOM.el.querySelector(".overlay__reveal");
    this.DOM.items = this.DOM.el.querySelectorAll(".overlay__item");
  }

  show(){
    this.DOM.el.classList.add("Testing!");
    console.log(this.DOM.el);
  }
}

const z = new Overlay();
z.show();


