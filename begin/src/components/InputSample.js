import {useRef, useState} from "react";
function InputSample(){


   // const [text, setText] = useState('');

    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    });

    const nameInput = useRef();

    const{name,nickname} = inputs;

    const onChange = (e) => {
       // setText(e.target.value);

        const{name, value} = e.target;

        setInputs({
            ...inputs,
            [name] : value,
        });

    }

    const onReset = () => {
       // setText('');
        setInputs({
            name:'',
            nickname:''
        })
        nameInput.current.focus();
    }

    return(
        <div>
            <input placeholder="이름" name="name" onChange={onChange} value={name} ref={nameInput}/>
            <input placeholder="별명(nickname)" name="nickname" onChange={onChange} value={nickname}/>
                <button onClick={onReset}>초기화</button>
                <div>
                    <b>값 :</b>
                    {name}(닉네임) : {nickname}
                </div>
        </div>
    );
}
export default InputSample;