//페이지 인덱스를 가져와서 구성하는 목적임.
//listPage 에서 로드된 페이징 구성 요소를 props 로 받아서 처리함

const PageComponent = ({serverData, movePage}) =>{
    return(
        <div className="m-6 flex justify-center">
            {
                serverData.prev?<div className="m-2 p-2 w-16 text-center  font-bold text-blue-400 "
                onClick={()=>movePage({page:serverData.prevPage})}>
                    Prev
                 </div>:<></>
            }
            {
                serverData.pageNumList.map(pageNum=>(
                    <div key={pageNum}
                    className={ `m-2 p-2 w-12  text-center rounded shadow-md text-white ${serverData.current === pageNum? 'bg-gray-500':'bg-blue-400'}`}
                    onClick={()=>movePage({page:pageNum})}>
                    {pageNum}
                    </div>
               
                )
                )
            }

{
                serverData.next?<div className="m-2 p-2 w-16 text-center  font-bold text-blue-400 "
                onClick={()=>movePage({page:serverData.nextPage})}>
                    Next
                 </div>:<></>
            }
        </div>
    );
}
export default PageComponent;