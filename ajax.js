$.ajax({
		url:"http://apis.juhe.cn/geo/",
		dataType:'jsonp',
		processData: false,
		type:'GET',
		data:"lng="+jd+"&lat="+wd+"&type=2&dtype=&key=79a40402cc9a01ed1985bae6e8d47358",
		success:function(data){console.log(document.write(data.result.address)	}
})