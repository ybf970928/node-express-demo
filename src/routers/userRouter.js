const express = require('express')
const userRouter = express.Router()
const RouteRecordRaw = [
      {
        path: '/user',
        name: '用户中心',
        meta: { icon: 'el-icon-user'},
        component: 'Layout',
        children: [
            {
              path: 'userInfo',
              name: '用户信息',
              meta: { icon: 'el-icon-message', title: 'userInfo'},
              component: 'UserInfo',
            },
            { 
             path: 'userInfoName',
             name: '用户姓名',
             meta: { icon: 'el-icon-info', title: 'userInfoName'},
             component: 'userInfoName',
             children: [
              {
                path: 'userChildName',
                name: '用户孩子的姓名',
                meta: { icon: 'el-icon-s-custom', title: 'userChildName'},
                component: 'userChildName',
              }
             ]
            }
        ]
    }
]

userRouter.get('/api/user', (resquest, response) => {
    response.send(RouteRecordRaw)
})


module.exports = userRouter