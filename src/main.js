import $ from 'jquery'
import moment from 'moment'
import a from './a'
console.log(a.key1)
var c = 7;
var d = 8;
var k = 5;
console.log(c * d + k)
// console.log(moment().format('dddd'))
// $(() => {
//     $('<div></div>').html('我s是mainsss').appendTo('body')
// })
// window.onload = function () {
//     document.getElementById('btn').onclick = function () {
//         $('<div></div>').html('我是main').appendTo('body')
//     }
// }


// function getComponent() {
//     return import(/* webpackPrefetch: true */ 'jquery').then(({ default: $ }) => {
//         return $('<div></div>').html('老孟不是大叔')
//     })
// }

// window.onload = function () {
//     document.getElementById('btn').onclick = function () {
//         getComponent().then(item => {
//             item.appendTo('body')
//         })
//     }
// }