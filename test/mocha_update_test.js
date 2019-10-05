const Student = require('../backend/student');
const assert = require('assert');

describe('Update Test', () => {
	let sahroj;

	beforeEach((done) => {
		sahroj = new Student({ name: 'Sahroj' });
		sahroj.save().then(() => done());
	});

	it('set and save in database', (done) => {
		sahroj.set('name', 'Sahu');
		sahroj.save().then(() => Student.find({})).then((students) => {
			assert(students[0].name !== 'Sahroj');
			assert(students[0].name === 'Sahu');
			done();
		});
	});
});
