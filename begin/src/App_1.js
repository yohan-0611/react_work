import logo from './logo.svg';
import './App.css';
import MyCompo, { DoSome } from "./MyCompo";


function App() {  
  return (
    <div>
      <h1> Hello react!</h1>
      <p>여긴 p 태그의 내용입니다</p>
      <br/>

      <MyCompo />
      <DoSome/>
      </div>
      //외부 컴포넌트를 가져다 사용할떄는 import 를 통해서 jsx 문법으로 사용해야 합니다
      //이게 리액트 입니다.
      //꼭알아야함. 리액트 에서는 일반 HTML 태그와 Jsx 의 컴포넌트 구분을 태그이름으로 구분짓습니다.(이건 속성도 마찬가지)
      //첫문자를 소문자로 시작하면 무조건 일반 html 태그로 파싱을 하고, 첫자가 대문자인 경우엔 무조건 jsx 컴포넌트 문법으로 파싱합니다.
      //때문에 자바에서 배웠듯이, 모든 컴포넌트는 반드시 첫자는 대문자로 시작하는 캐멀 작성법을 반드시 따라야 합니다.
      //jsx 문법은 반드시 열리면 닫혀야 합니다, 즉 모든 태그는 열리면 반드시 닫는 태그인 쌍으로 존재햐야 합니다
      //만약 커플로 닫지 않는경우엔 태그끝에 "/" 를 넣어서 싱그로 닫아여 합니다.
      
    );
}

export default App;
