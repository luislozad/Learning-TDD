const assert = require('chai').assert;

class Dollar {
	constructor(amount) {
		this.amount = amount;
	}

	times(mutiplier) {
		return new Dollar(this.amount * mutiplier);
	}
}

let fiver = new Dollar(5);
let tenner = fiver.times(2);

describe('Test TDD', function () {
	it('Pass 1', function () {
		assert.equal(tenner.amount, 10);
	});
});