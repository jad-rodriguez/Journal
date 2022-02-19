
exports.up = (knex) => {
    return knex.schema.createTable('Posts', (table) => {
        table.increments('id')
        table.date('created')
        table.string('title')
        table.string('paragraphs')
        table.string('added_by_user').references('users.auth0_id')
  })
}

exports.down = (knex) => {
    return knex.schema.dropTable('Posts')
}
