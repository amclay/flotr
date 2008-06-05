function testFlotrGetSeries() {
    assertNotNull('Flotr.getSeries() is null', Flotr.getSeries);
	assertEquals('Flotr.getSeries() returns inconsistent data',Flotr.getSeries([[1,2]])[0].data[0], 1);
	assertEquals('Flotr.getSeries() returns inconsistent data',Flotr.getSeries([[1,2]])[0].data[1], 2);
	assertEquals('Empty data array doesn\'t return empty series',Flotr.getSeries([]).length, 0);
}

function testFlotrGetTickSize() {
	assertNotNull('Flotr.getTickSize() is null', Flotr.getTickSize);
	assertEquals('Flotr.getTickSize(10, 0, 100, 1) != 10', Flotr.getTickSize(10, 0, 100, 1), 10);
	assertEquals('Flotr.getTickSize(20, 0, 100, 1) != 5', Flotr.getTickSize(20, 0, 100, 1), 5);
	assertEquals('Flotr.getTickSize(5, 10, 110, 1) != 20', Flotr.getTickSize(5, 10, 110, 1), 20);
	assertEquals('Flotr.getTickSize(0, 0, 10, 1) != Number.POSITIVE_INFINITY', Flotr.getTickSize(0, 0, 10, 1), Number.POSITIVE_INFINITY);
	assertTrue('Flotr.getTickSize(0, 0, -10, 1) is a number', isNaN(Flotr.getTickSize(0, 0, -10, 1)));
}

function testFlotrRegister(){
	assertNotNull('Flotr.register() is null', Flotr.register);
	assertEquals('Flotr._registeredTypes[\'lines\'] != drawSeriesLines', Flotr._registeredTypes['lines'], 'drawSeriesLines');
	assertEquals('Flotr._registeredTypes[\'bars\'] != drawSeriesBars', Flotr._registeredTypes['bars'], 'drawSeriesBars');
	assertEquals('Flotr._registeredTypes[\'points\'] != drawSeriesPoints', Flotr._registeredTypes['points'], 'drawSeriesPoints');
	Flotr.register('test_type', 'drawSeriesTest');
	assertEquals('Flotr._registeredTypes[\'test_type\'] != drawSeriesTest', Flotr._registeredTypes['test_type'], 'drawSeriesTest');
}

function exposeTestFunctionNames(){
	return [
		'testFlotrGetSeries',
		'testFlotrGetTickSize',
		'testFlotrRegister'
	];
}
