/* 01. 오버메뉴 만들기 
* 1_ 생성자 만들기(클래스 만들기)
* 2_ DOM 요소를 초기화하는 코드를 담을 init() 메서드를 만들어 준다.
* 3_ 이벤트를 담을 initEvent() 메서드를 호출한다.
* 4_ 클래스 인스턴스를 생성한다.
*/

/* 02_1. 오버 동작효과 만들기
* 1_ #barMenu1 아이디 값을 넘겨준다.
* 2_ BarMenu 클래스 생성자에 선택자 값을 받을 수 있는 매개변수를 추가해준다.(selector)
* 3_ init() 메서드에도 선택자 값을 받을 수 있는 매개변수를 추가해준다.
* 4_ 프로퍼티를 생성해준다.
* 5_ 바메뉴에서 공통으로 사용할 DOM 요소를 찾아 프로터피에 담아준다.
* 6_ 오버메뉴 아이템 처리를 하는 setOverMenu() 메서드를 만들어준다.
* 7_ setOverMenu() 메서드에서 $item 매개변수 값을 넘겨 기존 오버는 제거하고 새로운 메뉴가 오버되게 한다.
* 8_ initEvent 메서드에 $menuItems 이벤트를 등록한 후 바로 전에 만든 setOverMenu() 메서드를 호출한다.
*/

/* 02_2. 오버 동작효과시 (선택된 메뉴는 오버가 되지 않는다)
* 1_ 스타일을 제거하는 removeOver() 메서드를 추가한다.
* 2_ 메뉴영역 밖으로 나가는 경우 기존 오버 메뉴 아이템이 오버 스타일을 제거한다.
*/

/* 02_3. 바 이동처리
* 1_ moveBar() 메서드를 신규로 추가한다.
* 2_ 메뉴바가 이동할 위치 값을 구해준다.
* 3_ 오버메뉴아이템에 따라 메뉴바를 움직을 수 있게 moveBar() 메서드를 호출한다.
* 4_ 오버메뉴가 over가 제거되는 경우 바를 왼쪽으로 숨기기 위해 moveBar()를 null값을 넣어 호출한다.
*/

/* 03_1. 선택 메뉴아이템 구현하기
* 1_ 메뉴아이템을 저장할 변수를 만든다.
* 2_ setSelectMenu() 메서드를 추가한다.
* 3_ 오버 동작효과 처리를 했던 방식과 동일하게 .select 를 제거 및 추가한다.
* 4_ 선택시 bar 메뉴가 함께 움직이게 동작처리 해준다.
*/

/* 03_2 선택메뉴는 오버가 되지 않고 선택유지
* 1_ setOverMenu() 매개변수에 기존 오버효과 주석처리 한다.
* 2_ 선택 메뉴아이템의 인덱스 값을 구해준다.
* 3_ 오버메뉴가 선택메뉴가 아닐 경우에만 오버가 되게 처리한다.
*/

/* 03_3 재선택 처리
* 1_ reselctMenu() 메서드를 추가하고 메뉴바의 위치와 크기를 선택 메뉴에 맞게 조절되도록 moveBar() 메서드를 호출한다.
* 2_ reselctMenu() 메서드를 마우스 커서가 메뉴 영역 밖으로 나갔을 경우 실행되어야 한다.
*/
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
BarMenu.prototype.moveBar = function($item){
	var left = 0;
	var width = 0;
	if($item!=null){
		left = $item.position(true).left + parseInt($item.css("margin-left"));
		width = $item.outerWidth();
	}

	this.$bar.stop().animate({
		"left":left,
		"width":width
	},300,"easeOutQuint");
}

/* 선택 메뉴아이템 구현하기(03_1) */
BarMenu.prototype.setSelectMenu = function($item){
	if(this.$selectItem){
		this.$selectItem.removeClass("select");
	}

	this.$selectItem = $item;
	this.$selectItem.addClass("select");

	this.moveBar($item);

}

BarMenu.prototype.reselctMenu = function(){
	if(this.$selectItem){
		this.moveBar(this.$selectItem);
	}
}