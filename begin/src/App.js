import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import {useCallback, useMemo, useRef, useState} from "react";

export default function App(){
  const[users,setUsers] = useState(
    [
    {
        id:1,
        username:'요한',
        email:'yh@test.com',
        active :false   
    },
    {
        id:2,
        username:'연정',
        email:'yj@test.com',
        active :true
    },
    {
        id:3,
        username:'나경',
        email:'ng@test.com', active :true

    },c
    {
        id:4,
        username:'상원',
        email:'sw@test.com',
        active :true
    }

]
  );

const[inputs, setInputs] = useState({
  username:'',
  email:''
})

const{username,email} = inputs;

const onChange = useCallback((e)=>{
  const{name,value} = e.target;

  setInputs({
    ...inputs,
    [name]:value
  });
},[inputs]);

const netxId = useRef(5);

const onCreate = ()=>{

  const user = {
    id: netxId.current,
    username,
    email  
  }

  //setUsers([...users,user]);
  setUsers(users.concat(user));

  setInputs({
    username:'',
    email:''
  });

  netxId.current += 1;

}

function countActiveUsers(users){
  console.log("active user counting");
  return users.filter(user => user.active).length;
}

const onRemove = (id) =>{
    setUsers(users.filter(user=>user.id !== id));
}

const onToggle = (id) => {
  setUsers(
    users.map(user =>
      user.id  === id ? {...user, active: !user.active} : user
    )
  )
}

//useMemo([deps]) : 성능 최적화

const count = useMemo(()=>countActiveUsers(users),[users]);
  return(
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>

    <div>활성 사용자 수 : {count}</div>
    </>
  );
}