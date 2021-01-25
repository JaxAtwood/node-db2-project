
exports.seed = function(knex, Promise) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { VIN: 123456, make: 'Mazda', model: 'MX-6', mileage: 30000},
        { VIN: 789654, make: 'Honda', model: 'Civic', mileage: 90000}
      ]);
    });
};
