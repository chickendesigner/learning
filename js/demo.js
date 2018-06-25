
class Item {
  constructor (el) {
  }
}


class Overlay {
  constructor() {
    this.DOM = {el: document.querySelector(".overlay")};
    this.DOM.items = this.DOM.el.querySelectorAll(".overlay__item");
  }
  show (contentItem) {
    console.log("this is a show method");
    this.contentItem = contentItem;
    this.revealItem(contentItem);
  }

  revealItem () {
    this.contentItem.style.opacity = 1;
  }
}

class Grid {
  constructor () {
    this.myItem = document.querySelector(".grid__item_1");
    this.myItem.addEventListener('click', (ev) => {
      ev.preventDefault();
      this.openItem();
    });

    this.overla
  }

  openItem (contentItem) {
    console.log(contentItem);
  }

}


const z = new Overlay();
z.show();

const v = new Grid();
console.log(v.myItem);

