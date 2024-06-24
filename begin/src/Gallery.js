import Profile2 from "./Profile2";

export default function Gallary(){
    return(
        <div>
            <h1>Notable Scientists</h1>
            <Profile2
                name = "Maria Skłodowska-Curie"
                imageId = "szV5sdG"
                profession = "physicist and chemist"
                awards = {['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
                discovered = ' polonium (chemical element)'
           />

        </div>
    )
}