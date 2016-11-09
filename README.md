/**
 * 移动端强制横竖屏展示效果
 * @author shineliang
 * @create 2016/10/28 update 2016/10/28
 */
使用户在旋转手机屏幕使强制体验的页面显示效果为横/竖屏,还原预期设计为横/竖屏设计效果，实现移动端手机模拟网页强制用户旋转为效果（强制横屏、强制竖屏），
不必考虑竖屏的布局减少开发维护成本提升用户体验。

##使用方式：
	<script src="http://ossweb-img.qq.com/images/js/landscape/screenOrientation.min.js"></script>
	<script>
		var screenOrientation = new screenOrientation({
      mode:'portrait',//portrait(竖屏)、landscape(横屏)
        init:function(){
          // alert('初始化成功');
        },
        landback:function(){
          alert("旋转成功");
        }
    });
	</script>
## 具体参数说明（标红为必填，其他为选填）：

mode:屏幕模式 如portrait(竖屏)、landscape(横屏),

id:页面整体容器ID,

init:初始化执行函数,

callback:发生旋转重置调用函数,

##例子效果：
![扫描我](http://s.doyo.cn/img/58/11/645f9e9e78c639001196.png)
