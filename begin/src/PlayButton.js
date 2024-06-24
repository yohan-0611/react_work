import Button from "./Button";

export default function PlayButton({movieName}){
    function handleClick(){
        alert(movieName+ '이 시작됩니다');
    }

   return(
        <Button onMovieClick={handleClick}>
            "{movieName}"시작   
        </Button>
   );
}