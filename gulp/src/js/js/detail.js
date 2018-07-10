function Magister(){
	this.small = $(".smallImg");
	this.middle = $(".middle");
	this.middleImg = $(".middleImg");
	this.big = $("#big");
	this.bigImg = $("#bigImg");
	this.smallFilter = $("#smallFilter");
	this.shoesBox = $(".shoesBox>li");
	this.colorSize = $(".colorSize>ul>li");

	// console.log(this.small,this.middle,this.middleImg,this.big,this.bigImg,this.smallFilter);
	this.init();
}
$.extend(Magister.prototype,{
	init:function(){
		this.show();
		this.mouseover();
		this.mouseout();
		this.shoesChange();
		this.sizeChange();

	},


	//鼠标点击小图切换大图
	show:function(){
		this.small.each($.proxy(this.handleHover,this));
	},
	handleHover:function(i){
		this.small.eq(i).on("click",i,$.proxy(this.handleClick,this));
	},
	handleClick:function(event){
		var index = event.data;
		this.small.eq(index).css("border-color","#f00").siblings().css("border-color","#e5e5e5");
		this.middleImg.attr("src",this.small.eq(index).attr("src"));
		this.bigImg.attr("src",this.small.eq(index).attr("src"));
	},

	//鼠标移上显示smallFilter
	mouseover:function(){
		this.middle.on("mouseover",$.proxy(this.handleMouseover,this));
	},
	handleMouseover:function(){
		this.smallFilter.css("display","block");
		this.big.css("display","block");
		this.middle.on("mousemove",$.proxy(this.handleMove,this));

	},

	//鼠标移出
	mouseout:function(){
		$(document).on("mouseout",$.proxy(this.handleMouseout,this));
	},
	handleMouseout:function(){
		this.smallFilter.css("display","none");
		this.big.css("display","none");
	},


	//移动filter
	handleMove:function(event){
		var disX = event.pageX;
		var disY = event.pageY;
		var l = event.pageX-this.middle.offset().left-this.smallFilter.width()/2;
		var t = event.pageY-this.middle.offset().top-this.smallFilter.height()/2;

		var iW = this.middle.width() - this.smallFilter.width();
		var iH = this.middle.height() - this.smallFilter.height();

		l = l >iW ? iW : (l < 0 ? 0:l);
		t = t>iH ? iH :(t<0 ? 0:t);

		this.smallFilter.css({"left":l+"px","top":t+"px"}) ;
		this.bigImg.css({"left":-l+"px","top":-t+"px"}) 
	},

	//切换鞋样式
	shoesChange:function(){
		this.shoesBox.each($.proxy(this.handleShoes,this));
	
	},
	handleShoes:function(i){
		
		this.shoesBox.eq(i).on("click",i,$.proxy(this.handleShoeschange,this));
	},
	handleShoeschange:function(event){
		
		var index = event.data;
		console.log(index);
		this.shoesBox.eq(index).css("border-color","#f00").siblings().css("border-color","#b8b7bd");
	},


	//切换尺码
	sizeChange:function(){
		this.colorSize.each($.proxy(this.handleColor,this));
	
	},
	handleColor:function(i){
		
		this.colorSize.eq(i).on("click",i,$.proxy(this.handleColorchange,this));
	},
	handleColorchange:function(event){
		
		var index = event.data;
		console.log(index);
		this.colorSize.eq(index).css("border-color","#f00").siblings().css("border-color","#b8b7bd");
	}

	
	





});
new Magister();






function Getnums(){
	this.middleImg = $(".middleImg");
	this.init()
};
$.extend(Getnums.prototype,{
	init:function(){
		this.inImg();
	},
	inImg:function(){
        var id = location.href.split("?")[1].split("=")[1];
        // console.log(id);
		$.ajax({
			type:"get",
			url:"http://localhost/items_2/gulp/src/json/index.json",
			dataType:"json",
			data:{},
			success:function(data){
				// console.log(data);

				$.each(data,function(i){
					$.each(data[i].list,function(j){
						if(id == data[i].list[j].id){
							$(".middleImg").attr("src",data[i].list[j].img);
                            $("#bigImg").attr("src",data[i].list[j].img);
							$(".detailHead>h1").html(data[i].list[j].describle);
                            $(".salesPrice").html("￥"+data[i].list[j].price);
						}
					})
				})
			}
		})
	}
})

new Getnums();


function AddtoCart(){
	this.id = location.href.split("?")[1].split("=")[1];
	this.addNum = $("#addNum");
	this.num = $(".num");
	this.minusNum = $("#minusNum")
	this.toCart=$(".toCart")

	this.init()
}
$.extend(AddtoCart.prototype,{
	init:function(){
		this.addClick();
		this.minusClick();
		this.cartClick();
		// this.buyClick();
		
	},
	addClick:function(){
		this.addNum.on("click",$.proxy(this.handleAddClick,this));
	},
	handleAddClick:function(){
		this.num.html(Number(this.num.html())+1)
	},
	minusClick:function(){
		this.minusNum.on("click",$.proxy(this.handleMinus,this))
	},
	handleMinus:function(){
		if(Number(this.num.html())>0){
			this.num.html(Number(this.num.html())-1);
		}
	},
	cartClick:function(){
		this.toCart.on("click",$.proxy(this.handeletoCart,this))
	},
	handeletoCart:function(){
		
		var num = Number(this.num.html())
		var obj = {id:this.id,number:num}
		
		if(localStorage.getItem("init")){
			var localJson = JSON.parse(localStorage.getItem("init"));
			var bStop = false;
			
			for(var i=0;i<localJson.length;i++){
				if(localJson[i].id==this.id){
					localJson[i].number+=Number(num);
					bStop=true;
					break;
				}
			}
			if(!bStop){
				localJson.push(obj)
			}
			localStorage.setItem("init",JSON.stringify(localJson))
		}else{
			var arr = [];
			arr.push(obj);
			localStorage.setItem("init",JSON.stringify(arr))
		}
		console.log(localJson);
		
	}

})

new AddtoCart();