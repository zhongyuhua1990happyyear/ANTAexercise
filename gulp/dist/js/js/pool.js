// 通过id获取元素
function $(id){
	return document.getElementById(id)
}

// 随机数
function random(n,m){
	return parseInt(n+Math.random()*(m-n+1))
}

//将时间对象转换为字符串
function dateString(d,sign){
	sign = sign?sign:"/"
	
	return d.getFullYear()+sign+reZero((d.getMonth()+1))+sign+reZero(d.getDate())
	+" "+reZero(d.getHours())+":"+reZero(d.getMinutes())+":"+reZero(d.getSeconds());
}

function reZero(n){
	if(n<10){
		n = "0"+n;
	}
	return n;
}
//获取非行间样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr]
	}
}

//运动框架
function move(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bStop = true;
		for(var attr in json){
			var iCur = 0;
			if(attr == "opacity"){
				iCur = parseInt(parseFloat(getStyle(obj,attr))*100)
			}else{
				iCur = parseInt(getStyle(obj,attr));	
			}
			var speed = (json[attr]-iCur)/8
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(iCur != json[attr]){
				 bStop = false;
			}
			if(attr == "opacity"){
				obj.style.opacity = (iCur + speed)/100;
				obj.style.filter = "alpha(opacity:"+iCur+speed+")"
			}else if(attr == "zIndex"){
				obj.style.zIndex = iCur + speed
			}else if(attr == "scrollTop"){
				obj.scrollTop = iCur + speed
			}else{
				obj.style[attr] = iCur + speed + "px";
			}
		}
		if(bStop){
			clearInterval(obj.timer);
			fn&&fn()
		}	
	},30);
}