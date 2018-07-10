function Addtab(){
	this.localJson = JSON.parse(localStorage.getItem("init"));
	this.table = $("#table");
	this.toolbar = $(".toolbar");
	this.init();
	console.log(this.localJson);
};	
$.extend(Addtab.prototype,{
	init:function(){
		$.ajax({
				type:"get",
				url:"http://localhost/items_2/gulp/src/json/index.json",
				dataType:"json",
				data:{},
				success:function(data){
					console.log("aaa");
					var str="";
					var totalNum = 0;
					var toolbar = $(".toolbar");
					var localJson = JSON.parse(localStorage.getItem("init"));
				// 	for(var k=0;k<this.localStorage.length;k++){
				// 		for(var i=0;i<data.length;i++){
				// 			for(var j=0;j<data[i].list.length;j++){
				// 				if(this.localJson[k].id == data[i].list[j].id){
				// 				var totalNum = data[i].list[j].price*this.localJson[i].number;
				// 				str+=`<tr>
    //             <td><input type="checkbox" class="cartCheck soncheck" data-id="sonCheck"></td>
    //             <td>11831111*parseInt(Math.Random()*10000000)</td>
    //             <td><img src=${data[i].list[j].img}></td>
    //             <td>${data[i].list[j].describle}</td>
    //             <td>￥${data[i].list[j].price}</td>
    //             <td><span class="changeBox" id="minus">-</span><span id="num"><input type="text" value="1" id="changeNum"></span><span id="add" class="changeBox">+</span></td>
    //             <td width="76">￥${totalNum}</td>
    //             <td><a href="##" id="del">删除</a></td>
    //         </tr>`
				// 			}
				// 		}
				// 	}
				// }
				$.each(data,function(i){
					console.log(data);
					$.each(data[i].list,function(j){
						$.each(localJson,function(k){
							if(data[i].list[j].id==localJson[k].id){
									var totalNum = data[i].list[j].price*localJson[i].number;
							str+=`<tr>
                <td><input type="checkbox" class="cartCheck soncheck" data-id="sonCheck"></td>
               <td>${11831111+parseInt(Math.random()*10000000)}</td>
               <td><img src=${data[i].list[j].img}></td>
               <td>${data[i].list[j].describle}</td>
               <td>￥${data[i].list[j].price}</td>
               <td><span class="changeBox" id="minus">-</span><span id="num"><input type="text" value=${localJson[k].number} id="changeNum"></span><span id="add" class="changeBox">+</span></td>
               <td width="76">￥${totalNum}</td>
               <td><a href="##" id="del">删除</a></td></tr>`		
               		
					
					}
						})
						
					})
				})
				
            	// console.log(toolbar);
				toolbar.before(str);
					
					}	
				})	
		}
	
})

new Addtab();

function Cart(){
	this.table = $("#table");
	this.checkAll = $("#checkAll");
	
	this.soncheck = $(".soncheck");
	this.add = $("#add");
	this.del = $("#del");
	this.delChk = $("#delChk");
	this.clearAll = $("#clearAll");
	this.less = $("#less");
	this.total = $("#total");
	this.init();
};
$.extend(Cart.prototype,{
	init:function(){

		this.check();
		this.boxClick();
	},
	check:function(){
		this.checkAll.on("click",$.proxy(this.handleCheck,this));
	},
	handleCheck:function(){
		
		if(this.checkAll.prop("checked")){
			this.soncheck.prop("checked",true)	
		}else{
			this.soncheck.prop("checked",false);
			this.total.html("￥0.00");
			this.less.html("￥0.00");
		}
	},
	boxClick:function(){
		this.table.on("click",$.proxy(this.handleTabClick,this));
	},
	handleTabClick:function(event){
		var $target = $(event.target);
		var target = event.target;
		if(target.id=="add" && target.tagName=="SPAN"){
			
			$target.prev().children().val(Number($target.prev().children().val())+1);
			// console.log(1);
			// console.log(Number($target.parent().next().html().slice(1)));
			$target.parent().next().html("￥"+Number($target.parent().prev().html().slice(1))*Number($target.prev().children().val()));
			this.total.html($target.parent().next().html());
		};
		if(target.id=="minus" && target.tagName=="SPAN" && $target.next().children().val()>0){
			
			$target.next().children().val(Number($target.next().children().val())-1);
			// console.log(1);
			// console.log(Number($target.parent().next().html().slice(1)));
			$target.parent().next().html("￥"+Number($target.parent().prev().html().slice(1))*Number($target.next().children().val()));
			this.total.html($target.parent().next().html());
		};
		if(target.id=="del" && target.tagName=="A"){
			$target.parent().parent().remove();
		};
		
		





	}
	




})


new Cart();