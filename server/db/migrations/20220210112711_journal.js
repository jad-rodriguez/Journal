
exports.up = (knex) => {
    return knex.schema.createTable('Posts', (table) => {
        table.increments('id')
        table.date('created')
        table.string('title')
        table.string('paragraphs')
  })
}

exports.down = (knex) => {
    return knex.schema.dropTable('Posts')
}
