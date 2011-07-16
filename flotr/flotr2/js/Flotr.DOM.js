Flotr.DOM = {
  addClass: function(element, s){
  },
  /**
   * Create an element.
   */
  create: function(tag){
    return document.createElement(tag);
  },
  /**
   * Remove all children.
   */
  empty: function(element){
    _.each(element.childNodes, function (e) { element.removeChild(e); });
  },
  hide: function(element){
    Flotr.DOM.setStyles(element, {display:'none'});
  },
  /**
   * Insert a child.
   * @param {Element} element
   * @param {Element|String} Element or string to be appended.
   */
  insert: function(element, child){
    if(_.isString(child))
      element.innerHTML += child;
    else if (_.isElement(child))
      element.appendChild(child);
  },
  // @TODO find xbrowser implementation
  opacity: function(element, opacity) {
    element.style.opacity = opacity;
  },
  setStyles: function(element, o) {
    _.each(o, function (value, key) {
      element.style[key] = value;
    });
  },
  show: function(element){
    Flotr.DOM.setStyles(element, {display:''});
  },
  /**
   * Return element size.
   */
  size: function(element){
    return {
      height : element.scrollHeight,
      width: element.scrollWidth }
  }
};
