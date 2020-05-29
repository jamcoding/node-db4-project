
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {name: 'bread'},
        {name: 'cheese'},
        {name: 'butter'},
        {name: 'eggs'}
      ]);
    });
};
