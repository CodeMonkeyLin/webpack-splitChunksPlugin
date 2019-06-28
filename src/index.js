// let news = require("./news")
// let message = require("./message")
// console.log(news.content)
// console.log(message.content)
import news from './news'
import message from './message'
import moment from 'moment'
import $ from "jquery";
import 'moment/locale/zh-cn'
moment.locale('zh-CN')
console.log(moment().subtract(6, 'days').calendar())
console.log(a)

if (module.hot) {
    module.hot.accept(['./news.js', './message'], function () {
        console.log(news)
        console.log(message.content)

        // 当hotmodule模块内容更新时触发
        // console.log('hotmodule被更新了!')
        // import / export语法必须在顶级作用域中使用,无法在子级作用域中使用
        // import str from './hotmodule'
        // var news = require('./news')
    })
}