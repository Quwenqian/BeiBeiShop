var hostURL = "http://192.168.0.6:8080/Shop";

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

/* json date 格式转换 */
function JSONDateFormat(time) {
 
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;
 
  return date.getFullYear()
    + "年"
    + month
    + "月"
    + currentDate
    + "日"
    + " "
    + date.getHours()
    + ":"
    + date.getMinutes();
}

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

/*收藏*/
function shoucang(){
	$(".shoucang").removeClass('mui-active');
	$(".shoucang").find('span').removeClass('icon-shoucangxiao1');
	$('.shoucang').find('span').addClass('icon-shoucangxiao');
	mui.toast('已收藏');
}
