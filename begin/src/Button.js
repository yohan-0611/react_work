export default function Button({children, onMovieClick}){

    // function handleClick(){
    //     alert('클릭했군요');
    // }
    return(
        <button onClick={onMovieClick}>
            {children}
        </button>
    );
}