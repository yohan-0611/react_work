import Button from "./Button"

export default function UploadButton(){
    return(
    <Button onMovieClick={() => alert('동영상 업로드 시작')}>
        Upload Moive
    </Button>
    )
}