function browser() {
	for (p in Prototype.Browser) {
		if (Prototype.Browser[p]) return p;
	}
}

function getContainer(){
  var container = new Element('div', {style:'width:600px;height:300px'});
	Element.insert(document.body, {top: container});
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
      container.update();
			var graph = test.draw(container);

			// Test the dataURL output
			var testReference = references[test.name];
			this.assert(testReference != undefined, test.name +': reference not found!');
			this.assert(graph.canvas.toDataURL() == testReference, test.name+': dataURL output has changed!');

			// test specific validation
			if (test.test)
				test.test(this, graph, test.name);
		}
	});
	new Test.Unit.Runner(testcases);
}
