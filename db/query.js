var db = require('./connection');

function getAll() {
	return db('cartoon').select('*');
}

function getOne(id) {
	return db('cartoon').first().where('id', id);
}

function create(cartoon) {
	return db('cartoon')
	.insert(cartoon);
}

function update(id, cartoon) {
	return db('cartoon')
        .update(cartoon)
        .where({id: id});
}

function remove(id) {
	return db('cartoon')
	.where({id: id})
	.del();
}

module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};
