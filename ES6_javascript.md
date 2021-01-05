#  ES6_javascript study

## 1. 함수

```javascript
function add(a,b){
    return a + b;
};

const sum = add(1,2);
console.log(sum); //결과값 3
```

함수를 만들 때는 `function` 키워드를 사용하며, 함수에서 어떤 값을 받아올지 정해주는데 이를 파라미터(매개변수)라고 부릅니다.

함수 내부에서 `return` 키워드를 사용하여 함수의 결과물을 지정 할 수 있습니다.



## 2. 객체

```javascript
const dog = {
    name : '멍멍이',
    age : '2'
}
console.log(dog.name); //멍멍이
console.log(dog.age); //2

// 키: 원하는 값
```

키에 해당하는 부분은 공백이 없어야합니다. 만약에 공백이 있어야 하는 상황이라면 이를 따옴표로 감싸서 문자열로 넣어주면 됩니다.

```javascript
const sample = {
  'key with space': true
};
```


### _01. 함수에서 객체를 파라미터로 받기

```javascript
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
```



### _02. 객체 비구조화 할당

print 함수를 보시면 파라미터로 받아온 hero 내부의 값을 조회 할 때 마다 `hero.` 를 입력하고 있는데, 객체 비구조화 할당이라는 문법을 사용하면 코드를 더욱 짧고 보기 좋게 작성 할 수 있습니다. 아래 문법은 객체 구조 분해 라고 불리기도 합니다.

```javascript
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

function print(/*hero*/ { alias, name, actor }) { //이렇게 넣을수도 있음
  //const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
```



### _03. 객체 안에 함수 넣기

```javascript
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function() {
    console.log(this.sound);
  }
};
dog.say();

//화살표 함수는 this가 속해 있는 객체로 가르키지 않아 요류가 남!!!!
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: ()==> {
    console.log(this.sound);
  }
};

dog.say();
```

함수가 객체안에 들어가게 되면, `this` 는 자신이 속해있는 객체를 가르키게 됩니다.

함수를 선언 할 때에는 이름이 없어도 됩니다.



## 3. Getter 함수와 Setter 함수

Getter 함수와 Setter 함수를 사용하게 되면 특정 값을 바꾸려고 하거나, 특정 값을 조회하려고 할 때 우리가 원하는 코드를 실행 시킬 수 있습니다.

```javascript
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() { //조회만 하기 때문에 값이 선언할때마다 조회를 반복함
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log('a가 바뀝니다.');
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log('b가 바뀝니다.');
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
```

Setter 함수를 설정하고 나면, `numbers.a = 5` 이렇게 값을 설정했을 때 5 를 함수의 파라미터로 받아오게 됩니다. 위 코드에서는 객체 안에 _a, _b 라는 숫자를 선언해주고, 이 값들을 위한 Getter 와 Setter 함수를 설정해주었습니다.

getter함수만 넣었다면, numbers.sum 이 조회 될 때마다 덧셈이 이루어졌었지만, 이제는 a 혹은 b 값이 바뀔 때마다 sum 값을 연산합니다.



## 4. 배열

### _01. for문

```javascript
const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```

이렇게 하면 names 배열 안에있는 원소들을 하나하나 나열 할 수 있습니다.



퀴즈!

숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.

```javascript
function biggerThanThree(numbers) {
  const array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
      array.push(numbers[i]);
    }
  }
  return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
```



### _02. forEach (배열 내장함수)
