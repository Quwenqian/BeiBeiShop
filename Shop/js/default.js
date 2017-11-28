var hostURL = "http://10.2.20.194:8080/Shop";

/* 获取URL中参数 */
$.extend({
  getUrlVars: function() {
    var vars = [],
      hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name) {
    return $.getUrlVars()[name];
  }
});



/* 底部菜单切换方法 */
$(function($){
	if(document.getElementById("nav")!=null){
		document.getElementById("nav1").addEventListener('tap',function(){
			mui.openWindow({url: 'index.html',id:'index',show:{
                      autoShow:true,//页面loaded事件发生后自动显示，默认为true
                      aniShow:'slide-in-right',//页面显示动画，默认为”slide-in-right“；
                      duration:'1000'//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
                    }});
		});
		document.getElementById("nav2").addEventListener('tap',function(){
			mui.openWindow({url: 'search.html',id:'classify',show:{
                      autoShow:true,//页面loaded事件发生后自动显示，默认为true
                      aniShow:'slide-in-right',//页面显示动画，默认为”slide-in-right“；
                      duration:'1000'//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
                    }});
	});
	document.getElementById("nav3").addEventListener('tap',function(){
			mui.openWindow({url: 'cart.html',id:'search',show:{
                      autoShow:true,//页面loaded事件发生后自动显示，默认为true
                      aniShow:'slide-in-right',//页面显示动画，默认为”slide-in-right“；
                      duration:'1000'//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
                    }});
	});
	document.getElementById("nav4").addEventListener('tap',function(){
			mui.openWindow({url: 'my.html',id:'my',show:{
                      autoShow:true,//页面loaded事件发生后自动显示，默认为true
                      aniShow:'slide-in-right',//页面显示动画，默认为”slide-in-right“；
                      duration:'1000'//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
                    }});
	});
	}
	
	
	
});


/* Storage 存储及获取登录用户信息  */
function saveUser(uid){
	localStorage.setItem('uid', uid);
}
function getUser(key){
	return localStorage.getItem('uid');
}
