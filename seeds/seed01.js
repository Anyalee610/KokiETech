/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('engineers').del();
  await knex('post').del();
  await knex('engineers').insert([
    {name: 'amber', username:'amber610',email: 'amberlovesme', password:'amber'},
  ]);
  await knex('post').insert([
    
    {description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", tech1: 'html', tech2: 'css',title: 'live long', url:'https://anyalee610.github.io/ESCA-FOODS/',userid: 1},
    {description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", tech1: 'html', tech2: 'css',title: 'live long', url:'https://anyalee610.github.io/ESCA-FOODS/',userid: 1}
    //{title: 'live later', tech1: 'html', tech2: 'css', description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", url: 'https://anyalee610.github.io/ESCA-FOODS/', img:'../feeds_page/junglerun.jpg'},
    //{title: 'live ok bye', tech1: 'html', tech2: 'css', description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", url: 'https://anyalee610.github.io/ESCA-FOODS/', img:'../feeds_page/junglerun.jpg'},
  
  ]);
  
};
