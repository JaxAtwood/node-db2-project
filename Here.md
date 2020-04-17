
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



exports.seed = function(knex, Promise) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { VIN: "JH4DA1741HS010452", automatic: 1, title: "salvage", make: 'Mazda', model: 'MX-6', mileage: 30000},
        { VIN: "JH4DB1560PS003184", automatic: 0, title: "clean", make: 'Honda', model: 'CR-V', mileage: 39000},
        { VIN: "1YVHP84DX55M13025", automatic: 1, title: "clean", make: 'Toyota', model: 'Corolla', mileage: 20000},
        { VIN: "2HKRM4H73CH623544", make: 'Honda', model: 'Civic', mileage: 90000}
      ]);
    });
};