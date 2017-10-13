var pg = require('./connection');

function getAll() {
		return pg('cartoon').select('*');
		// res.render('Herro')
	// Get all cartoons and return them to the route
}

function getOne(id) {
	// Get one cartoon by the id and return it
}

function create(cartoon) {
	// Add a cartoon to the database
}

function update(id, cartoon) {
	// Update a cartoon with the specified id
}

function remove(id) {
	// Delete the specified cartoon
}

module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};
