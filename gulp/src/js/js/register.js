function Newregister(commonHeader){
    this.containner = commonHeader;
    this.init();
}

Newregister.Template = `<div id="regBox">
        <div id="regTug"></div>
        <div class="antalogo"><img src="../img/index_img/logo.png" alt=""></div>
        <form>
            <h2>用户注册</h2>
            <div id="forReg">
                <div><input type="text" name="username" placeholder="用户名" id="userReg"><p></p></div>
                <div><input type="password" name="password" placeholder="密码" id="pwdReg"><p></p></div>
                <div><input type="password" placeholder="请重复密码密码" id="pwdAgain"><p></p></div>
                <div><input type="text" name="phone" placeholder="手机号" id="phoneReg"><p></p></div>
                <div><input type="text"  placeholder="随机验证码" id="toRandomReg"><a href="##" class="randomNum"></a><p></p></div>
                <div class="nopadding"><label for="selfReg"><input type="checkbox" id="selfReg">同意并接受安踏用户协议</label></div>
                <input  type="submit" value="注册" id="submitReg">
            </div>
        </form>
        <div class="third">
            <p>第三方账号注册</p>
            <a href="##"><img src="../img/index_img/wechat.png" alt=""></a>
            <a href="##"><img src="../img/index_img/wechat.png" alt=""></a>
            <a href="##"><img src="../img/index_img/wechat.png" alt=""></a>
        </div>
    </div>`;
$.extend(Newregister.prototype,{
    init:function(){
        this.createDom();
    },
    createDom:function(){
        this.ele = $("<div></div>").append(Newregister.Template);
        this.containner.append(this.ele);
    }
})





