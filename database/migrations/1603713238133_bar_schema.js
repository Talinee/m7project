'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarSchema extends Schema {
  up () {
    this.create('bars', (table) => {
      table.increments()
      table.string('tableNo',).notNullable()
      table.string('orderNo').notNullable()
      table.string('orderPrice').notNullable()
      table.string('discount').notNullable()
      table.integer('amount').notNullable()
      table.float('total').notNullable()
      table.string('payment').notNullable()
      table.string('status')
      table.timestamps()
    })
  }

  down () {
    this.drop('bars')
  }
}

module.exports = BarSchema
