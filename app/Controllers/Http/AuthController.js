'use strict'
const User = use('App/Models/User')
const FB = require('fb')

class AuthController {

    //* register *//

    async register ({request, response}) {
        const user = await User.create(request.all())
        return response.json(user)
    }

    //* login *//
    async login ({request,auth,response}) {
        try{
        const email = request.input('email')
        const password = request.input('password')
        if (await auth.attempt(email, password)) {
            const user = await User.findBy({ email })

            const result = await auth
            .withRefreshToken()
            .attempt(email, password)

            return response.json({ type: result.type, token: result.token, refreshToken: result.refreshToken, userId: user.id })
        }

        }
        catch(error) { 
            console.log(error)
        }
    }
    async loginFacebook ({request,auth,response}){
        try {
            const fbToken = request.input('token')
            const fb = await FB.api('me', { fields: 'id ,name, email', access_token: fbToken })
            const input = {
                facebook_id: fb.id,
                fullname: fb.name,
                email: fb.email
            }

            let user = await User.findBy({ facebook_id: fb.id })

            if (!user) {
                user = await User.create(input)
            }
            const token = await auth.withRefreshToken().generate(user)

            const result = Object.assign({
                userId: user.id
            }, token)

            return response.json(result)


        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = AuthController
