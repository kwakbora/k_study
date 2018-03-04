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

## 4. 메서드에서 this

## 5. 메서드 내부의 중첩 함수에서 this
