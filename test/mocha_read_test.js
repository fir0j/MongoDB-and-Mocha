const Student = require('../backend/student');
const assert = require('assert');

//Writing Read test

describe('Read Tests', () => {
	let offrose;

	beforeEach((done) => {
		offrose = new Student({ name: 'Offrose' });
		offrose.save().then(() => {
			done();
		});
	});

	it('Read a user: Offrose', (done) => {
		Student.find({ name: 'Offrose' }).then((students) => {
			//id is a BSON value
			assert(offrose._id.toString() === students[0]._id.toString());
			done();
		});
	});
});
