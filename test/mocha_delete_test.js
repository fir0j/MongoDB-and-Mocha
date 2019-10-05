const Student = require('../backend/student');
const assert = require('assert');

describe('Delete Test', () => {
	let sakina;

	beforeEach((done) => {
		sakina = new Student({ name: 'Sakina' });
		sakina.save().then(() => done());
	});

	// in promise if you are using one liner like () => Student.findOne() then it is automatically returned
	// but if you are using multiliner () => { return Student.findOne() } then you have to explicitly return in order to pass to another promise .
	it('delete a user from the database', (done) => {
		Student.findByIdAndDelete(sakina._id).then(() => Student.findOne({ name: 'Sakina' })).then((students) => {
			assert(students === null);
			done();
		});
	});
});
