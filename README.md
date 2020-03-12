# my-vanilla-components

## 구조

- store : 상태를 보관하고 변경 발생 시 컴포넌트에 알리는 역할
- component : 뷰레이어를 담당하는 역할. event dispatch

## life-cycle

### onMount

- mount > init > initialRender > cacheElements

### onEvent

- event > dispatch > reducer > render
