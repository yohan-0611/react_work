import React from "react";
import{getImgURL2} from "./utility/util"
import{ people } from "./data"

export default function List(){
    const chemists = people.filter((value)=>value.profession == 'chemist')
 
    const lists = chemists.map(person =>
        <li>
            <img
                src = {getImgURL2(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}</b>
                {' ' + person.accomplishment + ' '}

            </p>

        </li>
    );

    return <ul>{lists}</ul>
}