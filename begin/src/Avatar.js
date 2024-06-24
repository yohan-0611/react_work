import { getImgURL2 } from "./utility/util";

//리액트 람다에선 콘스트 옆에 익스포트 디폴트를 선언할 수 없음
const Avatar =({person,size}) =>{
    return(
        <img
          className="avatar"
          src={getImgURL2(person)}
          alt={person.name}
          width={size}
          height={size}
        />
      );
}
export default Avatar;