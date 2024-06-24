//이건 주석입니다. 먼저 알아볼건, 모둘 import 부터 알아볼게요.
//Es5 부터, 스크립트도 Module 이라는 개념을 도입해서 내보내기(Export), 가져오기(Import)  가 가능합니다.
//먼저 React lib 에서 핵심 Module 과 부가 Module 에 대한 내용부터 간단히 볼게요.
//import module,{module,module} from 'moduleName'; 문법입니다.

import React, { Component } from "react";//React 는 모든 React 모듈의 최상위 이고, {} 내부의 모듈은 그 하위의 named 모듈을 뜻함
//필요에 따라서 하위 모듈은 "," 를 이용해서 계속 import 시킬수 있음.

//꼭 기억할것 !!!!!!! React 에서는 보여지는 모든 구성요소를 Component Type 이라고 함. 즉 보여지는 구성요서는 반드시 Component 의
//아래는 자바스크립트의 class 를 이용한 컴포넌트 구성입니다.
//리액트에서는 컴포넌트를 구성하는 방법은 크게 function,class 두개로 나뉘는데, react 18.x 의 버전 이후부터는 react 의 핵심 컴포넌트중의
//Hooks 를 클래스에서 지원하지 않기 떄문에, 현재는 대부분이 function 형태로 컴포넌트를 구성함.

class MyCompo extends Component{
    render(){
        return(
            <h2>이건 클래스로 구성된 컴포넌트의 내용입니다.</h2>
        )
    };
}

    export function DoSome() {
        return(
            <h3>이건 doSome 컴퍼의 내용임.</h3>
        );
        
    }
export default MyCompo;