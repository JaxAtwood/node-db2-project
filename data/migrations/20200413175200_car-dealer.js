
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('make')
          .notNullable()
          .unique();
        tbl.decimal('VIN')
          .notNullable()
          .unique();
        tbl.text('model')
          .notNullable();
        tbl.decimal('mileage')
          .notNullable();
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cars');
};
