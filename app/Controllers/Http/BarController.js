'use strict'
const Bar = use('App/Models/Bar')

class BarController {
    async book ({request, response}) {
        const book = await Bar.create(request.all())
        return response.json(book)
    }
    async  editBar({request,auth,response}) {
        try{
            // request.params
        console.log(request.params)
        const book = await Bar.query().where('id', request.params.id).update({
            status: request.body.status
        })
        return response.json(book)
    }
    catch (error){
        response.send('Can not edit')
    } 
 }
}

module.exports = BarController
