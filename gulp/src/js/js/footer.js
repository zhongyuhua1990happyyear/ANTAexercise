function Footer(){
    this.commonFooter = $("#commonFooter");
    this.init();
};
Footer.Template =`<footer>
        <div class="main footer">
            <ul class="fl foLeft">
                <li class="fl"><h4>用户指南</h4>
                    <a href="##" class="blo">新用户注册</a>
                    <a href="##" class="blo">购物流程</a>
                    <a href="##" class="blo">尺码对照表</a>
                    <a href="##" class="blo">支付方式</a>
                    <a href="##" class="blo">包装形式</a>
                    <a href="##" class="blo">配送方式</a>
                    <a href="##" class="blo">配送费用</a>
                </li>
                <li class="fl"><h4>会员政策</h4>
                    <a href="##" class="blo">积分政策</a>
                    <a href="##" class="blo">会员政策</a>
                    <a href="##" class="blo">用户协议</a>
                    <a href="##" class="blo">发票制度</a>
                </li>
                <li class="fl"><h4>售后服务</h4>
                    <a href="##" class="blo">订单查询</a>
                    <a href="##" class="blo">快递查询</a>
                    <a href="##" class="blo">退换货政策</a>
                    <a href="##" class="blo">退换货流程</a>
                    <a href="##" class="blo">退款方式</a>
                </li>
                <li class="fl"><h4>联系我们</h4>
                    <a href="##" class="blo">企业团购</a>
                    <a href="##" class="blo">商务合作</a>
                </li>
            </ul>
            <div class="fl foRight">
                <h4>在线咨询</h4>
                <p>400-858-2020</p>
                <a href="##" class="blo server"><i class="iconfont">&#xe8c0;</i>在线客服</a>
                <h4>微信咨询</h4>
                <a href="##" class="blo code"><img src="../img/index_img/code.jpg" alt=""></a>
            </div>
        </div>
    </footer>
    <div class="copyright">
        <div class="main cpr">
            <span>COPYRIGHT 2012-2016</span><span>厦门安踏电子商务有限公司</span><span><img src="../img/index_img/police_black.jpg" alt=""></span><span>闽ICP备11020421号</span>
            <div><a href="##">安踏特卖</a><a href="##">网站地图</a><a href="##">标签</a><a href="##">友情链接</a></div>
        </div>
    </div>`;
$.extend(Footer.prototype,{
    init:function(){
        this.createDom();
    },
    createDom:function(){
        this.ele = $("<div></div>").append(Footer.Template);
        this.commonFooter.append(this.ele)
    }
})

new Footer();