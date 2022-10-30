/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('post', (table)=> {
        //primary key that will be the foreign key engineer profile so show every post they made it will, connect to the post table.
          table.integer('userId').notNullable;
          table.foreign('userId').references('id').inTable('engineers');
          table.string('title').notNullable;
          table.string('tech1').notNullable;
          table.string('tech2').notNullable;
          table.string('description').notNullable;
          table.string('url').notNullable;
           //table.string('img').notNullable;

      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('post');
  
};
