## 1. 함수 호출에서의 this

```javascript
var userName = "this"

function User(name){
    this.userName = name;
}

User("DDD");
console.log(userName);
```

*결과

userName = "DDD"

User()가 클래스를 의미한다고 하더라도 일반적인 함수 호출이 된다.

즉, User() 함수 내부에 위치하고 있는 this는 window가 된다. 이에 따라 userName은 프로퍼티가 아닌 일반 전역변수인 window.userName이 되며 "test" 값 대신 매개변수로 넘어 온 "DDD" 이 대입된다.



## 2. new 함수 호출에서의 this



```javascript
var userName = "test"

function User(name){
	this.userName = name;
}

var user = new User("DDD");
console.log(userName);
```

*결과

userName = "test"

일반 함수호출이 아닌 User 클래스의 인스턴스 생성이기 때문에 this는 window가 아닌 인스턴스 자기 자신이 된다. 이에 따라 신규 인스턴스에 userName이라는 프로퍼티가 생성되며 전역변수 userName과는 전혀 다른 변수가 된다. 



| 함수이름()              | new 함수이름()                                               |
| ----------------------- | ------------------------------------------------------------ |
| 일반 함수 호출하는 구문 | new 클래스이름()으로 해석<br />특정 클래스의 인스턴스를 생성하는 구문 |
| window 객체             | 인스턴스                                                     |

