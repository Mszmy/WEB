 AJAX  JSON响应
【1】手动转换
	将对象字符串转换为对象  let data = JSON.parse(xhr.response);
【2】自动转换
	设置响应体的类型
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
