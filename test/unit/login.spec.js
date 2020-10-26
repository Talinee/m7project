'use strict'

const { test } = use('Test/Suite')('Login')

test('that user/profile route can be access', async ({ client }) => {
  const user  = await User.create({
      email: 'test@email.com'
  })

  const response = await client
    .get('user/profile')
    .loginVia(user, 'jwt')
    .end()

  response.assertStatus(200)
})
