/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('engineers').del();
  await knex('post').del();

  await knex('comment').del();

  
  await knex('engineers').insert([
    {name: 'anaya', username:'anaya610',email: 'amberlovesme', password:'amber'},
    {name: 'amara', username:'amara610',email: 'amberlovesme', password:'amber'},
    {name: 'carmen', username:'carmen610',email: 'amberlovesme', password:'amber'},
    {name: 'cece', username:'cece610',email: 'amberlovesme', password:'amber'},
    {name: 'chopper', username:'chopper610',email: 'amberlovesme', password:'amber'},
    {name: 'jared', username:'jared610',email: 'amberlovesme', password:'amber'},
  ]);
  await knex('post').insert([
    
    {description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", tech1: 'html', tech2: 'css',title: 'live long', url:'https://anyalee610.github.io/ESCA-FOODS/',userid: 1},
    {description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", tech1: 'html', tech2: 'css',title: 'live long', url:'https://anyalee610.github.io/ESCA-FOODS/',userid: 1},
    {description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", tech1: 'html', tech2: 'css',title: 'live long', url:'https://anyalee610.github.io/ESCA-FOODS/',userid: 3},
    {description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", tech1: 'html', tech2: 'css',title: 'live long', url:'https://anyalee610.github.io/ESCA-FOODS/',userid: 4},
    {description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", tech1: 'html', tech2: 'css',title: 'live long', url:'https://anyalee610.github.io/ESCA-FOODS/',userid: 4},
    {description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", tech1: 'html', tech2: 'css',title: 'live long', url:'https://anyalee610.github.io/ESCA-FOODS/',userid: 4},
    {description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", tech1: 'html', tech2: 'css',title: 'live long', url:'https://anyalee610.github.io/ESCA-FOODS/',userid: 1},
    {description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", tech1: 'html', tech2: 'css',title: 'live long', url:'https://anyalee610.github.io/ESCA-FOODS/',userid: 3},
    {description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", tech1: 'html', tech2: 'css',title: 'live long', url:'https://anyalee610.github.io/ESCA-FOODS/',userid: 2},
    //{title: 'live later', tech1: 'html', tech2: 'css', description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", url: 'https://anyalee610.github.io/ESCA-FOODS/', img:'../feeds_page/junglerun.jpg'},
    //{title: 'live ok bye', tech1: 'html', tech2: 'css', description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", url: 'https://anyalee610.github.io/ESCA-FOODS/', img:'../feeds_page/junglerun.jpg'},
  
  ]);
  await knex('comment').insert([
    {postid: 1, text:'hello maybe you should'},
    {postid: 1, text:'hello maybe you should'},
    {postid: 1, text:'hello maybe you should'},
    {postid: 1, text:'hello maybe you should'},
    {postid: 1, text:'hello maybe you should'},
    {postid: 1, text:'hello maybe you should'},
    {postid: 1, text:'hello maybe you should'},
    {postid: 1, text:'hello maybe you should'},
    {postid: 4, text:'hello maybe you should'},
    {postid: 4, text:'hello maybe you should'},
    {postid: 4, text:'hello maybe you should'},
    {postid: 2, text:'hello maybe you should'},
    {postid: 4, text:'hello maybe you should'},
    {postid: 2, text:'hello maybe you should'},
    {postid: 3, text:'hello maybe you should'},
    {postid: 3, text:'hello maybe you should'},
    {postid: 3, text:'hello maybe you should'}
  ])
  
};
