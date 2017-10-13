var db = require('./connection');

function getAll() {
  // Get all cartoons and return them to the route
  return db.select().from('cartoon')
}

function getOne(id) {
  // Get one cartoon by the id and return it
  return db.select().from('cartoon').where('id', id)
}

function create(cartoon) {
  // Add a cartoon to the database
  return db.table('cartoon').insertInto(title, year, network)
}

function update(id, cartoon) {
  // Update a cartoon with the specified id
  return db.update('cartoon').from('cartoon').where('id', id)
}

function remove(id) {
  // Delete the specified cartoon
  return db.delete().from('cartoon').where('id', id)
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
};
