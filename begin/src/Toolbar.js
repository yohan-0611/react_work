import AlertButton from "./AlertButton";
import PlayButton from "./PlayButton";
import UploadButton from "./UploadButton";

export default function Toolbar(){
    return(
        <div>
            {/* <AlertButton msg="동영상 업로드 하기">
                이건 첫번째 버튼
            </AlertButton>

            <AlertButton msg="동영상 다운로드 하기"> 
                이건 두번째 버튼
            </AlertButton> */}
              <PlayButton movieName = "고요한천재"/>
              <UploadButton/>

              <div color = "orange" onClick={()=>{
                alert("툴바 클릭함");
              }}>
              <button onClick={()=>{
                alert('버튼1 클릭')
              }}>버튼1 </button>
               <button onClick={(evt)=>{
                evt.stopPropagation();
                alert('버튼2 클릭')
              }}>버튼2 </button>
                 </div>
        </div>
    );
}