
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('make', 128)
          .notNullable()
          .unique();
        tbl.string('VIN', 32)
          .notNullable()
          .unique();
        tbl.string('model', 128)
          .notNullable();
        tbl.integer('mileage', 32)
          .notNullable();
        tbl.string("title", 128)
        tbl.boolean("automatic")
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cars');
};