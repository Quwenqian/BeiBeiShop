$(function(){
	//数据显示
	var uId=getUser('uid');
	$.ajax({
		type:"post",
		url:hostURL+'/showCart',
		data:"uId="+uId,
		dataType:'json',
		success:function(data){
			$.each(data.cartList, function(index,item) {
				//"<li class='mui-table-view-cell mui-media'>"
				//+item.goodsId+"<input type='hidden' name='goodIds' value='"+item.goodsId+"'/>"+"</li>"
				$("#dataList").append('<li>'
					+'<div class="shop-info">'
					+'<input type="checkbox" class="check goods-check goodsCheck" name="'+item.good.goodsId+'">'
					+'<input type="hidden"  value="'+item.good.goodsId+'">'
					+'<div class="shop-info-img">'
					+'<a href="#"><img src="upload/computer.jpg" /></a>'
					+'</div>'
					+'<div class="shop-info-text">'
					
					+'<h4>'+item.good.goodsName+'</h4>'
					+'<div class="shop-brief"><span>'+item.goodItem.itemName+'</span></div>'
					+'<div class="shop-price">'
					+'<div class="shop-pices">￥<b class="price">'+item.good.goodsPriceStr+'</b></div>'
					+'<div class="shop-arithmetic">'
					+'<a href="javascript:void(0);" class="minus">-</a>'
					+'<span class="num">1</span>'
					+'<a href="javascript:void(0);" class="plus">+</a>'
					+'</div></div></div></div></li>');
				
			});
			
		}
		
	});
	
	
	// 数量减
	$(document).on('tap','.minus',function() {
		var t = $(this).parent().find('.num');
		t.text(parseInt(t.text()) - 1);
		if (t.text() <= 1) {
			t.text(1);
		}
		TotalPrice();
	});
	// 数量加
	$(document).on('tap','.plus',function() {
		var t = $(this).parent().find('.num');
		t.text(parseInt(t.text()) + 1);
		if (t.text() <= 1) {
			t.text(1);
		}
		TotalPrice();
	});
	/******------------分割线-----------------******/
	  // 点击商品按钮
  $(document).on('tap click change',".goodsCheck",function() {
  	
  	//$(this).attr('checked','true');
    var goods = $(".goodsCheck"); //获取本店铺的所有商品
    var goodsC = $(".goodsCheck:checked"); //获取本店铺所有被选中的商品
    // Shops = $(this).closest(".shop-group-item").find(".shopCheck"); //获取本店铺的全选按钮
    if (goods.length == goodsC.length) { //如果选中的商品等于所有商品
      //Shops.prop('checked', true); //店铺全选按钮被选中
      if ($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
        $("#AllCheck").prop('checked', true); //全选按钮被选中
        TotalPrice();
      } else {
        $("#AllCheck").prop('checked', false); //else全选按钮不被选中 
        TotalPrice();
      }
    } else { //如果选中的商品不等于所有商品
      //Shops.prop('checked', false); //店铺全选按钮不被选中
      $("#AllCheck").prop('checked', false); //全选按钮也不被选中
      // 计算
      TotalPrice();
      // 计算
    }
  });
  // 点击店铺按钮
  $(".shopCheck").click(function() {
    if ($(this).prop("checked") == true) { //如果店铺按钮被选中
      $(this).parents(".shop-group-item").find(".goods-check").prop('checked', true); //店铺内的所有商品按钮也被选中
      if ($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
        $("#AllCheck").prop('checked', true); //全选按钮被选中
        TotalPrice();
      } else {
        $("#AllCheck").prop('checked', false); //else全选按钮不被选中
        TotalPrice();
      }
    } else { //如果店铺按钮不被选中
      $(this).parents(".shop-group-item").find(".goods-check").prop('checked', false); //店铺内的所有商品也不被全选
      $("#AllCheck").prop('checked', false); //全选按钮也不被选中
      TotalPrice();
    }
  });
  // 点击全选按钮
  $("#AllCheck").click(function() {
    if ($(this).prop("checked") == true) { //如果全选按钮被选中
      $(".goods-check").prop('checked', true); //所有按钮都被选中
      TotalPrice();
    } else {
      $(".goods-check").prop('checked', false); //else所有按钮不全选
      TotalPrice();
    }
    $(".shopCheck").change(); //执行店铺全选的操作
  });
	//计算
  function TotalPrice() {
    var allprice = 0; //总价
      $('.goodsCheck:checked').each(function() { //循环商品
         
          var num = parseInt($(this).parents(".shop-info").find(".num").text()); //得到商品的数量
          var price = parseFloat($(this).parents(".shop-info").find(".price").text()); //得到商品的单价
          var total = price * num; //计算单个商品的总价
          allprice += total; //计算该店铺的总价
        
      });
    
    $("#AllTotal").text(allprice.toFixed(2)); //输出全部总价
  }
  
  
  //结算按钮点击事件监听
	$(document).on('tap',"#jieshsuanBtn",function(){
		var params ='';
		var array = $(':checked').parent().children('input[type=hidden]');
		array.each(function(index,item){
			params = params + 'goodsId=' +item.value+'&';
			
		});
		var nums = $(':checked').parents('li').find('.num');
		nums.each(function(index,item){
			params = params + 'num=' + item.innerText + '&';
		});
		var prices = $(':checked').parents('li').find('.price');
		prices.each(function(index,item){
			params = params + 'price=' + item.innerText + '&';
		});
		params = params+"order.userId="+getUser('uid')+"&order.total="+$("#AllTotal").text();
		window.location="selectAddress.html?"+params;
	});
  
  
});
