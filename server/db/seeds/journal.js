
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('Posts').del()
    .then(() => {
      // Inserts seed entries
      return knex('Posts').insert([
        {
          id: 1, 
          created: new Date(Date.now()), 
          title: 'Welcome to your Journal', 
          paragraphs: 'This is your space to do some reflections'
        }
      ])
    })
}
