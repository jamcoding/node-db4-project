
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_recipes').insert([
        {ingredient_id: 1, recipe_id: 1, quantity: 1},
        {ingredient_id: 1, recipe_id: 2, quantity: 2},
        {ingredient_id: 2, recipe_id: 2, quantity: 4},
        {ingredient_id: 3, recipe_id: 1, quantity: 4},
        {ingredient_id: 3, recipe_id: 2, quantity: 4},
        {ingredient_id: 4, recipe_id: 3, quantity: 4}
      ]);
    });
};
