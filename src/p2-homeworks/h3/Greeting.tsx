
import s from './Greeting.module.css'
import {ChangeEvent,KeyboardEvent} from "react";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void// need to fix any

    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    keyPress:(e:KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,keyPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass // need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={keyPress}
                   onBlur={setNameCallback}/>
            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
            <div>{error}</div>
        </div>
    )
}

export default Greeting
