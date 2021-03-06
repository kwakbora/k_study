[https://kwakbora.github.io/k_study/part05/chapter03/bar_menu/index.html]: 



### barMenu 제작 

#### 01.오버메뉴 만들기 

1_ 생성자 만들기(클래스 만들기)<br />
2_ DOM 요소를 초기화하는 코드를 담을 init() 메서드를 만들어 준다.<br />
3_ 이벤트를 담을 initEvent() 메서드를 호출한다.<br />
4_ 클래스 인스턴스를 생성한다.<br /><br />

#### 02_1. 오버 동작효과 만들기

1_ #barMenu1 아이디 값을 넘겨준다.<br />
2_ BarMenu 클래스 생성자에 선택자 값을 받을 수 있는 매개변수를 추가해준다.(selector)<br />
3_ init() 메서드에도 선택자 값을 받을 수 있는 매개변수를 추가해준다.<br />
4_ 프로퍼티를 생성해준다.<br />
5_ 바메뉴에서 공통으로 사용할 DOM 요소를 찾아 프로터피에 담아준다.<br />
6_ 오버메뉴 아이템 처리를 하는 setOverMenu() 메서드를 만들어준다.<br />
7_ setOverMenu() 메서드에서 $item 매개변수 값을 넘겨 기존 오버는 제거하고 새로운 메뉴가 오버되게 한다.<br />
8_ initEvent 메서드에 $menuItems 이벤트를 등록한 후 바로 전에 만든 setOverMenu() 메서드를 호출한다.<br /><br />

#### 02_2. 오버 동작효과시 (선택된 메뉴는 오버가 되지 않는다)

1_ 스타일을 제거하는 removeOver() 메서드를 추가한다.<br />
2_ 메뉴영역 밖으로 나가는 경우 기존 오버 메뉴 아이템이 오버 스타일을 제거한다.<br /><br />

#### 02_3. 바 이동처리

1_ moveBar() 메서드를 신규로 추가한다.<br />
2_ 메뉴바가 이동할 위치 값을 구해준다.<br />
3_ 오버메뉴아이템에 따라 메뉴바를 움직을 수 있게 moveBar() 메서드를 호출한다.<br />
4_ 오버메뉴가 over가 제거되는 경우 바를 왼쪽으로 숨기기 위해 moveBar()를 null값을 넣어 호출한다.<br /><br />

#### 03_1. 선택 메뉴아이템 구현하기

1_ 메뉴아이템을 저장할 변수를 만든다.<br />
2_ setSelectMenu() 메서드를 추가한다.<br />
3_ 오버 동작효과 처리를 했던 방식과 동일하게 .select 를 제거 및 추가한다.<br />
4_ 선택시 bar 메뉴가 함께 움직이게 동작처리 해준다.<br /><br />

#### 03_2 선택메뉴는 오버가 되지 않고 선택유지

1_ setOverMenu() 매개변수에 기존 오버효과 주석처리 한다.<br />
2_ 선택 메뉴아이템의 인덱스 값을 구해준다.<br />
3_ 오버메뉴가 선택메뉴가 아닐 경우에만 오버가 되게 처리한다.<br /><br />

#### 03_3 재선택 처리

1_ reselctMenu() 메서드를 추가하고 메뉴바의 위치와 크기를 선택 메뉴에 맞게 조절되도록 moveBar() 메서드를 호출한다.<br />
2_ reselctMenu() 메서드를 마우스 커서가 메뉴 영역 밖으로 나갔을 경우 실행되어야 한다.<br /><br />

#### 03_4 시작 시 n번째 메뉴아이템 선택 (시작 시 모션없음)

1_  moveBar() 메서드에 기존 animate 주석 및 삭제<br />
2_ 매개변수 animation 을 추가한다.<br />
3_  animation 값이 false인 경우 애니메이션 없이 바의 위치와 크기를 조절해 준다.<br />
4_ setSelectMenuAt() 메서드를 추가해  index에 해당하는 메뉴를 선택할 수 있는 기능을 구현한다.<br /><br />

#### 04 선택이벤트 발생(선택 메뉴가 변경되는 경우 클래스 외부로 알려주는 기능구현)

1_ dispatchSelectEvent() 메서드를 추가해준다.<br />
2_ Event() 유틸리티를 이용해 select 라는 사용자 정의 이벤트 객체를 생성해 준다.<br />
3_이전선태과 신규선택메뉴를 매개변수로 담아준다.<br />
4_ trigger() 메서드를 이용해 이벤트를 발생해 준다.<br /><br />

#### 05 캡슐화하기

자바스크립트는 문법적으로 캡슐화를 지원하지 않지만 외부에서 접근하지 못한다는 의미로 프로퍼티와 메서드 앞에 언더바(_) 를 붙여 사용한다.

접근 가능(public) / 프로퍼티:  $barMenu

접근 불가능(private) / 프로퍼티:  <br />
_$menuBody<br />
_$menuItems<br />
_$overItem<br />
_$bar<br />

접근 가능(public) / 메서드: setSelectMenu / setSelectMenuAt<br />

접근 불가능(private) / 메서드: <br />
_init<br />
_initEvent<br />
_setOverMenu<br />
_removeOver<br />
_reselctMenu<br />
_moveBar<br />
_reselctMenu<br />
_dispatchSelectEvent<br />

