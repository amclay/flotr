var f;

function setup(){	
	var d1 = [];
	var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];
	
    for(var i = 0; i < 14; i += 0.5)
        d1.push([i, Math.sin(i)]);

    f = Flotr.draw($('container'), [ d1, d2 ]);
};

function testFlotrDraw(){
	assertNotNull('Flotr.draw doesn\'t return a Graph', f);
}

function exposeTestFunctionNames(){
	return [
		'setup',
		'testFlotrDraw'
	];
}
