var db = require('./connection');

function getAll() {
	// Get all cartoons and return them to the route
	return db('cartoon').select()
}

function getOne(id) {
	// Get one cartoon by the id and return it
	return db('cartoon').select().where('id', id)
}

function create(cartoon) {
	// Add a cartoon to the database
	return db('cartoon').insert(cartoon)
}

function update(id, cartoon) {
	// Update a cartoon with the specified id
	return db('cartoon').where('id', id).update(cartoon)
}

function remove(id) {
	// Delete the specified cartoon
	return db('cartoon').where('id', id).del()
}

module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};
