
import React from "react";
import { getImgURL3 } from "./utility/util";

export default function Profile2({name,imageId,profession,awards,discovered}){
    return(
        <section className="profile">
            <h2>{name}</h2>
        <img
          className="profile"
          src={getImgURL3(imageId)}
          alt={name}
          width={70}
          height={70}
        />

        <ul>
            <li><b>Profession: {profession}</b></li>
            <li><b>Awards: {awards.length}</b>
            ({awards.join(',')})</li>
            <li>
           <b> Discovered:</b>   {discovered}


            </li>
        </ul>

        </section>
        );
     }