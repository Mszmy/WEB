1.2 AJAX  post请求设置请求体
格式：在send中传递--可以为任意格式的内容
	xhr.send('a=100&b=200&c=300');
	xhr.send('a:100&b:200&c:300');
	xhr.send('111111');
1.3 AJAX  ajax设置请求头信息
格式要求：-[必须在open之后，send之前]----setRequestHeader()方法
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
