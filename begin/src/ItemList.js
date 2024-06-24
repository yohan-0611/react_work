import Item from "./item";

export default function ItemList(){
    return(
        <>
        <h2>나의 여행준비물</h2>
        <section>
            <ul>
                <li>
                <Item
                    name= '생수'
                    isPacked ={true}
                />
                </li>
                <li>
                <Item
                    name= '돈'
                    isPacked ={true}
                />
                </li>
                <li>
                <Item
                    name= '옷'
                    isPacked ={false}
                />
                </li>

            </ul>
        </section>
        </>
    )
}