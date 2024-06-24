import { useEffect, useState } from "react"
import { getOne } from "../../api/todoAPi";
import useCustomMove from "../../hooks/useCustomMove";

const initState={
    tno:0,
    title:'',
    writer:'',
    dueDate:null,
    complete:false
}

const ReadCompenent = ({tno})=>{
    const[todoDTO, setTodoDTO] = useState(initState);

   const {moveToList} = useCustomMove();
   const {moveToModify} = useCustomMove();

    useEffect(()=>{
        getOne(tno).then(data =>{
            console.log(data);
            setTodoDTO(data);
        })
    },[initState])
    return(
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {makeDiv('Tno',todoDTO.tno)}
            {makeDiv('wirter',todoDTO.writer)}
            {makeDiv('Title',todoDTO.title)}
            {makeDiv('Due Date',todoDTO.dueDate)}
            {makeDiv('complete',todoDTO.complete)}

            <div className="flex justiy-end p-4">
                <button
                type="button"
                className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500 "
                onClick={()=>moveToList() }
                >     
                    List
                </button>
                <button
                type="button"
                className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500 "
                onClick={()=>moveToModify(tno)}
                >     
                    Modify
                </button>

            </div>

        </div>
    );
};

const makeDiv = (title,value) =>       
    <div className="flex justify-center">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <div className="w-1/5 p-6 text-right font-bold">{title}</div>
        <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
        {value}        
        </div>
      </div>
    </div>

export default ReadCompenent;