const db = require('./connection');

function getAll() {
	// Get all cartoons and return them to the route
	return db('cartoon');
}

function getOne(id) {
	// Get one cartoon by the id and return it
	return db('cartoon').where('id', id);
}

function create(cartoon, year, network) {
	// Add a cartoon to the database
	return db.select('*').from('cartoon').insert({
		title: cartoon,
		year: year,
		network: network
	})
}

function update(id, cartoon, year, network) {
	// Update a cartoon with the specified id
	return db.select('*').from('cartoon').where('title', cartoon).update({
		'id': id,
		'year': year,
		'network': network
	})
}

function remove(id) {
	// Delete the specified cartoon
	return db.select('*').from('cartoon').where('id', id).del();
}

module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};
