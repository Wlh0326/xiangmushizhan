const Mock  = require('mockjs')


let data = []

for(let i = 0;i<20;i++){
    data.push({
        img:Mock.Random.image('100x100',Mock.Random.color()),
        id:i,
        title:Mock.Random.ctitle(4,6),
        user:Mock.Random.ctitle(100,80),
        count:0
    })
}

module.exports = {data}