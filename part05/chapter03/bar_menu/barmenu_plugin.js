(function($){
	//barMenu 플러그인
	$.fn.barMenu=function(){
		this.each(function(index){
			var barMenu = new BarMenu(this);
		});
	return false;
	}
}(jQuery));
