exports.up = function(knex, Promise) {
    return knex.schema.alterTable('cars', tbl => {
        tbl.string("vehicle-num", 32)
        tbl.integer("miles", 32)
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('cars', tbl => {
        tbl.dropColumn('VIN')
        tbl.dropColumn('mileage')
    });
};
