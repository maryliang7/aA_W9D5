const DOMNodeCollection = require("./dom_node_collections.js");

window.$l = (el, func) => {
  let queue = [];

  if (document.readyState != 'loading') {
    func();
  } else {
    queue.push(func);
    document.addEventListener("DOMContentLoaded", (event) => {
      queue.forEach((fxn) => {
        fxn();
      });
    });
  }
  const elements = document.querySelectorAll(el);
  let arrEle = Array.from(elements);
  return new DOMNodeCollection(arrEle);
};
