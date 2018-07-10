function Newnav(commonHeader){
    this.containner = commonHeader;
    this.init();
};
Newnav.Template =`
<div id="filter"></div>
<div class="main topBanner">
       <a href="##">
          <img src="http://image03.anta.cn/sources/NewEdition/znq/dt_530.jpg" alt="上新">
       </a>
    </div>
    <div class="main topNav">
        <a href="##">
            <img src="../img/index_img/logo1.png" title="安踏，永不止步">
        </a>
        <a href="##" id="login">登录</a>
        <span>|</span>
        <a href="##" id="register">注册</a>
        <ul class="fr inb">
            <li class="fr"><a href="##"><i class="iconfont">&#xe8c0;</i>购物车</a></li>
            <li class="fr"><a href="##">企业团购</a><span>|</span></li>
            <li class="fr"><a href="##"><i class="iconfont">&#xe8c0;</i>手机商城</a><span>|</span></li>
            <li class="fr"><a href="##">品牌官网</a><span>|</span></li>
            <li class="fr"><a href="##">我的安踏</a><span>|</span></li>
        </ul>
    </div>
    <header>
        <div class="main botNav">
            <div class="fl"><a href="##" class="mainLeft">所有商品分类<i class="iconfont">&#xe8c0;</i></a>
                <ul class="mainLeft">
                <li>
                    <h3><a href="##">男鞋</a></h3>
                    <p>
                        <a href="##">跑步鞋</a>
                        <a href="##">篮球鞋</a>
                        <a href="##">休闲鞋</a>
                        <a href="##">板鞋</a>
                    </p>
                    <p>
                        <a href="##">帆布鞋</a>
                        <a href="##">足球鞋</a>
                        <a href="##">保暖棉鞋</a>
                    </p>
                    <p>
                        <a href="##">加大码鞋</a>
                        <a href="##">2018新品</a>
                    </p>
                </li>
                <li><h3><a href="##">女鞋</a></h3>
                    <p>
                        <a href="##">跑步鞋</a>
                        <a href="##">综训鞋</a>
                        <a href="##">休闲鞋</a>
                        <a href="##">板鞋</a>
                    </p>
                    <p>
                        <a href="##">帆布鞋</a>
                        <a href="##">2018新品</a>
                    </p>
                </li>
                <li><h3><a href="##">男装</a></h3>
                    <p>
                        <a href="##">T恤</a>
                        <a href="##">卫衣/长T</a>
                        <a href="##">短裤</a>
                    </p>
                    <p>
                        <a href="##">梭织外套</a>
                        <a href="##">运动套装</a>
                        <a href="##">运动长裤</a>
                    </p>
                    <div class="abs listbox">
                        <ul class="fl">
                            <li>
                                <a href="##">棉服/羽绒服</a>
                                <a href="##">梭织外套</a>
                                <a href="##">卫衣/长T</a>
                                <a href="##">T恤</a>
                                <a href="##">POLO衫</a>
                            </li>
                            <li>
                                <a href="##">针织长裤</a>
                                <a href="##">梭织长裤</a>
                                <a href="##">七分裤</a>
                                <a href="##">短裤/五分裤</a>
                                <a href="##">短裤</a>
                            </li>
                            <li>
                                <a href="##">篮球套/足球套/比赛服</a>
                            </li>
                        </ul>
                        <div class="fl style-ad">
                            <h4>男装新品</h4>
                            <a href="##"><img
                                    src="http://image03.anta.cn/sources/NewEdition/newindex/daohang/xp_12081.jpg"
                                    alt=""></a>
                        </div>
                    </div></li>
                <li><h3><a href="##">女装</a></h3>
                    <p>
                        <a href="##">T恤</a>
                        <a href="##">短裤/七分裤</a>
                    </p>
                    <p>
                        <a href="##">运动bra</a>
                        <a href="##">运动长裤</a>
                    </p>
                    <div class="abs listbox">
                        <ul class="fl">
                            <li>
                                <a href="##">羽绒服</a>
                                <a href="##">针织外套</a>
                                <a href="##">梭织外套</a>
                                <a href="##">运动bra</a>
                            </li>
                            <li>
                                <a href="##">运动长裤</a>
                                <a href="##">短裤/七分裤</a>
                                <a href="##">运动套装</a>
                                <a href="##">POLO衫</a>
                                <a href="##">T恤</a>
                            </li>
                        </ul>
                        <div class="fl style-ad">
                            <h4>女装新品</h4>
                            <a href="##">
                                <img src="http://image03.anta.cn/sources/NewEdition/newindex/daohang/xp_12082.jpg" alt="">
                            </a>
                        </div>
                    </div></li>
                <li>
                    <h3><a href="##">儿童</a></h3>
                    <p>
                        <a href="##">男童鞋</a>
                        <a href="##">女童鞋</a>
                        <a href="##">男童装</a>
                        <a href="##">女童装</a>
                    </p>
                    <p>
                        <a href="##">跑步</a>
                        <a href="##">篮球</a>
                        <a href="##">足球</a>
                        <a href="##">配件</a>
                        <a href="##">小童</a>
                    </p>
                </li>
                <li><h3><a href="##">配件</a></h3>
                    <p>
                        <a href="##">男袜</a>
                        <a href="##">女袜</a>
                        <a href="##">儿童袜</a>
                        <a href="##">运动内裤</a>
                    </p>
                    <p>
                        <a href="##">背包</a>
                        <a href="##">帽子</a>
                        <a href="##">篮球/足球</a>
                    </p>
                </li>
            </ul>
            </div>
            <ul class="fl botlist">
                <li class="fl"><a href="##">首页</a><span>|</span>
                    <div class="abs itembox">
                        <a href="##" class="fl">
                            <img src="http://image03.anta.cn/sources/NewEdition/shouye/11735505.jpg" alt="">
                        </a>
                        <ul class="fl">
                            <li>
                                <h4>
                                    <a href="##">男子跑步</a>
                                </h4>
                                <a href="">跑步鞋</a>
                                <a href="">跑步服</a>
                                <a href="">加大码跑鞋</a>
                            </li>
                            <li>
                                <h4>
                                    <a href="##">女子跑步</a>
                                </h4>
                                <a href="">跑步鞋</a>
                                <a href="">跑步服</a>
                            </li>
                            <li>
                                <h4>
                                    <a href="##">新品推荐</a>
                                </h4>
                                <a href="">儿童跑步系列</a>
                                <a href="">跑步新品</a>
                            </li>
                            <li>
                                <h4>
                                    <a href="##">优惠活动</a>
                                </h4>
                                <a href="">关注官方微信领券满399减50</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="fl"><a href="##">跑步</a><span>|</span></li>
                <li class="fl"><a href="##">篮球</a><span>|</span></li>
                <li class="fl"><a href="##">足球</a><span>|</span></li>
                <li class="fl"><a href="##">健身</a><span>|</span></li>
                <li class="fl"><a href="##">休闲</a><span>|</span></li>
                <li class="fl"><a href="##">配件</a><span>|</span></li>
                <li class="fl"><a href="##">儿童</a><span>|</span></li>
                <li class="fl"><a href="##"><img src="../img/index_img/logo2.png" alt=""></a></li>
            </ul>
            <div class="search">
                <input type="text" required placeholder="搜索">
                <a href="##"><i class="iconfont">&#xe8c0;</i></a>
            </div>
        </div>
    </header>`;
$.extend(Newnav.prototype,{
    init:function(){
        this.createDom();
    },
    createDom:function(){
        this.ele = $("<div></div>").append(Newnav.Template);
        this.containner.append(this.ele)
    }
})