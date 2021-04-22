const express = require('express')
const userRouter = require('./src/routers/userRouter')
const app = express()
app.use(express.json())
app.use('/', userRouter)

app.get('/', (request, response) => {
    response.send('hello world!!')
})

app.post('/', (request, response) => {
    console.log(request.body)
    response.status(200).send('成功')
})

app.listen(9527, () => {
    console.log('express服务启动成功')
})