import React, { useState } from "react";
import { sculptureList } from "./Data2";

export default function SculpGallery() {
    const [index, setIndex] = useState(0);
    const[showMore, setShowMore] = useState(false);

    function handleClick() {
        if(index < sculptureList.length - 1){
        setIndex(index+ 1);
        }
    }

    function handleShowMoreClick(){
        setShowMore(!showMore); 
       }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                {sculpture.name}
                {sculpture.artist}
            </h2>
            <h3>({index + 1} of {sculptureList.length})</h3>

            <button onClick={handleShowMoreClick}>
                showDetails
            </button>
            <img src={sculpture.url} alt={sculpture.alt} />
            <div>
            {showMore && <p>{sculpture.description}</p>}
            </div>
  
        </>
    );
}
