mui.init();
var gId = $.getUrlVars()['gId'];
var giid = 0;
var goodItems = 0;

//商品信息初始化
function initData(data){
	$("#goodImage").attr("src",hostURL+data.good.imageUrl);
	$("#goodName").text(data.good.goodsName);
	$("#goodPrice").text("$ "+data.good.goodsPriceStr);
	$("#goodDetial").html("<div>"+data.good.content+"</div>");
	//蒙版DIV事件绑定
	$(".maskStyle").on('tap',function(){
		$(".maskStyle").hide();
		$(".itemOutter").hide();
	});
	
	//加入购物车事件绑定
	$("#addToCart").on('tap',function(){
		var url = hostURL+"/addToCart";
		var uid = getUser('uid');
		if(giid==0){
			//未选择任何颜色型号
			showOrHideItems();
		}else{
			//已选择颜色型号
			$.ajax({
			type:"post",
			url:url,
			data:'cart.userId='+uid+'&cart.good.goodsId='+gId+'&cart.goodItem.itemId='+giid+'&cart.goodsNum=1',
			dataType:'text',
			success:function(d){
				if(d==0){
					mui.toast('加入购物车失败');
				}else{
					mui.toast('加入购物车成功');
				}
			}
		});
		//加入购物车完成，将选择的颜色型号清除，关闭颜色DIV
		giid = 0;
		showOrHideItems();
		}
		
	});
}

//商品颜色尺码信息初始化
function initItems(data){
	var $itemList = $("#colorItemList");
	$.each(data, function(index,item) {
		$itemList.append("<li><span>"+item.itemName+"</span><p>"+item.itemId+"</p></li>");
	});
	//选择颜色事件绑定
	$("#colorItemList li").on('tap',function(){
		$("#colorItemList li").removeClass('checked');
		$(this).addClass('checked');
		giid = $(this).find('p').text();
	});
}
//显示颜色选择部分DIV
function showOrHideItems(){
	var $node = $(".itemOutter");
	if($node.is(":hidden")){
		$(".maskStyle").show();
		$node.show();
	}else{
		$(".maskStyle").hide();
		$node.hide();
	}
}

$(function(){
	$.ajax({
		url:hostURL+"/selectGoodById",
		data:'gId='+gId,
		dataType:'json',
		type:'post',
		success:function(data){
			initData(data);
			initItems(data.good.goodItems);
		}
	});
});
