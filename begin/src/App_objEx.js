//props: 리액트에서 부모와 자식 컴포넌트간의 데이터를 전달하는 전달책.
//단, 오직 부모가 자식에게만 전달하는 객체임. 자식은 부모에게 props를 사용할 수 없음.
//꼭 기억!! props의 data 타입에는 스크립트의 모든것들이 허용됨.
//객체, function 객체, 배열, json, 일반 p type 등..
//props 는 only read만 할 수 있음. 절대 수정 불가함. 만약 수정이 필요하다면, state(나중에 배움)을 이용해서
//상태를 변경하는 작업으로 사용되어야 함.
//props는 자바의 생성자라고 생각하면 됨. 하지만 다른 점은 자바에서 생성자를 지정할떈 파라미터를 지정 후 this.로 호충하지만
//프롭스는 부모에서 먼저 선언하고 자식한테 파람값을 줌
import Profile from "./Profile";


function App(){
  return(
    <Profile />
  );
}
export default App;