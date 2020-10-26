'use strict'
const User = use('App/Models/User')

class UserController {

    async getProfile({request,auth,response}){
        try{
            return await auth.getUser()
        }
        catch (error){
            response.send('You are not logged in')
        }
    }
    async  editProfile({request,auth,response}) {
        try{
        const info = await auth.getUser()
        console.log(request.body.fullname);
        const user = await User.query().where('id', info.id).update({
            fullname: request.body.fullname,
            username:request.body.username,
            email:request.body.email, 
            address:request.body.address,
        })
        return response.json(user)
    }
    catch (error){
        response.send('Can not edit')
    } 
 }
}


module.exports = UserController
