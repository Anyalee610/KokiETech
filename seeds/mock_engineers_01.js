/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('engineers').del()
  await knex('engineers').insert([
    {name: 'amber'},
    {name: 'anaya'},
    {name: 'cece'}
  ]);
};
