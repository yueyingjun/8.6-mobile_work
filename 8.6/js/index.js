$(function(){
	$(".close-box" ).hammer().bind ("tap",function(){
	$(this).find("div").css({
	transform:"rotate(0)"
	})
	$("header").css({
	height:0,
	overflow:"hidden"
	})
})

drag(".nav-box");
drag(".news-goods-list-box")
function drag(selector){
	var startplace;
	$(selector).hammer().bind("panstart",function (ev) {
	startplace=$(this).position().left;
	})
	$(selector).hammer().bind("panleft",function (ev){
	var lefts=startplace+ev.gesture.deltaX;
	if(Math.abs(lefts)>$(this).width()-$(this).parent().width()){
	lefts=-($(this).width()-$(this).parent().width());
	}
	$(this).css({
	left:lefts
	})
	})
	$(selector).hammer().bind("panright",function (ev){
		var rights=startplace+ev.gesture.deltaX;
		if(rights>0){
		rights=0;
		}
		$(this).css({
		left:rights
		})
		})
}
})