'use strict'

const { test } = use('Test/Suite')('Login')
const Auth = require('../../app/Controllers/Http/AuthController')

test('case01: Login success', async ({ assert }) => {
  
  // test data
  const result = await Auth({
    "email":"test@email.com",
    "password":"1234"
  })

  // assert
  assert.equal(result, )
})
