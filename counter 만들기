```html
<!DOCTYPE html>
<html>
  <head>
    <title>카운터 만들기</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h2 id="number">0</h2>
    <div>
      <button id="increase">+1</button>
      <button id="decrease">-1</button>
    </div>

    <script src="src/index.js"></script>
  </body>
</html>

```

```javascript

const numbers = document.getElementById("number");
const button = document.querySelectorAll("button");
const [increase, decrease] = button;

increase.onclick = () => {
  const current = parseInt(numbers.innerText, 10);
  numbers.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(numbers.innerText, 10);
  numbers.innerText = current - 1;
};

```

위에 코드는 ID값을 지정해 주지 않을때 querySelectorAll 로 태그를 찾아서 작업하는 방식이다.

일반적으로 ID 값을 이용할때는 아래와 같다.



```javascript
const numbers = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  const current = parseInt(numbers.innerText, 10);
  numbers.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(numbers.innerText, 10);
  numbers.innerText = current - 1;
};
```

