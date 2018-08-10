Vue.options.delimiters = ['[[', ']]'];
Vue.config.devtools = false;

function _artReq(url, method, param, callback) {

		if(!param.hasOwnProperty("asyncType")) {
			param.asyncType = true;
		}
		var authorization = localStorage.getItem("authorization");
		$.ajax(url, {
			headers: {
		        authorization: authorization
		    },
			data: param,
			crossDomain: true == !(document.all),
			xhrFields: {
				withCredentials: true
			},
			dataType: 'json', //要求服务器返回json格式数据
			type: method, //HTTP请求类型，要和服务端对应，要么GET,要么POST
			timeout: 30000, //超时时间设置为30秒;
			async: param.asyncType, //true异步，false同步
			beforeSend: function() {},
			complete: function (XHR, TS) {
				if(TS=='timeout') {
					console.log("请求数据超时");
				}
            },
			success: function(response) {
				if(response && response.hasOwnProperty('return_code')) {
					//如果返回值存在authorization，重写localstorage
					callback(response);
				} else {
					console.log('温馨提示：数据格式错误');
				}
			},
			error:function(xhr, type, errorThrownhr) {
               	console.log("请求数据发生错误");
			}
		}); //ajax end
} //获取数据结束