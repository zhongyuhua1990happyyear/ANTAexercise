function Newlogin(commonHeader){
    this.containner = commonHeader;
    this.init();
};
Newlogin.Template =`<div id="loginBox">
        <div id="loginTug"></div>
        <div class="antalogo"><img src="../img/index_img/logo.png" alt=""></div>
        <form>
            <h2><span class="toLogin active">密码登录</span><span class="toLogin">短信登录</span></h2>
            <div id="forLogin">

                <div id="forpwd" class="togetable">
                    <div><input type="text" placeholder="用户名/手机号/邮箱" id="user"><p></p></div>
                    <div><input type="password" placeholder="密码" id="pwd"></div>
                    <div><input type="text" placeholder="随机验证码" id="toRandom"><a href="##" class="randomNum"></a><p></p></div>
                    <input  type="submit" value="登录" class="submit">
                    <div class="nopadding">
                        <label for="selfLogin1"><input type="checkbox" id="selfLogin1">下次自动登录</label>
                        <div class="turn">
                            <a href="##">忘记密码</a><span>|</span><a href="##">注册</a>
                        </div>
                    </div>
                </div>
                <div id="formsg" class="togetable">
                    <div><input type="text" placeholder="手机号" id="phone"><p></p></div>
                    <div><input type="password" placeholder="手机验证码" id="getnum"><p></p></div>
                    <input  type="submit" value="登录" class="submit">
                    <div class="nopadding">
                    <label for="selfLogin2"><input type="checkbox" id="selfLogin2">下次自动登录</label>
                    <div class="turn">
                        <a href="##">忘记密码</a><span>|</span><a href="##">注册</a>
                    </div>
                </div>
                </div>

            </div>
        </form>
        <div class="third">
            <p>第三方账号登录</p>
            <a href="##"><img src="../img/index_img/wechat.png" alt=""></a>
            <a href="##"><img src="../img/index_img/wechat.png" alt=""></a>
            <a href="##"><img src="../img/index_img/wechat.png" alt=""></a>
        </div>
    </div>`;
$.extend(Newlogin.prototype,{
    init:function(){
        this.createDom();
    },
    createDom:function(){
        this.ele = $("<div></div>").append(Newlogin.Template);
        this.containner.append(this.ele)
    }

})






