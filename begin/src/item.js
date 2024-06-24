export default function Item({name,isPacked}){

   
   // return<li className="item">{isPacked ? <del>({name + '✔'})</del> : (name)}</li>
    return(
        <li className = 'item'>{name}{isPacked && '✔'}</li>

    );

}