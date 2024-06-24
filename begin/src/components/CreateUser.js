function CreateUser({username, email, onChange, onCreate}){
    
    return(
        <>
        <input
            name="username"
            placeholder="계정명"
            onChange={onChange}
            value={username}
        />
        <input
            name="email"
            placeholder="이메일"
            onChange={onChange}
            value={email}
        />
        <button onClick={onCreate}>신규등록</button>
        </>
    );
    
}
export default CreateUser;