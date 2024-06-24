import { useState } from "react";

export default function UseArrayList(){

    let nextId = 0;
    const[name, setName] = useState('');
    const[artists,setArtists] = useState([]);

    return (
        <>
          <h1>Inspiring sculptors:</h1>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button onClick={() => {
            setName('');
            // artists.push({
            //   id: nextId++,
            //   name: name,
            // });
            setArtists([
                ...artists,
                {id:nextId++,name : name}

            ]);
          }}>Add</button>
          <ul>
            {artists.map(artist => (
              <li key={artist.id}>{artist.name}</li>
            ))}
          </ul>
        </>
      );

}