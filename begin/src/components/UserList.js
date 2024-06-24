import { useEffect } from "react";
import User from "./User";

function UserList({users,onRemove,onToggle}){
    
    useEffect(()=>{
        console.log("컴포넌트가 mount 됨");
        return()=>{
            console.log("컴포넌트가 unmount 됨");
        }
    },[])
    return(
            <div>
                {
                users.map(user => (
                    <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
                ))
                }
            </div>
    );
}
export default UserList;