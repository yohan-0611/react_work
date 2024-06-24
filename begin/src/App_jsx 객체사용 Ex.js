//Jsx 에서 데이터 표현하는 방법을 알아봅니다.
//Jsx 내부에는 일반문자열부터, 변수, 객체, 이벤트 등 자바스크립트에서 사용되는 모든것을 사용할수 있습니다.
//이때, 사용되는 특정 구문식이 있는데, {} 입니다. 이 내부에 변수나, 객체, 스타일 등 모든것을 넣어서 사용할 수 있습니다.
//단, "{}" 같은 형태로 사용하게 되면, 전체를 문자열값으로 인식하니 주의 하세요.
export default function Avatar(){
  const avatar = "https://i.imgur.com/MK3eW3As.jpg";
  const desc = "Katherine Johnson";

  return(
    <><img
      src = {avatar}
      alt= {desc}
      className
       = "avatar"
          />
          <TodoList/>
          </>

  );
}

function formatDate(){
  return new Intl.DateTimeFormat(
    'ko-KR'

  ).format();
}

const person = {
  name : 'Yohan',
  theme : {
    backgroundColor:'cyan',
    color: 'green'
  }
}

function TodoList(){
  const name = "요한";
  return( 
    <div style={person.theme}>
    <h1> {person.name}'s {formatDate()} Todo list</h1>
    <ul>
      <li>아침먹기</li>
      <li>점심먹기</li>
      <li>저녁먹기</li>
    </ul>
    </div>
  );
}
