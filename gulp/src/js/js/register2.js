function Register(){
    this.regBox = $("#regBox");
    this.filter = $("#filter");
    this.submit = $("#submitReg");

    this.regTug = $("#regTug");

    this.oUser = $("#userReg");
    this.oPwd = $("#pwd");
    this.oPhone = $("#phoneReg");
    this.init();

};
$.extend(Register.prototype,{
    init:function(){
        this.submitClick();
        this.hover();

        this.test();

        this.drag();
    },

    //登录接口
    submitClick:function() {
        // console.log(this.oUser);
        this.submit.on("click", $.proxy(this.handleSubmit, this));

        // .bind(this));

    },
    //帐号密注册接口
    handleSubmit:function(event){

        event.preventDefault();
        var oUserval = this.oUser.val();
        var oPwdval = this.oPwd.val();
        var oPhoneval = this.oPhone.val();
        console.log(1)
        $.ajax({
            type:"post",
            url:"http://localhost/items_2/gulp/src/php/register.php",
            dataType:"json",
            data:{uname:oUserval,upwd:oPwdval,uphone:oPhoneval},
            success:function(data){
                // console.log(data)
                var n = data.status;
                // console.log(n);
                switch (n) {
                    case 1:
                        alert("注册成功");
                        $("#regBox").css("display","none");
                        $("#filter").css("display","none");
                        break;
                    case 0:
                        alert("用户名重复，请重新注册");
                        break;
                };
            }
        });
        // console.log(this.regBox,this.filter);
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
            $(".submit").css("background","blue");
        });
    },


    //输入框验证
    test:function(){
        // console.log(1);
        this.regBox.on("blur","input",$.proxy(this.handleBlur,this));
    },
    handleBlur:function(event){

        //用户名验证
        if(event.target.id=="userReg"){
            // console.log(event.target);
            var eventval = event.target.value;
            if(/^[a-zA-Z]\w{4,15}$/.test(eventval) ||/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(eventval) ||/^[1][3-8][0-9]{9}$/.test(eventval)){
                this.oUser.siblings().css({"display":"block","color":"#0f0"}).html("*账号认证通过");
            }else{
                this.oUser.siblings().css({"display":"block","color":"#f00"}).html("*请输入5-15位以字母开头的账号或11位手机号或者您的邮箱");
            }
        };
        //手机号验证
        if(event.target.id=="phoneReg"){
            // console.log(event.target);
            var eventval = event.target.value;
            if(/^[1][3-8][0-9]{9}$/.test(eventval)){
                this.oPhone.siblings().css({"display":"block","color":"#0f0"}).html("*手机号认证通过");
            }else{
                this.oPhone.siblings().css({"display":"block","color":"#f00"}).html("*请输入11位手机号");
            }
        };
		//密码验证
        if(event.target.id=="pwdAgain"){
            // console.log(event.target);
            var eventval = event.target.value;

            if(eventval==$("#pwdReg").html()){
            	console.log(eventval);
            	console.log($("#tpwdReg").html())
                $("#pwdAgain").siblings().css({"display":"block","color":"#0f0"}).html("*密码一致");
            }else{
                $("#pwdAgain").siblings().css({"display":"block","color":"#f00"}).html("*密码不一致");
            }
        };




        //验证码验证
        if(event.target.id=="toRandomReg"){
            // console.log(event.target);
            var eventval = event.target.value;
            console.log(eventval);
            if(eventval==$("#toRandomReg").siblings().eq(0).html()){
                $("#toRandomReg").siblings().eq(1).css({"display":"block","color":"#0f0"}).html("*验证码正确");
            }else{
                $("#toRandomReg").siblings().eq(1).css({"display":"block","color":"#f00"}).html("*验证码错误");
            }
        };
    },

    //登录页拖拽             无效指令(-------------------------)
    drag:function(){
        this.regTug.on("mousedown",$.proxy(this.handleRegTug,this));
    },
    handleRegTug:function(e){
        var e = event || e;
        // this.regBox.css("position","absolute");
        var disX = e.offsetX;
        var disY = e.offsetY;
        var _this = this;
        document.onmousemove = function(e){

            var e = event || e;
            var l = e.clientX - disX;
            var t = e.clientY - disY;
            var iW = document.documentElement.clientWidth-_this.regBox.offsetWidth;
            var iH = document.documentElement.clientHeight-_this.regBox.offsetHeight;
            l = l > iW ? iW : (l<0?0:l);
            t = t > iH ? iH : (t<0?0:t)
            _this.regBox.offset().left = l+200+ "px";
            _this.regBox.offset().top  = t +250+"px";
        };
    }
})
new Register();

