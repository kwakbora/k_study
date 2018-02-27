# 클래스를 이해하기 위해 반드시 알고 있어야 하는 내용

## 1. 함수를 사용하는 이유를 알고 있나요?<Br/>
① 프로그램 코드(code)의 불필요한 반복을 피하기 위한 수단을 제공<Br/>
② 프로그램을 보면 체계적이고 간결하게 작성하기 위한 수단을 제공<Br/>
③ 함수와 함수를 서로 분리 시킴으로써 모든 변수의 사용을 함수 내에서 독립적으로 선언하여 사용할 수 있게 합니다. 이렇게 함으로써 프로그래머가 동일한 변수 명을 다른 함수에서 사용할 수 있도록 합니다.<Br/>
④ 대형프로그램을 여러 개의 부분으로 나누어서 프로그램하고 컴파일을 가능하게 합니다.<Br/><Br/>

## 2. 지역변수와 전역변수를 이해하고 있나요?
```javascript
var globalV ="전역변수"

window.onload=function(){
  global2 ="전역변수"
}

function func1(){
  var local1 = "지역변수"
}
```


**전역변수(Global Variable)**
1. 값의 유지<br />
2. 어디에서든 접근 가능<br />
3. main 함수 실행 전에, 프로그램이 실행되자 마자 메모리에 할당됨.<br />
4. 프로그램이 끝나는 순간 메모리에서 해제됨.<br />
5. 메모리의 Data 영역에 적재됨.<br /><br />

   2번의 이유로 인해서 변수의 스코프가 더럽혀진다.<br />
   더럽혀진다는 의미는 변수 이름의 충돌 가능성이 존재하고,<br />
   그로 인해 변수 이름 짓기에 큰 시간을 할애해야 하며,<br />
   변수의 이름이 길어지거나 이상해지는 경우도 존재한다.<br />
   어디서나 접근 가능하기 때문에 실수로 변수의 값이 바뀔 가능성이 존재한다.<br />
   뭐 그렇다고 해서 꼭 안 좋은 것만은 아니기 때문에 적절히 활용하면 된다.<br /><br />

**지역 변수(Local Variable)**
1. 매번 새로운 값 생성, 값의 유지가 안 됨.<br />
2. 지정된 블록 스코프(제어문, 함수 등등)에서만 접근 가능<br />
3. 함수가 실행되는 순간마다 메모리에 할당됨.<br />
4. 함수가 종료되는 순간마다 메모리에서 해제됨.<br />
5. 메모리의 Stack 영역에 적재됨.<br /><br />
   값이 유지되지 않기 때문에 함수를 실행할 때마다 매번 똑같은 값을 써야할 때 쓴다.<br />
   스코프 내에서만 접근 가능하기 때문에 유지보수에 용이하다.<br />
   가능하면 스코프의 범위는 좁은 게 유지보수하기 편하다고 들었다.<br /><br />
   
## 3. 매개변수가 있는 함수를 만들 수 있나요?
```javascript
def greetings(name);
	print("Hello", name)

greetings("john") // 출력결과 : Hello john
greetings("kim") // 출력결과 : Hello kim

```
함수의 매개변수는 딱히 개수 제한이 없습니다. 그러므로 프로그래머가 코드를 작성하면서 필요한 만큼 콤마로 구분하여 사용하면 됩니다.<br />


## 4. 리턴값이 있는 함수를 만들 수 있나요?
```javascript
def function(x):
  a = 3
  b = 5
  y = a * x + b
  return y                 // y 값을 돌려준다
...
c = function(10)
c
35
```

이렇게 만들어진 함수에 10이라는 인자를 넣어주면 함수는 35라는 값을 돌려준다. <br />따라서, 그 값을 다시 c라는 변수에 넣을 수도 있다.<br />

만약, 함수를 정의할 때 return y 대신에 print(y)라고 썼다면 어떻게 될까요?



```javascript
def function2(x):
  a = 3
  b = 5
  y = a * x + b

print(y)                     // y 값을 출력한다
...
d = function2(10)
35
d
```

d = function2(10) 이라고 하면 함수가 실행되면서 35라는 값을 출력하지만 d에게 돌려주지는 못한다.<br />그래서 d를 찍어보면 아무 값도 나오지 않는다.

## 5. 중첩 함수를 이해하고 있나요?
중첩해서 사용할 때 안쪽 함수는 바깥쪽 함수 영역 내에서만 동작하며,<br />
바깥 함수와 인자에 접근할 수 있다. 하지만 바깥 함수는 안쪽 함수 변수에 접근할 수 없다.<br />
호출 프로그램 또한 안쪽 함수에 접근할 수 없다.<br />

* 자바에서의 중첩 : 안에서 먼저 클래스가 생성되어야만 바깥쪽 클래스가 생성된다.<br />
  자바스크립트에서의 중첩 : 바깥쪽이 먼저 생성된다. (순서 변경 불가)

<br />

```javascript
 // 바깥쪽 함수
   function outerFunc(base) {
     var punc = "!";

     // 안쪽 함수
     function returnString(ext) {
        return base + ext + punc;
     }

     return returnString;
   }
```


## 6. 콜백 함수를 이해하고 있나요?
**콜백 함수 :** 사용자에 의해 호출되는 것이 아닌 특정 함수에서 호출돼 필요시 코드 내에서 사용되는 함수.<br />
일회성 함수의 경우 콜백 함수를 익명함수로 지정하여 사용 시 코드를 간결하게 할 수 있다.

> ##### 이름이나 익명의 함수를 사용하라!

함수를 정의해 해당 함수의 이름을 파라미터로 넘기는 방식입니다.<br />

```javascript
var allUserData = []; // 콘솔에 결과를 찍는 함수 

function logStuff (userData) { 
  if ( typeof userData === "string") { 
    console.log(userData); 
  } else if ( typeof userData === "object") { 
    for (var item in userData) { 
      console.log(item + ": " + userData[item]); 
    } 
  } 
} // 두 개의 인자를 받아서 마지막에 콜백함수를 호출한다. 

function getInput (options, callback) {
  allUserData.push (options);
  callback (options);
} 
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff); 
// name: Rich 
// speciality: JavaScript

// getInput 함수를 호출할 때 , 우리는 logStuf이라는 함수의 이름을 인자로 넘긴다. 
// 그래서 logStuff 은 콜백함수가 되어 getInput이라는 함수의 내부에서 동작을 할것이다. 

```



> **콜백함수로 파라미터 전달(Pass Parameters to Callback Functions)**

콜백함수가 실행이 될 때는 그냥 일반 함수와 동일하게 동작을 합니다. <br />그래서 우리는 콜백함수에 파라미터를 전달할 수가 있습니다. 우리는 파라미터로 콜백함수를 감싸고있는 함수 내부의 어떠한 프로퍼티라도 파라미터로 전달할 수가 있습니다.  <br />아래의 예제를 실행하면 options 파라미터를 콜백함수에 전달할수 있습니다. 전역변수와 지역변수를 파라미터로 전달할 수 있습니다.

```javascript
var allUserData = []; // 콘솔에 결과를 찍는 함수 

function logStuff (userData) { 
  if ( typeof userData === "string") { 
    console.log(userData); 
  } else if ( typeof userData === "object") { 
    for (var item in userData) { 
      console.log(item + ": " + userData[item]); 
    } 
  } 
} // 두 개의 인자를 받아서 마지막에 콜백함수를 호출한다. 

//전역변수 
var generalLastName = "Clinton"; 

function getInput (options, callback) { 
  allUserData.push (options); 
  // 전역변수를 콜백함수의 인자로 전달한다. 
  callback (generalLastName, options); 
}
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
//Clinton
```



> **콜백함수가 실행 되기 전에 함수임을 명확하게 하기(Make Sure Callback is a Function Before Executing It)**

콜백함수가 인자로 전달되어 함수의 내부에서 실행이 될 때 전달받은 인자가 함수인지를 명확하게 정의 하고 실행하는 것이 좋은 습관이다. 위의 함수를 고쳐보겠습니다.

```javascript
function getInput(options, callback) { 
  allUserData.push(options); 
  // callback 이 함수 인지를 확인합니다. 
  if (typeof callback === "function") { 
    // callback 이 함수인지를 확인 했으니까 함수호출합니다. 
    callback(options); 
  } 
}
```

만약에 이러한 확인 작업이 없다면 callback파라메터를 넘기지 않거나 혹은 함수가 아닌 값을 넘기게 되는 경우에는 실행중에 에러가 발생하는 문제가 일어납니다.



> **다중 콜백함수(Multiple Callback Functions Allowed)**

우리는 여러 개의 콜백함수를 파라미터를 전달할 수 있습니다. 아래의 코드는 전형적인 jquery의 ajax 함수 들입니다.

```javascript
function successCallback() { 
  // Do stuff before send 
} 
function successCallback() {
  // Do stuff if success message received 
} 
function completeCallback() {
  // Do stuff upon completion 
} 
function errorCallback() {
  // Do stuff if error received 
} 

$.ajax({ 
  url:"http://fiddle.jshell.net/favicon.png", 
  success:successCallback, 
  complete:completeCallback, 
  error:errorCallback 
});
```



## 7. 클로저를 이해하고 있나요?
클로저는 외부함수(포함하고 있는)의 변수에 접근할 수 있는 내부 함수를 일컫습니다. 스코프 체인(scope chain)으로 표현되기도 합니다. 클로저는 세가지 스코프 체인을 가집니다: 클로저 자신에 대한 접근(자신의 블럭내에 정의된 변수), 외부 함수의 변수에 대한 접근, 그리고 전역 변수에 대한 접근. 이렇게 3단계로 구분할 수 있습니다.<br />

내부 함수는 외부 함수의 변수뿐만 아니라 파라미터에도 접근할 수 있습니다. 단, 내부 함수는 외부 함수의 arguments 객체를 호출할 수는 없습니다. (하지만, 외부 함수의 파라미터는 직접 호출할 수 있습니다.)

기본적인 클로저 예제:
```javascript
function showName(firstName, lastName) {
    var nameIntro = "Your name is ";
    // 이 내부 함수는 외부함수의 변수뿐만 아니라 파라미터 까지 사용할 수 있습니다.
    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    return makeFullName();
}
showName("Michael", "Jackson"); // Your name is Michael Jackson
```

클로저는 외부함수가 리턴된 이후에도 외부함수의 변수에 접근할수 있습니다.

```javascript
function celebrityName(firstName) {
    var nameIntro = "This is celebrity is ";
    // 이 내부 함수는 외부함수의 변수와 파라미터에 접근할 수 있습니다.
    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}

var mjName = celebrityName("Michael"); // 여기서 celebrityName 외부함수가 리턴됩니다.
// 외부함수가 위에서 리턴된 후에, 클로저(lastName)가 호출됩니다.
// 아직, 클로저는 외부함수의 변수와 파라미터에 접근 가능합니다.
mjName("Jackson"); // This celebrity is Michael Jackson
```



클로저는 외부 함수의 변수에 대한 참조를 저장합니다.

## 8. 함수를 이용해 간단한 탭메뉴를 만들 수 있나요?


