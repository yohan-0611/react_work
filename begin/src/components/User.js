import { useEffect } from "react";

function User({user,onRemove,onToggle}){

    useEffect(()=>{
        console.log('user 값 설정됨');
        console.log(user);
        return()=>{
            console.log('user 변경전');
            console.log(user);
        }
    },[user]);
    return(
        <div>
                <b onClick={() => onToggle(user.id)}
                    style={{cursor:'pointer',color:user.active?'green':'black'}}>{user.username}</b><span>{user.email}</span>
                <button onClick={() => onRemove(user.id)}>삭제</button>
            </div>
    )
}
export default User;