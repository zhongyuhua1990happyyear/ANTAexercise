function Index(){
	this.login = $("#login");
	this.register = $("#register");
	this.filter = $("#filter");
	this.loginBox = $("#loginBox");
	this.regBox = $("#regBox");
	this.init();
}
$.extend(Index.prototype,{
	init:function(){
		this.toLogin();
		this.toRegister();
		this.getJson();

	},
	toLogin:function(){
        this.login.on("click",$.proxy(this.handleLogin,this));
	},
	toRegister:function(){
		this.register.on("click",$.proxy(this.handleRegister,this));
	},
	handleLogin:function(){
		this.loginBox.css("display","block");
		this.filter.css("display","block");
	},
    handleRegister:function(){
        this.regBox.css("display","block");
        this.filter.css("display","block");
    },
    getJson:function(){
    	$.ajax(
		{
			type:"get",
			url:"http://localhost/items_2/gulp/src/json/index.json",
			dataType:"json",
			data:{},
			success:function(data){
				// console.log(data);
				// console.log(data[0].title);
				var allCont = $("#allCont");

				// console.log(allCont);
				// console.log(oCont1);
				var str="";

                $.each(data,function(i){// for(var i=0;i<data.length;i++){
                    var str1="",str2="",str3 = "";
					str1 = ` <a href="##"><img src=${this.title}></a>`
                    $.each(data[i].header,function(k){//for(var j=0;j<data[i].header.length;j++){

						str2 += `<a href="##" class="fl bigshoe"><img src=${this.img}></a>`
					});
                    $.each(data[i].list,function(k){//for(var k =0;k<data[i].list.length;k++){
						// console.log(list);
                    	str3 +=`<li class="live fl">
                    <a href="detail.html?data-id=${this.id}" target="_blank" data-id=${this.id}><img src=${this.img}></a>
                    <div>
                        <h3>${this.price}</h3>
                        <p>${this.describle}</p>
                        <a href="cart.html?data-id=${this.id}" target="_blank" data-id=${this.id}>&nbsp;</a>
                    </div>
                </li>`
					});
					str +=`<div class="content">
        	${str1}
        <div class="main">
            <div class="show">${str2}</div>
            <ul class="main bashoes">
                ${str3}
            </ul>
        </div>
    </div>`
				});
				allCont.html(str);
			}
		}
		)
    }
    // listHover:function(){
    // var aLi =$(".live");
    // console.log(aLi);//none
    // }
})
new Index();


function Swiper(){
	this.banner = $(".banner");
    this.iNow = 0;
    this.Next = 0;
    this.aLi = $(".banner>ul>li");
    this.btn = $("#btn>a")
    this.init()
}
$.extend(Swiper.prototype,{
    init:function(){
        this.autoPlay();
        this.mouseover();
        this.mouseout();
        this.aBtnClick();
    },
    autoPlay:function(){
        this.timer = setInterval($.proxy(this.handlePlay,this),3000);
    },
    handlePlay:function(){
        if(this.Next ==this.aLi.length-1){
            this.Next = 0;
        }else{
            this.Next++;
        }
        this.toImg();
    },
    toImg:function(){
        this.aLi.eq(this.iNow).stop(true).fadeTo(3000,0);
        this.aLi.eq(this.Next).stop(true).fadeTo(3000,1);
        this.iNow = this.Next;
        this.btn.eq(this.iNow).addClass("active").siblings().removeClass("active");
    },
    mouseover:function(){
        this.banner.on("mouseover",$.proxy(this.handleOver,this));
    },
    handleOver:function(){
        clearInterval(this.timer);
    },
    mouseout:function(){
        this.banner.on("mouseout",$.proxy(this.handleOut,this));
    },
    handleOut:function(){
        this.autoPlay();
    },
    aBtnClick:function(){
        this.btn.each($.proxy(this.handleaBtnEach,this))
    },
    handleaBtnEach:function(i){
        this.btn.eq(i).on("click",i,$.proxy(this.handleAbtn,this))
    },
    handleAbtn:function(event){
        var index = event.data;
        this.btn.eq(index).addClass('active').siblings().removeClass("active");
        this.aLi.eq(index).stop(true).fadeTo(1000,1);
        this.aLi.eq(index).siblings().stop(true).fadeTo(3000,0);
        this.iNow = index;
        this.Next = this.iNow
    }
})

new Swiper();










