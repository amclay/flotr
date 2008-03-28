describe('getTickSize', {
	'Flotr.privates.getTickSize(10, 0, 100, 1) should return 10': function() {
		expect(
			Flotr.privates.getTickSize(10, 0, 100, 1)
		).should_be(10);
	},
	'Flotr.privates.getTickSize(20, 0, 100, 1) should return 5': function() {
		expect(
			Flotr.privates.getTickSize(20, 0, 100, 1)
		).should_be(5);
	},
	'Flotr.privates.getTickSize(0, 0, 10, 1) should return Number.POSITIVE_INFINITY': function() {
		expect(
			Flotr.privates.getTickSize(0, 0, 10, 1)
		).should_be(Number.POSITIVE_INFINITY);
	},
	'Flotr.privates.getTickSize(0, 0, -10, 1) == NaN': function() {
		expect(
			isNaN(Flotr.privates.getTickSize(0, 0, -10, 1))
		).should_be_true();
	},
	'Flotr.privates.getTickSize(5, 10, 110, 1) should return 20': function() {
		expect(
			Flotr.privates.getTickSize(5, 10, 110, 1)
		).should_be(20);
	}
});

describe('getSeries', {
	'Flotr.privates.getSeries([]) should return []': function() {
		expect(
			Flotr.privates.getSeries([])
		).should_be([]);
	},
	'Flotr.privates.getSeries([d1]) should return [{data:d1}]': function() {
		expect(
			Flotr.privates.getSeries([[[0,1],[0,2]]])
		).should_be([{data:[[0,1],[0,2]]}]);
	},
	'Flotr.privates.getSeries([{data:d1}]) should return [{data:d1}]': function() {
		expect(
			Flotr.privates.getSeries([{data:[[0,1],[0,2]]}])
		).should_be([{data:[[0,1],[0,2]]}]);
	},
	'Flotr.privates.getSeries([{data:d1},d2]) should return [{data:d1},{data:d2}]': function() {
		expect(
			Flotr.privates.getSeries([{data:[[0,1],[0,2]]},[[0,1],[0,2]]])
		).should_be([{data:[[0,1],[0,2]]},{data:[[0,1],[0,2]]}]);
	}	
});
