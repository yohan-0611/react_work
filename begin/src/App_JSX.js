function Profile(){
  return(
   <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery(){//프로파일 컴포넌트를 Jsx 형태로 첨부해서 랜더링을  시키는 모듈입니다.
  return(
    <section>
        <h1>위대한 과학자들</h1>
        <Profile/>

    </section>
  );

}