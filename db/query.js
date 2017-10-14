var db = require('./connection');

function getAll() {
	// Get all cartoons and return them to the route
	return db.select('*').from('cartoon');
}

function getOne(id) {
	// Get one cartoon by the id and return it
	return db.select('*').from('cartoon').where('id', id)
}

function create(title, year, network) {
	// Add a cartoon to the database
	return db.table('cartoon').insert({title: title, year: year, network: network})
}

function update(id, year, network) {
	// Update a cartoon with the specified id
	return db.table('cartoon').update({year: year, network: network}).where('id', id)
}

function remove(title) {
	// Delete the specified cartoon
	return db.table('cartoon').where('title', title).del()
}

module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};
