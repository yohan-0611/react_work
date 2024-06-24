import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = ()=>{
    return(
        <BasicLayout>
        <div className="text-3xl">
            <div><Link to={"/about"}>About</Link></div>
            <div>Main Page</div>
            <div><Link to={"/todo"}>Todo</Link></div>
        </div>
        </BasicLayout>
    );
}
export default MainPage;