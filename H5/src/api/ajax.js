/**
 * Created by hhly-pc on 2017/9/20.
 */
import qs from "qs"
import axios from "axios"
require("../common/js/phihome-1.0.0.js?n=1");

const IP_PORT = {
  // 接口调试
  houtai: "http://47.97.100.240",
}

/**
 * ajax初步封装
 *
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 * @param {String} method 请求方法
 */
// function ajax({
//   url,
//   params,
//   method = "POST",
//   qsStatus = true,
//   headers = {
//     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
//   },
// } = {}) {
//   return new Promise((resolve, reject) => {
//     axios({
//       withCredentials: true,
//       // TOOD:路径前缀
//       url: IP_PORT.houtai + url,
//       data: qsStatus ? qs.stringify(Object.assign({}, params)) : params,
//       headers,
//       method,
//       timeout: 10000,
//     }).then(
//       (res) => resolve(res),
//       (err) => reject(err)
//     )
//   })
// }

function ajax({
  url,
  params,
  method = "post",
  qsStatus = true,
  headers = {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  },
} = {}) {
  return new Promise((resolve, reject) => {
    // if (JSBridge.callHandler) {
    let methodL = method.toLocaleLowerCase();
    window.phihome.util.netRequest(
      methodL,
      IP_PORT.houtai + url,
      headers,
      params,
      // 这个function是原生给我返回的回调
      function (res) {
        resolve(res)
      }
    );
  })
}

// } else {
// axios({
//   withCredentials: true,
//   // TOOD:路径前缀
//   url: IP_PORT.houtai + url,
//   data: qsStatus ? qs.stringify(Object.assign({}, params)) : params,
//   headers,
//   method,
//   timeout: 10000,
// }).then(
//   (res) => resolve(res),
//   (err) => reject(err)
// )
// }
export default ajax
