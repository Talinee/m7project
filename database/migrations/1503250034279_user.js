'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('fullname')
      table.string('phoneNumber',10)
      table.string('birthday')
      table.string('username', 80).unique()
      table.string('email', 254).unique()
      table.string('password', 60).unique()
      table.string('address')
      table.string('facebook_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
