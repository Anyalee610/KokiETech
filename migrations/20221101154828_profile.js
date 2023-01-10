/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('profile', (table)=> {
        //primary key that will be the foreign key engineer profile so show every post they made it will, connect to the post table.
          table.increments('id').primary();
          table.integer('userid').notNullable;
          table.foreign('userid').references('id').inTable('engineers');
          table.string('technolgys').notNullable
          table.string('bio').notNullable
          table.integer('favoritepostid').notNullable
          table.integer('likes').notNullable
          table.string('comments').notNullable
          table.string('number').notNullable

          
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('comment');
  
};
