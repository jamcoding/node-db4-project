
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, step_number: 1, instruction: 'wash hands'},
        {recipe_id: 1, step_number: 2, instruction: 'toast bread for 1 min(s)'},
        {recipe_id: 1, step_number: 3, instruction: 'spread butter on toast'},
        {recipe_id: 1, step_number: 4, instruction: 'now eat!'},
        {recipe_id: 2, step_number: 1, instruction: 'wash hands'},
        {recipe_id: 2, step_number: 2, instruction: 'heat pan on stove'},
        {recipe_id: 2, step_number: 3, instruction: 'spread butter on bread'},
        {recipe_id: 2, step_number: 4, instruction: 'add cheese'},
        {recipe_id: 2, step_number: 5, instruction: 'now eat!'},
        {recipe_id: 3, step_number: 1, instruction: 'wash hands'},
        {recipe_id: 3, step_number: 2, instruction: 'heat pan on stove'},
        {recipe_id: 3, step_number: 3, instruction: 'put beaten eggs in pan'},
        {recipe_id: 3, step_number: 4, instruction: '"scramble" eggs until cooked'},
        {recipe_id: 3, step_number: 5, instruction: 'now eat!'}
      ]);
    });
};
