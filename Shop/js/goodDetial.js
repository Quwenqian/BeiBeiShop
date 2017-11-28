mui.init();
var gId = $.getUrlVars()['gId'];

function initData(data){
	$("#goodImage").attr("src",hostURL+data.good.imageUrl);
	$("#goodName").text(data.good.goodsName);
	$("#goodPrice").text("$ "+data.good.goodsPriceStr);
	$("#addToCart").on('tap',function(){
		
		var giid = 1;
		var url = hostURL+"/addToCart";
		var uid = getUser('uid');
		$.ajax({
			type:"post",
			url:url,
			data:'cart.userId='+uid+'&cart.goodsId='+gId+'&cart.gooditemId='+giid+'&cart.goodsNum=1',
			dataType:'text',
			success:function(d){
				mui.toast(d);
			}
		});
	});
}

$(function(){
	$.ajax({
		url:hostURL+"/selectGoodById",
		data:'gId='+gId,
		dataType:'json',
		type:'post',
		success:function(data){
			initData(data);
		}
	});
});
