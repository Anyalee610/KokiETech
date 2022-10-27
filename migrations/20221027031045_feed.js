/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('feeds', (table)=> {
        //primary key that will be the foreign key engineer profile so show every post they made it will, connect to the post table.
          table.increments('postId');
          table.foreign('postId').references('id').inTable('post');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('feeds');
};
