/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/*
This js file makes the creates that columns for the table engineers 
*/
exports.up = function(knex) {
    return knex.schema.createTable('engineers', (table)=> {
      //primary key that will be the foreign key engineer profile so show every post they made it will, connect to the post table.
        table.increments('id').primary();
        table.string('name').notNullable;
        table.string('username').notNullable;
        table.string('email').notNullable;
        table.string('password').notNullable;
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('engineers');
};
