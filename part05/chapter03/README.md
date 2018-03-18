# jQuery  유틸리티 만들기

## 01.유틸리티 소개

jQuery   유틸리티는 문자열의 앞 뒤 공배을 없애주는 jQuery 의 trim() 메서드와 같이 주로 도움을 주는 기능을 합니다. jQuery 유틸리니는 jQuery 인스턴스를 생성하지 않고 다음과 같이 직접 접근해서 사용한다.

jQuery.유틸리티();  

또는

$.유틸리티();



## 02.유틸리티 구조

```javascript
(function($){
    $.유틸리티 = function(){
       //기능 구현
    }
})(jQuery);
jQuery.유틸리티(); //사용하기
```



## 03.사용자 정의 jQuery 유틸리티 만들기

ex) 3자리수마다 콤마를 추가하는 유틸리티 만들기

```javascript
<script>
(function($){
    $.addComma=function(value){
        var data = value+""; //숫자를 문자로 형변환;
        var aryResult = data.split(""); //문자를 배열로 만들기
        var startIndex = aryResult.lenght-3; //배열 요소를 뒤에서 3자리수마다 콤마 추가하기
        for(var i=startIndex;i>0;i-=3){
            aryResult.splice(i,0,",");
        }
        return aryResult.join("");
    } 
})(jQuery);

$(document).reday(function(){
   document.write("123 =>",$addComma("123"),"<br />"); 
   document.write("1234 =>",$addComma("1234"),"<br />"); 
   document.write("12345 =>",$addComma("12345"),"<br />"); 
   document.write("123456 =>",$addComma("123456"),"<br />"); 
   document.write("1234567 =>",$addComma("1234567"),"<br />"); 
    
});
</script>
```

