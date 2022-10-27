/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('post', (table)=> {
        //primary key that will be the foreign key engineer profile so show every post they made it will, connect to the post table.
          table.increments('id').primary();
          table.increments('userId');
          table.foreign('userId').references('id').inTable('engineers');
          table.string('title').notNullable;
          table.string('description').notNullable;
          table.string('technologies').notNullable;
          table.string('collaborator');
          
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('post');
};
