# _this 의 정체

## 1. 일반함수에서의 this

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


함수내 this.data 에 의해 전역변수 data에 20이 할당된다.

그리고 var data 에 의해 지역변수 data에 50이라는 값이 담긴다. 

그리고 data =100; 에 의해 지역변수 data에 100이라는 값이 담기게 된다.

console.log("1. data = " + data); 에서의 data는 함수 내부의 지역변수를 data로 찾아 100이 된다.

console.log("2. this.data = " + this.data); 에서의 this.data은 함수를 호출한 window 객체의 data(전역변수)를 찾아 20 이 된다.

console.log("3. window.data = " + window.data); 에서의 window.data은 전역변수 data를 찾아 20 된다.



## 2. 중첩함수에서의 this

```javascript
   var data = 10;
   function outer() {
	//중첩함수
	function inner(){
        this.data = 20;
        data = 30;

        console.log("1. data = " + data); // 30
        console.log("2. this.data = " + this.data); // 30
        console.log("3. window.data = " + window.data); // 30
        }
       inner();
   }
   outer();
```

위 예제에서 inner(); 함수는 outer(); 에 만들어져 있기 때문에 outer(); 내부에서만 사용할 수 있는 전형적인 중첩함수이다.

일반 중첩 함수에서 this 역시 window 가 된다. 이에 따라 this data는 전역변수 data에 할당되어

20이 저장된다.

data= 30; 의 경루 먼저 지역변수 내에서 data를 찾고 없으면 inner(); 함수를 호출한 outer의 지역변수에서 data를 찾고 없으면 outer();를 호출한 영역에서 찾기 때문에 결론적으로 전역변수 data가 된다.

그래서 결과값은 전역변수인 dat에 30이 저장된다.



## 3. 이벤트에서 this
```javascript
var data = 10;
$(documnet).ready(function(){
	//이벤트 리스너 등록
    $($myButton).click(function(){
       this.data = 20;
        data = 30;
        
       	console.log("1. data = " + data); // 30
        console.log("2. this.data = " + this.data); // 20
        console.log("3. window.data = " + window.data); // 30
    });
});
```

*결과

1. data = 30

2. this.data = 20

3. window.data = 30


이벤트 리스너에서 this는 이벤트를 발생시킨 객체가 된다. 그렇기 때문에 this는 #myButton이 된다.

이에따라 #myButton 객체에 data라는 프로퍼티를 동적으로 추가 하는 구문이 된다.



## 4. 메서드에서 this

```javascript
var num = 1;
function MyClass() {
	this.num = 2;
}
MyClass.prototype.method1 = function() {
	this.num = 3;
	num = 4;

	console.log(num);
	console.log(this.num);
	console.log(window.num);
}

var my1 = new MyClass();
my1.method1();
```

*결과

1. num = 4
2. this.num = 3
3. window.num = 4

MyClass.prototype.method1 의 num은 method1이라는 함수안의 변수처럼 보인다, 다만 앞에 예약어인 var 가 없기 때문에  지역변수 num을 찾다가 없으니까 window 전역객체의 변수 num에 4라는 값이 할당되게 된다.

console.log(this.num); 은 method1을 호출한 객체인  my1의 속성(property)로써 3이라는 값이 할당받게 된다.




## 5. 메서드 내부의 중첩 함수에서 this
