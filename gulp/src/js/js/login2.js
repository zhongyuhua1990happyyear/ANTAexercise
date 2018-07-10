
function Login(){
    this.loginBox = $("#loginBox");
    this.regBox = $("#regBox");
    this.filter = $("#filter");
    this.toLogin = $(".toLogin");
    this.togetable = $(".togetable");
    this.submit = $(".submit");
    this.randomNum = $(".randomNum");
    this.loginTug = $("#loginTug");

    this.oUser = $("#user");
    this.oPwd = $("#pwd");
    this.oPhone = $("#phone");
    this.init();

};
$.extend(Login.prototype,{
    init:function(){
        this.submitClick();
        this.toLoginClick();
        this.hover();
        this.random();
        this.randomChange();
        this.test();
        this.closeBox();
        this.drag();
        this.stopdrag();

    },

    //登录接口切换
    submitClick:function() {
        // console.log(this.oUser);
        this.submit.eq(0).on("click", $.proxy(this.handleSubmito, this));
        this.submit.eq(1).on("click", $.proxy(this.handleSubmitt, this));
    // .bind(this));

    },
    //帐号密码登录接口
handleSubmito:function(event){

    event.preventDefault();
    var oUserval = this.oUser.val();
    var oPwdval = this.oPwd.val();
    var oPhoneval = this.oPhone.val();

    $.ajax({
        type:"post",
        url:"http://localhost/items_2/gulp/src/php/login.php",
        dataType:"json",
        data:{uname:oUserval,upwd:oPwdval,uphone:oPhoneval},
        success:function(data){
            // console.log(data)
            var n = data.status;
            // console.log(n);
            switch (n) {
                case 1:
                    alert("登录成功");
                   $("#loginBox").css("display","none");
                    $("#filter").css("display","none");
                    break;
                case 2:
                    alert("密码错误");
                    break;
                case 0:
                    alert("用户名不存在");
                    break;
            };
        }
    });
    // console.log(this.loginBox,this.filter);
},
    //手机号登录接口
handleSubmitt: function(event){
    event.preventDefault();
    var oPhoneval = this.oPhone.val();
    $.ajax({
        type:"post",
        url:"http://localhost/items_2/gulp/src/php/login2.php",
        dataType:"json",
        data:{uphone:oPhoneval},
        success:function(data){
            // console.log(data);
            var n = data.status;
            switch (n) {
                case 1:
                    alert("登录成功");
                    $("#loginBox").css("display","none");
                    $("#filter").css("display","none");
                    break;
                case 0:
                    alert("用户名不存在");
                    break;
            }

        }
    })

},
    //切换登录模式
    toLoginClick:function(){
        this.toLogin.each($.proxy(this.handleLoginEach,this));
    },
    handleLoginEach:function(i){
      this.toLogin.eq(i).on("click",i,$.proxy(this.handleClick,this));
    },
    handleClick:function(event){
        var index = event.data;
        this.toLogin.eq(index).addClass('active').siblings().removeClass("active");
        this.togetable.eq(index).css("display","block").siblings().css("display","none");
    },

    //登录按钮变色
    hover:function(){
        // console.log(this.oUser.val());
        // if(this.oUser.val()||this.oPwd.val() || this.oPhone.val()){
        //     console.log(this.oUser.val());
        //     this.submit.css("background","blue");
        // }else{
        //     console.log(this.oUser.val())
        //     this.submit.css("background","#f00");
        // }
        this.oUser.focus(function(){
            $(".submit").eq(0).css("background","blue");
        });
        this.oPhone.focus(function(){
            $(".submit").eq(1).css("background","blue");
        });
    },

    //随机生成验证码
    random:function(){
        var str = "";
        for(var i=0;i<6;i++){
            var n = parseInt(48+Math.random()*75);
            while(n>=58&&n<=64 || n>=91&&n<=96){
                n = parseInt(48+Math.random()*75);
            }
            var char = String.fromCharCode(n);
            str += char;
            this.randomNum.html(str);

        }
    },
    //鼠标点击切换验证码
    randomChange:function(){
        this.randomNum.on("click",$.proxy(this.otherNum,this));
    },
    otherNum:function(){
        this.random();
        console.log(this.randomNum.html());
    },

    //输入框验证
    test:function(){
        // console.log(1);
        this.loginBox.on("blur","input",$.proxy(this.handleBlur,this));
    },
    handleBlur:function(event){

        //用户名验证
        if(event.target.id=="user"){
            // console.log(event.target);
            var eventval = event.target.value;
            if(/^[a-zA-Z]\w{4,15}$/.test(eventval) ||/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(eventval) ||/^[1][3-8][0-9]{9}$/.test(eventval)){
                this.oUser.siblings().css({"display":"block","color":"#0f0"}).html("*账号认证通过");
            }else{
                this.oUser.siblings().css({"display":"block","color":"#f00"}).html("*请输入5-15位以字母开头的账号或11位手机号或者您的邮箱");
            }
        };
        //手机号验证
        if(event.target.id=="phone"){
            // console.log(event.target);
            var eventval = event.target.value;
            if(/^[1][3-8][0-9]{9}$/.test(eventval)){
                this.oPhone.siblings().css({"display":"block","color":"#0f0"}).html("*手机号认证通过");
            }else{
                this.oPhone.siblings().css({"display":"block","color":"#f00"}).html("*请输入11位手机号");
            }
        };

        //验证码验证
        if(event.target.id=="toRandom"){
            // console.log(event.target);
            var eventval = event.target.value;
            if(eventval==$("#toRandom").siblings().eq(0).html()){
                $("#toRandom").siblings().eq(1).css({"display":"block","color":"#0f0"}).html("*验证码正确");
            }else{
                $("#toRandom").siblings().eq(1).css({"display":"block","color":"#f00"}).html("*验证码错误");
            }
        };
    },

    //登录页拖拽
    drag:function(){

        this.loginTug.on("mousedown",$.proxy(this.handleLoginTug,this));
    },
    handleLoginTug:function(e){

        var e = event || e;
        // this.loginBox.css("position","absolute");
        var obj={
            disX:e.offsetX,
            disY:e.offsetY
        }
        $(document).on("mousemove",obj,$.proxy(this.handleMousemove,this));

    },
        handleMousemove:function(event){
            var e = event || e;
            var l = e.clientX - event.data.disX;
            var t = e.clientY - event.data.disY;
            // console.log(_this.loginBox.width(),$(window).width());
            // console.log(_this.loginBox.height(),$(window).height());
            var iW = $(window).width()-this.loginBox.width();
            var iH = $(window).height()-this.loginBox.height();
            l = l > iW ? iW : (l<0?0:l);
            t = t > iH ? iH : (t<0?0:t)

            this.loginBox.css("position","absolute");
            this.loginBox.css("left",l+200+"px") ;
            this.loginBox.css("top",t+250+"px");

    },

    //停止拖拽         -------------无效指令
    stopdrag:function(event){

        document.onmousemove = null
    },

    //关闭登录窗口和登录窗口
    closeBox:function(){
        this.filter.on("click",$.proxy(this.handleRemove,this));
    },
    handleRemove:function(){
        this.loginBox.css("display","none");
        this.regBox.css("display","none");
        this.filter.css("display","none");
    }
})
new Login();




