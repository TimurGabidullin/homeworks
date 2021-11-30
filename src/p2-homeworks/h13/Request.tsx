import React, {ChangeEvent, useState} from "react";
import {requestAPI} from "./requestAPI/requstAPI";


function Request() {

    const [state, setState] = useState(true)
    const [res, setRes] = useState('')

    let onChangeBox = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.currentTarget.checked)
    }

    let makeRequest = () => {
        requestAPI.post(state)
            .then(req => {
                console.log(req.data.errorText)
                setRes(req.data.errorText)
            })
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                setRes(error.response.data.errorText)
            })
    }
    return (
        <div>
            <input type={'checkbox'} onChange={onChangeBox} checked={state}/>
            <button onClick={makeRequest}>request</button>
            <div>
                {res}
            </div>
        </div>
    );
}

export default Request;
