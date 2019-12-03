let data = require('./public/mock/mock')
module.exports = {
    lintOnSave:false,
    devServer:{
        before(app){
            app.get('/getList',(req,res)=>{
                res.json(data)
            })
        }
    }
}

