function browser() {
	for (p in Prototype.Browser) {
		if (Prototype.Browser[p]) return p;
	}
}

// This is not really the right distance, we should do it 
// on pixels, not on the compressed PNG data
function dist($1, $2) {
	var $1_ = $1.split(''),
	    $2_ = $2.split(''), dist = 0;
	for (var i = $1_.length-1; i >= 0; --i) {
		if (!$1_[i] || $1_[i] != $2_[i]) dist++;
	}
	return dist;
}

function getContainer(){
  var container = new Element('div', {style:'width:600px;height:300px'});
	$$('body')[0].insert({top: container});
  return container;
}

function referencesBuild() {
	var outDiv = $('ref'), 
      reference = {};
	tests.each(function(test) {
    var container = getContainer(),
        canvas = test.draw(container).canvas;
    //var imageData = canvas.getContext('2d').getImageData(0,0,canvas.width,canvas.height);
		//reference[test.name] = {data:$A(imageData.data), width:imageData.width, height:imageData.height};
    reference[test.name] = canvas.toDataURL();
    container.remove();
	});
	outDiv.innerHTML = 'var references = '+Object.toJSON(reference)+';';
}

function seeAllTests() {
	tests.each(function(test, i) {
    c = getContainer();
    
		c.insert({before: new Element('h2').update(test.name)})
     .insert({after: new Element('hr')});
    
		test.draw(c);
	});
}

function runTests() {
	var testcases = {}, container = getContainer();

	tests.each(function(test) {
		testcases["test "+test.name] = function() {
      container.remove();
			container = getContainer();
			var graph = test.draw(container);

			// Test the dataURL output
			var testReference = references[test.name];
			this.assert(testReference != undefined, test.name +': reference not found!');
			
			var d = dist(graph.canvas.toDataURL(), testReference);
			this.assert(d == 0, test.name+': dataURL output has changed! ('+d+' characters changed)');

			// test specific validation
			if (test.test)
				test.test(this, graph, test.name);
		}
	});
	new Test.Unit.Runner(testcases);
}
