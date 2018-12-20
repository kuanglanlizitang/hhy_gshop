import axios from 'axios'
// ajax请求函数模块
// 返回值:Promise的对象
export default function ajax(url,data={},type='GET'){
	return new Promise(function(resolve,reject){
		let promise
		if(type=='GET'){
			let dataStr=''
			Object.keys(data).forEach(key=>{
				dataStr+=key+'='+data[key]+'&'
			})
			if(dataStr!=''){
				dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
				url=url+'?'+dataStr
			}
			console.log(url)
			promise=axios.get(url)
		}else{
			promise=axios.post(url,data)
		}
		
		promise.then(response=>{
			resolve(response.data)
		}).then(error=>{
			reject(error)
		})
		
	})
}