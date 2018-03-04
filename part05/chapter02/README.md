1. 일반함수에서의 this

예제1)

 ```javascript
   var data = 10;
   function outer() {
   	this.data = 20;
   	data = 30;

   	console.log("1. data = " + data); // 30
   	console.log("2. this.data = " + this.data); // 30
   	console.log("3. window.data = " + window.data); // 30
   }

   outer();
 ```

 *결과

  1. data = 30
  2. this.data = 30
    3. window.data = 30



일반 함수에서의 this는 window 객체를 가르키고 있다.

함수 내 this.data = 20; 은 전역변수 data에 20을 할당해 준다.

그리고 data = 30; 은 지역변수 num을 일단 찾고 없으면 전역으로 올라가 전역변수 data를 찾는다.

그 전역변수 data에 30을 다시 할당한다. 

그래서 결과 값이 30이라는 값이 출력되는 것이다.



예제2)

```javascript
var data = 10;
function outer() {
	this.data = 20;
	var data = 50;
	data = 100;

	console.log("1. data = " + data); // 100
	console.log("2. this.data = " + this.data); // 20
	console.log("3. window.data = " + window.data); // 20
}

outer();
```

*결과

1. data = 100

2. this.data = 20

3. window.data = 20

   ​


1. 중첩함수에서의 this
2. 이벤트에서 this
3. 메서드에서 this
4. 메서드 내부의 중첩 함수에서 this
