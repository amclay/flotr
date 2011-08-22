/** 
 * Selection Handles Plugin
 *
 *
 * Options
 *  show - True enables the handles plugin.
 *  drag - Left and Right drag handles
 *  scroll - Scrolling handle
 */
(function () {

function isLeftClick (e, type) {
  return (e.which ? (e.which === 1) : (e.button === 0 || e.button === 1));
}

var D = Flotr.DOM,
  E = Flotr.EventAdapter;

Flotr.addPlugin('selection', {

  options: {
    mode: null,            // => one of null, 'x', 'y' or 'xy'
    color: '#B6D9FF',      // => selection box color
    fps: 20                // => frames-per-second
  },

  callbacks: {
    'flotr:mouseup' : function (event) {

      if (this.selection.interval) clearInterval(this.selection.interval);

      var pointer = E.eventPointer(event);
      this.selection.setSelectionPos(this.selection.selection.second, {pageX:pointer.x, pageY:pointer.y});
      this.selection.clearSelection();

      if(this.selection.selectionIsSane()){
        this.selection.drawSelection();
        this.selection.fireSelectEvent();
        this.ignoreClick = true;
      }
    },
    'flotr:mousedown' : function (event) {

      if(!this.options.selection.mode || !isLeftClick(event)) return;

      var pointer = E.eventPointer(event);

      this.selection.setSelectionPos(this.selection.selection.first, {pageX:pointer.x, pageY:pointer.y});

      if (this.selection.interval) clearInterval(this.selection.interval);

      this.lastMousePos.pageX = null;
      this.selection.interval = setInterval(
        _.bind(this.selection.updateSelection, this),
        1000/this.options.selection.fps
      );
    }
  },

  selection: {first: {x: -1, y: -1}, second: {x: -1, y: -1}},
  prevSelection: null,
  interval: null,

  /**
   * Fires the 'flotr:select' event when the user made a selection.
   */
  fireSelectEvent: function(){
    var a = this.axes,
        s = this.selection.selection,
        x1, x2, y1, y2;
    
    x1 = a.x.p2d(s.first.x);
    x2 = a.x.p2d(s.second.x);
    y1 = a.y.p2d(s.first.y);
    y2 = a.y.p2d(s.second.y);

    E.fire(this.el, 'flotr:select', [{
      x1:Math.min(x1, x2), 
      y1:Math.min(y1, y2), 
      x2:Math.max(x1, x2), 
      y2:Math.max(y1, y2),
      xfirst:x1, xsecond:x2, yfirst:y1, ysecond:y2
    }, this]);
  },

  /**
   * Allows the user the manually select an area.
   * @param {Object} area - Object with coordinates to select.
   */
  setSelection: function(area, preventEvent){
    var options = this.options,
      xa = this.axes.x,
      ya = this.axes.y,
      vertScale = ya.scale,
      hozScale = xa.scale,
      selX = options.selection.mode.indexOf('x') != -1,
      selY = options.selection.mode.indexOf('y') != -1,
      s = this.selection.selection;
    
    this.selection.clearSelection();

    s.first.y  = (selX && !selY) ? 0 : (ya.max - area.y1) * vertScale;
    s.second.y = (selX && !selY) ? this.plotHeight - 1: (ya.max - area.y2) * vertScale;      
    s.first.x  = (selY && !selX) ? 0 : area.x1; //xa.p2d(area.x1);
    //this.selection.first.x  = (selY && !selX) ? 0 : (area.x1 - xa.min) * hozScale;
    s.second.x = (selY && !selX) ? this.plotWidth : area.x2;//xa.p2d(area.x2);//(area.x2 - xa.min) * hozScale;
    //this.selection.second.x = (selY && !selX) ? this.plotWidth : (area.x2 - xa.min) * hozScale;
    
    this.drawSelection();
    if (!preventEvent)
      this.fireSelectEvent();
  },

  /**
   * Calculates the position of the selection.
   * @param {Object} pos - Position object.
   * @param {Event} event - Event object.
   */
  setSelectionPos: function(pos, pointer) {
    var options = this.options,
        offset = D.position(this.overlay),
        s = this.selection.selection;

    if(options.selection.mode.indexOf('x') == -1){
      pos.x = (pos == s.first) ? 0 : this.plotWidth;         
    }else{
      pos.x = pointer.pageX - offset.left - this.plotOffset.left;
      pos.x = Math.min(Math.max(0, pos.x), this.plotWidth);
    }

    if (options.selection.mode.indexOf('y') == -1){
      pos.y = (pos == s.first) ? 0 : this.plotHeight - 1;
    }else{
      pos.y = pointer.pageY - offset.top - this.plotOffset.top;
      pos.y = Math.min(Math.max(0, pos.y), this.plotHeight);
    }
  },
  /**
   * Draws the selection box.
   */
  drawSelection: function() {

    var s = this.selection.selection,
      octx = this.octx,
      options = this.options,
      plotOffset = this.plotOffset,
      prevSelection = this.selection.prevSelection;
    
    if(prevSelection != null &&
      s.first.x == prevSelection.first.x &&
      s.first.y == prevSelection.first.y && 
      s.second.x == prevSelection.second.x &&
      s.second.y == prevSelection.second.y)
      return;

    octx.save();
    octx.strokeStyle = this.processColor(options.selection.color, {opacity: 0.8});
    octx.lineWidth = 1;
    octx.lineJoin = 'miter';
    octx.fillStyle = this.processColor(options.selection.color, {opacity: 0.4});

    this.selection.prevSelection = {
      first: { x: s.first.x, y: s.first.y },
      second: { x: s.second.x, y: s.second.y }
    };

    var x = Math.min(s.first.x, s.second.x),
        y = Math.min(s.first.y, s.second.y),
        w = Math.abs(s.second.x - s.first.x),
        h = Math.abs(s.second.y - s.first.y);
    
    octx.fillRect(x + plotOffset.left+0.5, y + plotOffset.top+0.5, w, h);
    octx.strokeRect(x + plotOffset.left+0.5, y + plotOffset.top+0.5, w, h);
    octx.restore();
  },

  /**
   * Updates (draws) the selection box.
   */
  updateSelection: function(){
    if(this.lastMousePos.pageX == null) return;

    this.selection.setSelectionPos(this.selection.selection.second, this.lastMousePos);

    this.selection.clearSelection();
    
    if(this.selection.selectionIsSane()) this.selection.drawSelection();
  },

  /**
   * Removes the selection box from the overlay canvas.
   */
  clearSelection: function() {
    if(this.selection.prevSelection == null) return;
      
    var prevSelection = this.selection.prevSelection,
      lw = this.octx.lineWidth,
      plotOffset = this.plotOffset,
      x = Math.min(prevSelection.first.x, prevSelection.second.x),
      y = Math.min(prevSelection.first.y, prevSelection.second.y),
      w = Math.abs(prevSelection.second.x - prevSelection.first.x),
      h = Math.abs(prevSelection.second.y - prevSelection.first.y);
    
    this.octx.clearRect(x + plotOffset.left - lw/2+0.5,
                        y + plotOffset.top - lw/2+0.5,
                        w + lw,
                        h + lw);
    
    this.selection.prevSelection = null;
  },
  /**
   * Determines whether or not the selection is sane and should be drawn.
   * @return {Boolean} - True when sane, false otherwise.
   */
  selectionIsSane: function(){
    var s = this.selection.selection;
    return Math.abs(s.second.x - s.first.x) >= 5 &&
           Math.abs(s.second.y - s.first.y) >= 5;
  }

});

})();
