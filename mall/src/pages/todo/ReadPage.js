import { useCallback } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import ReadCompenent from "./ReadComponents";

const ReadPage = ()=>{
    //글번호 파라미터 처리 useParams()를 사용함
    const {tno} = useParams();

    return(
        <div className="text-2xl w-full bg-white mt-6 font-extrabold">
            Todo Read Page Component. {tno}
            <ReadCompenent tno={tno}/>
         
        </div>
    );
}
export default ReadPage;