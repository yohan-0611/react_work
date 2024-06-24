import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const getNum = (param, defaultValue) =>{
    if(!param){
        return defaultValue;
    }
    return parseInt(param);
}

const useCustomMove = () => {
    const[queryParams] = useSearchParams();
    const navigate = useNavigate();

    const page = getNum(queryParams.get('page'),1);
    const size = getNum(queryParams.get('size'),10);

    const queryDefault = createSearchParams({page,size}).toString();

    const[refresh, setRefresh] = useState(false);

    const moveToList = (pageParam) =>{      
        let queryStr = "";

        if(pageParam){ 
            const pageNum = getNum(pageParam.page, page);
            const sizeNum = getNum(pageParam.size, size);

            queryStr = createSearchParams({page:pageNum, size:sizeNum}).toString();
        }else{
            queryStr = queryDefault;
        }
        setRefresh(!refresh);

        navigate(
            {
                pathname:'../list',
                search:queryStr
            }
        )
    }//end of moveList

    const moveToModify = (tno) =>{
        console.log(queryDefault)

        navigate({
            pathname:`../modify/${tno}`,
            search:queryDefault
        })
    }

    const moveToRead = (tno) =>{
        console.log(queryDefault)

        navigate({
            pathname:`../read/${tno}`,
            search:queryDefault
        })
    }



    return{moveToList,page,size,moveToRead,moveToModify,refresh}

}
export default useCustomMove;