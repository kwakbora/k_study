# 1.jQuery  유틸리티 만들기

## 01_유틸리티 소개

jQuery   유틸리티는 문자열의 앞 뒤 공배을 없애주는 jQuery 의 trim() 메서드와 같이 주로 도움을 주는 기능을 합니다. jQuery 유틸리니는 jQuery 인스턴스를 생성하지 않고 다음과 같이 직접 접근해서 사용한다.

jQuery.유틸리티();  

또는

$.유틸리티();



## 02_유틸리티 구조

```javascript
(function($){
    $.유틸리티 = function(){
       //기능 구현
    }
})(jQuery);
jQuery.유틸리티(); //사용하기
```



## 03_사용자 정의 jQuery 유틸리티 만들기

ex) 3자리수마다 콤마를 추가하는 유틸리티 만들기

```javascript
(function($){
    $.addComma=function(value){
        var data = value+""; //숫자를 문자로 형변환;
        var aryResult = data.split(""); //문자를 배열로 만들기
        var startIndex = aryResult.length-3; //배열 요소를 뒤에서 3자리수마다 콤마 추가하기
        for(var i=startIndex; i>0; i-=3){
            aryResult.splice(i,0,",");
        }
        return aryResult.join("");
    }
})(jQuery);

$(document).ready(function(){
   document.write("123 =>",$.addComma("123"),"<br />");
   document.write("1234 =>",$.addComma("1234"),"<br />");
   document.write("12345 =>",$.addComma("12345"),"<br />");
   document.write("123456 =>",$.addComma("123456"),"<br />");
   document.write("1234567 =>",$.addComma("1234567"),"<br />");

});
```

<br/><br/>

# 2.jQuery 플러그인 만들기



## 01_jQuery 플러그인 소개

jQuery 기능 중 jQuery 유틸리티를 제외한 모든 기능은 jQuery 플러그인이라고 생각하면 된다.



## 02_jQuery 플러그인 구조

```javascript
(function($){
    $.fn.플러그인이름 = function(속성값){
        this.each(function(index)){
            //기능구현
        }
        return this;
    }
})(jQuery);
```



## 03_jQuery 플러그인 구조 분석



ex) 선택한 노드의 외각선을 빨간색으로 표현하는 플러그인을 만들어보자.



```javascript
//redColor 플러그인 정의
(function($){
	$.fn.redColor = function(){
		this.each(function(index){
			$(this).css("border","4px solid #f00");
		})
		return this;
	}
})(jQuery);

$(document).ready(function(){
	//redColor 플러그인 사용
	$("p").redColor();
});
```



1. $.fn 은 prototype과 동일하다. 즉, jQuery.prototype과 동일하다.
2. each() 메서드의 내부에서 this는 현재 처리하고 있는 자바스크립트 DOM 노드이다. 자바스크립트에는 스타일을 변경할 때 유용하게 사용하는 css() 메서드가 없기 때문에 $(this) 구문을 이용해 jQuery 인스턴스를 생성한 후 css() 메서드를 사용한 것이다.
3. return this 를 선언한 이유는 redColor() 플러그인 호출 후 jQuery 메서드를 체인구조로 호출 할 수 있게 하기 위해서 this를 리턴해줘야 한다.
