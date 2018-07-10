function Page(){
    this.ele = $("#commonHeader");
    this.init();
}

$.extend(Page.prototype,{
    init:function(){
        this.header = new Newnav(this.ele);
        this.login = new Newlogin(this.ele);
        this.register = new Newregister(this.ele);
    }
})

new Page();