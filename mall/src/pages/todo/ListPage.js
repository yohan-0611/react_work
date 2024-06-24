import { useSearchParams } from "react-router-dom";
import ListComponent from "./ListComponent";

const ListPage = () =>{
    //리스트페이지가 불려질 때는 다음처럼 이뤄질거임
    //파라미터가 없을 시엔 제일 최신글, page=1&size=10(페이지목록 index, 이걸 쿼리스링이라 함~)
    //이렇게 queryString 을 파싱하는 api useSearchParame();

    const [queryParams] = useSearchParams();

    const page = queryParams.get('page')?parseInt(queryParams.get('page')):1;
    const size = queryParams.get('size')?parseInt(queryParams.get('size')):10;
    return(
        
        <div className="p-4 w-full bg-white">

            <div className="text-3xl font-extrabold">
                Todo List Page Compnent {page}...{size}
            </div>
            <ListComponent/>
        </div>
    );
}
export default ListPage;