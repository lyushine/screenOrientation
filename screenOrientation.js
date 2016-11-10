/**
 * 移动端网页强制横竖屏展示效果
 * @author shineliang
 * @create 2016/10/28 update 2016/11/10
 */
var screenOrientation = function(option){
	var _this = this;
	 _this.option = {
		'mode' : 'portrait',//portrait(竖屏)、landscape(横屏)
		'id':'wrap',//最外层容器ID
		'init':false,
		'callback':false
	};
	for (var k in option) if(option[k] != '') _this.option[k] = option[k];
	var obj = document.getElementById(_this.option.id);
	var className = obj.className || " ";
	var w_width  = obj.clientWidth;
	var w_height = obj.clientHeight;
	var flag = 0;
	var timer;
	if(_this.option.mode == "portrait")
		var cssBlock = 
	'.'+_this.option.id+'_screenOrientation{-webkit-transform: rotateZ(-90deg) !important; transform: rotateZ(-90deg); position:relative;}';
	else
		var cssBlock = 
	'.'+_this.option.id+'_screenOrientation{-webkit-transform: rotateZ(90deg) !important; transform: rotateZ(90deg); position:relative;}';
	var style = document.createElement("style");
	style.type = "text/css";
	style.textContent = cssBlock;
	document.getElementsByTagName("head").item(0).appendChild(style);
	var _width=(window.innerWidth > 0) ? window.innerWidth : screen.width;
	var _height=(window.innerHeight > 0) ? window.innerHeight : screen.height;
	_this.modifyDetec = function(){
		if((_height<_width&&_this.option.mode == "portrait")||(_height>_width&&_this.option.mode == "landscape")&& flag==0){
			obj.style.width = _height+"px";
			obj.style.height = _width+"px"; 
			obj.style.top = -(_width-_height)*0.5+"px";
			obj.style.left = -(_height-_width)*0.5+"px";
			obj.className = className+" "+(_this.option.id+"_screenOrientation");
			flag =1 ;
			if(_this.option.callback){_this.option.callback();}
		}else{
			obj.style.width = w_width+"px";
			obj.style.height = w_height+"px";
			obj.className = className;
			obj.style.top = " ";
			obj.style.left = " ";
			flag = 0;
		}
	}
	function detectOtt(){
		_width=(window.innerWidth > 0) ? window.innerWidth : screen.width;
		_height=(window.innerHeight > 0) ? window.innerHeight : screen.height;
		if(window.orientation==180||window.orientation==0||window.orientation==90||window.orientation==-90){
			clearTimeout(timer);
			timer = setTimeout(function(){
				_this.modifyDetec(_width,_height);
			},50);
			
		};
	}
	if(_this.option.init){_this.option.init();}
	detectOtt();
	window.addEventListener("resize",detectOtt,false);
};
