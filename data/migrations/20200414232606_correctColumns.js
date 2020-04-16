exports.up = function(knex, Promise) {
    return knex.schema.alterTable('cars', tbl => {
        tbl.boolean("automatic")
        tbl.string("title-status", 128)
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('cars', tbl => {
        tbl.dropColumn("title-status")
        tbl.dropColumn("automatic")
    });
};