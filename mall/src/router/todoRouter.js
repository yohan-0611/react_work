import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const ListPage = lazy(()=> import("../pages/todo/ListPage"));
const ReadPage = lazy(()=> import("../pages/todo/ReadPage"));
const AddPage = lazy(()=> import("../pages/todo/AddPage"));
const ModifyPage = lazy(()=> import("../pages/todo/ModifyPage"));
const Loading = <div>Loading....</div>

const todoRouter = ()=>{
    return[
        {
            path:'list',
            element:<Suspense fallback={Loading}><ListPage/></Suspense>
        },
         {
            path:'',
            element:<Navigate replace to={"list"}/>
         },
         {
            path:'read/:tno',
            element:<Suspense fallback={Loading}><ReadPage/></Suspense>
         },
         {
            path:'add',
            element:<Suspense fallback={Loading}><AddPage/></Suspense>
         },
         {
            path:'modify/:tno',
            element:<Suspense fallback={Loading}><ModifyPage/></Suspense>
         }
         
    ];
}
export default todoRouter;