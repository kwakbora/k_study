###  함수단위 코딩예제 리터럴 방식으로 클래스를 만들어보자!!
	
	// 탭메뉴 관련 변수
	var $tabMenu =null;
	var $menuItems=null;
	var $selectMenuItem=null;

	$(document).ready(function(){
		// 탭메뉴 요소 초기화
		init();
		// 탭메뉴 요소에 이벤트 등록
		initEvent();
	});

	// 요소 초기화
	function init(){
		$tabMenu = $("#tabMenu1");
		$menuItems = $tabMenu.find("li");
	}

	// 이벤트 등록
	function initEvent(){
		$menuItems.on("click",function(){
			setSelectItem($(this));
		});
	}

	// $menuItem에 해당하는 메뉴 아이템 선택하기
	function setSelectItem($menuItem){
		// 기존 선택메뉴 아이템을 비활성화 처리 하기
		if($selectMenuItem){
			$selectMenuItem.removeClass("select");
		}

		// 신규 아이템 활성화 처리 하기
		$selectMenuItem = $menuItem;
		$selectMenuItem.addClass("select");
	}

</script>

------

###  리터럴방식 적용 예

```javascript
<script>
$(document).ready(function(){
   tabMenu1.init();
   tabMenu1.initEvent();
});
   //클래스 생성
var tabMenu1 = {
   $tabMenu : null,  //프로퍼티 생성 - (,) 로 구분 / 내부는 (:) 으로 구분
   $menuItems : null,
   $setmenu : null,

   // 함수를 메서드로 만든다.
   //요소 초기화
   init:function(){
      this.$tabMenu = $("#tabMenu1");
      this.$menuItems = this.$tabMenu.find("li");
   },
   initEvent:function(){
      var objThis = this;
      this.$menuItems.on("click",function(){
         objThis.setSelectItem($(this));
      });
   },
   setSelectItem:function($menuItems){
      if(this.$setmenu){
         this.$setmenu.removeClass('select');
      }

      this.$setmenu = $menuItems;
      this.$setmenu.addClass('select');
   },


}
var tabMenu1 = {
   $tabMenu : null,  //프로퍼티 생성 - (,) 로 구분 / 내부는 (:) 으로 구분
   $menuItems : null,
   $setmenu : null,

   // 함수를 메서드로 만든다.
   //요소 초기화
   init:function(){
      this.$tabMenu = $("#tabMenu1");
      this.$menuItems = this.$tabMenu.find("li");
   },
   initEvent:function(){
      var objThis = this;
      this.$menuItems.on("click",function(){
         objThis.setSelectItem($(this));
      });
   },
   setSelectItem:function($menuItems){
      if(this.$setmenu){
         this.$setmenu.removeClass('select');
      }

      this.$setmenu = $menuItems;
      this.$setmenu.addClass('select');
   },


}
</script>
```

