function BarMenu(selector){
	//프로퍼티 생성하기
	this.$barMenu = null;
	this.$menuBody = null;
	this.$menuItems = null;
	this.$overItem = null;
	this.$bar = null;

	this.$selectItem = null;

	this.init(selector);
	this.initEvent();
}

BarMenu.prototype.init = function(selector){
	this.$barMenu = $(selector);
	this.$menuBody = this.$barMenu.find(".menu-body");
	this.$menuItems = this.$menuBody.find("li");
	this.$bar = this.$barMenu.find(".bar");

}
BarMenu.prototype.initEvent = function(){
	var evThis = this;

	//오버 메뉴 효과 처리 (02_1)
	this.$menuItems.mouseenter(function(){
		evThis.setOverMenu($(this));
	});

	//메뉴 영역을 나간 경우(02_2)
	this.$barMenu.mouseleave(function(){
		evThis.removeOver();

		//재선택 처리(03_3)
		evThis.reselctMenu();
	});

	// 선택 메뉴 아이템 구현하기(03_1)
	this.$menuItems.click(function(){
		// 기존 오버메뉴가 있을 경우 제거
		evThis.removeOver();
		evThis.setSelectMenu($(this));
	});
}

/* 오버 메뉴 처리하기 (02_1)*/
BarMenu.prototype.setOverMenu = function($item){
	// 기존 오버메뉴 over 제거하기
	if(this.$overItem){
		this.$overItem.removeClass("over");
	}

	//this.$overItem = $item; //$item 매개변수 값으로 넘어온 메뉴를 $overItem 프로퍼티에 담는다.
	//this.$overItem.addClass("over");

	// 선택메뉴 인덱스 값 구하기(03_2)
	var selectIndex = -1;
	if(this.$selectItem!=null){
		selectIndex = this.$selectItem.index();
	}
	// 오버와 선택 메뉴의 인덱스 값을 비교
	if($item.index()!=selectIndex){
		this.$overItem = $item; //$item 매개변수 값으로 넘어온 메뉴를 $overItem 프로퍼티에 담는다.
		this.$overItem.addClass("over");
	}else{
		this.$overItem = null;
	}

	//바메뉴 동작 추가(02_3)
	this.moveBar($item);
}

/* 오버 메뉴 제거 (02_2) */
BarMenu.prototype.removeOver = function(){
	if(this.$overItem){
		this.$overItem.removeClass("over");
	}
	this.$overItem = null;
	//바메뉴 동작 추가(02_3)
	this.moveBar(null);
}

/* 바 이동 (02_3) */
BarMenu.prototype.moveBar = function($item,animation){
	var left = 0;
	var width = 0;
	if($item!=null){
		left = $item.position(true).left + parseInt($item.css("margin-left"));
		width = $item.outerWidth();
	}

	/*this.$bar.stop().animate({
		"left":left,
		"width":width
	},300,"easeOutQuint");*/

	/* 시작 시 메뉴클릭 시 모션 없음 (03_4)*/
	if(animation == false){
		this.$bar.css({
			"left":left,
			"width":width
		});
	}else{
		this.$bar.stop().animate({
			"left":left,
			"width":width
		},300,"easeOutQuint");
	}
}

/* 선택 메뉴아이템 구현하기(03_1) */
BarMenu.prototype.setSelectMenu = function($item,animation){
	/* 선택 메뉴가 변경되는 경우 클래스 외부로 알려주는 기능구현 (4) */
	var $oldItem = this.$selectItem;

	if(this.$selectItem){
		this.$selectItem.removeClass("select");
	}

	this.$selectItem = $item;
	this.$selectItem.addClass("select");

	this.moveBar($item,animation);

	/* 선택 메뉴가 변경되는 경우 클래스 외부로 알려주는 기능구현 (4) */
	this.dispatchSelectEvent($oldItem,$item);

}

BarMenu.prototype.reselctMenu = function(){
	if(this.$selectItem){
		this.moveBar(this.$selectItem);
	}
}

/* 시작 시 메뉴클릭 시 모션 없음 (03_4)*/
BarMenu.prototype.setSelectMenuAt = function(index,animation){
	this.setSelectMenu(this.$menuItems.eq(index),animation)

}

/* 선택 메뉴가 변경되는 경우 클래스 외부로 알려주는 기능구현 (4) */
BarMenu.prototype.dispatchSelectEvent = function($oldItem,$newItem){
	var event = jQuery.Event("select");

	event.$oldItem = $oldItem;
	event.$newItem = $newItem;
	this.$barMenu.trigger(event);
}
