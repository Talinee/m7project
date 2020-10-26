'use strict'

class UserController {

    async getProfile({requset,auth,response}){
        try{
            return await auth.getUser()
        }
        catch (error){
            response.send('You are not logged in')
        }
    }
    async  editProfile({requset,auth,response}) {
        const user = await User.update(request.all())
        return response.json(user)
    }
    }


module.exports = UserController
