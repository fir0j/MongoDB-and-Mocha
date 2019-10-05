const Student = require('../backend/student');
const assert = require('assert');

describe('Create Test', () => {
	it('create a user in DB', () => {
		const firoj = new Student({ name: 'firoj' });
		firoj
			.save()
			.then(() => {
				assert(!firoj.isNew);
			})
			.catch(() => {
				console.log('Error');
			});
	});
});
