describe('skip-link test pass', function() {
	'use strict';
	var results;

	before(function(done) {
		axe.testUtils.awaitNestedLoad(function() {
			axe.run({ runOnly: { type: 'rule', values: ['skip-link'] } }, function(
				err,
				r
			) {
				assert.isNull(err);
				results = r;
				done();
			});
		});
	});

	describe('violations', function() {
		it('should find 0', function() {
			assert.lengthOf(results.violations, 0);
		});
	});

	describe('passes', function() {
		it('should find 3', function() {
			assert.lengthOf(results.passes[0].nodes, 3);
		});
	});

	it('should find 0 inapplicable', function() {
		assert.lengthOf(results.inapplicable, 0);
	});

	it('should find 1 incomplete', function() {
		assert.lengthOf(results.incomplete, 1);
	});
});
