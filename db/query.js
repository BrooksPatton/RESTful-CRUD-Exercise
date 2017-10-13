var db = require('./connection');

function getAll() {
	// Get all cartoons and return them to the route
	return pg.select().from('cartoons');
}

function getOne(id) {
	// Get one cartoon by the id and return it
	return pg.select().from('cartoons').where('id', id);
}

function create(cartoon) {
	// Add a cartoon to the database
	return pg.select().from('cartoons').insert({title: cartoon})
}

function update(id, cartoon) {
	// Update a cartoon with the specified id
	return pg.select().from('cartoons').where('cartoon', cartoon).update('id', id)
}

function remove(id) {
	// Delete the specified cartoon
	return pg.select().from('cartoons').where('id', id).del();
}

module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};
