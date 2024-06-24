//todo 관련 CRUD 의 비동기 통신하는 api 정의..

import axios from "axios";

//접근하려는 서버의 도메인은 고정이니깐, 변수로 선언함
export const API_SERVER_HOST = "http://localhost";

//접속 URI Path 선언
const prefix = `${API_SERVER_HOST}/api/todo`;

//하나의 글을 가져오는 함수 정의
export const getOne = async(tno) =>{
    //async await : promise 의 다음 단계의 자바스크립트 API
    //기존 promise 는 객체를 생성하고 리턴받는 형식을 취했는데, 
    //이 문법은 async 를 선언하고 그 다음에 데이터를 요청하는 함수를 await 을 이용해서 처리하도록 함
    //이후에는 then() or catch() 를 이용할수도 있음.
    //꼭 기억~~~~ await 비동기처리 함수는 반드시 async 내에서만 호출 가능함.
    //catch() 는 모두 예외이니, 예외 핸들링 없이 그냥 처리함.
    //아래 코드에서는 res 는 서버의 결과 정보를 받는 변수..
    const res = await axios.get(`${prefix}/${tno}`);
        
    return res.data;
}
export const getList = async(pageParam) => {
    const{page,size}  = pageParam;

    const res = await axios.get(`${prefix}/list`,{params:{page:page,size:size}});

    return res.data;
}

//신규 TODO 등록 모듈 작성함
//axious 는 기본적으로 전송데이터를 json 으로 생성해서 보냄
//따라서 json 작업할 필요없음
export const postAdd = async(todoObj) =>{
    const res = await axios.post(`${prefix}/`,todoObj);
    return res.data;
}

export const putOne = async(todoObj) =>{
    const res = await axios.put(`${prefix}/${todoObj.tno}`,todoObj);
    return res.data;
}
