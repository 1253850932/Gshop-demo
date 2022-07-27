import axios from "axios";

// AJAX 请求模块  返回值：promise对象（异步请求的数据是：response.data
export default function ajax(url, data = {}, type = "GET") {
  return new Promise(function (resolve, reject) {
    // 异步执行ajax请求
    let promise;
    if (type == "GET") {
      // 准备url，query查询参数
      let dataStr = ""; //数据拼接字符串
      Object.keys(data).forEach((key) => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      // 发送promise请求
      promise = axios.get(url);
    } else {
      promise = axios.post(url, data);
    }
	promise.then((result) => {
		resolve(result.data) //成功调用resolve
	}).catch((err) => {
		reject(err) //失败调用reject
	});
  });
}
