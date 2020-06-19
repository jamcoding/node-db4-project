
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable().unique();
        })
        .createTable('ingredient_recipes', tbl => {
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredients.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipes.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.float('quantity').notNullable();
            tbl.primary(['ingredient_id', 'recipe_id']);
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('recipe_id')
                .notNullable()
                .references('recipes.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('step_number').notNullable();
            tbl.string('instruction', 128).notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredient_recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
