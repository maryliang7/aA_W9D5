class DOMNodeCollection {
  constructor(arr) {
    this.elements = arr;
  }

  html(str) {
    if (str === undefined) {
      return this.elements[0].innerHTML;
    } else {
      this.elements.forEach( (ele) => {
        ele.innerHTML = str;
      });
    }
  }

  empty() {
    this.html("");
  }

  append(el) {
    if (el instanceof Array) {
      el.forEach((ele) => {
        this.html(ele.outerHTML);
      });
    } else if (el instanceof HTMLElement){
      this.html(el.outerHTML);
    } else {
      this.html(el);
    }
    
  }

  attr(key, values) {
    this.elements.forEach( (el) => {
      el.setAttribute(key, values);
    });
  }

  addClass(class_name) {
    this.elements.forEach( (el) => {
      el.className = class_name;
    });
  }

  removeClass() {
    this.addClass("");
  }

  children() {
    let arr = [];
    this.elements.forEach( (ele) => {
      arr.push(ele.children);
    });
    return new DOMNodeCollection(arr);
  }

  parent() {
    let arr = [];
    this.elements.forEach((ele) => {
      arr.push(ele.parentElement);
    });
    return new DOMNodeCollection(arr);
  }

  find(selector){   //ul.find()
    let arr = [];
    this.elements.forEach((ele) => {
      let subArr = Array.from( ele.querySelectorAll(selectors) );
      arr = arr.concat(subArr);
    });
    return new DOMNodeCollection(arr);
  }

  remove(){
    this.elements.forEach( (ele) => {
      ele.remove();
    });
  }

  on(event, cb){
    this.elements.forEach( (el) => {
      el.attr("callback", cb);
      el.addEventListener(event,cb);
    });
  }

  off(event){
    this.elements.forEach( (el) => {
      let cb = el.getAttribute("callback");
      el.removeEventListener(event, cb);
    });
  }

}


module.exports = DOMNodeCollection;