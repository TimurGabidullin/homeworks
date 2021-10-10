import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {InitStateType, loadingAC, LoadingACType} from "./bll/loadingReducer";
import {Dispatch} from "redux";


function HW10() {

    const loading = useSelector<AppStoreType, InitStateType>(state => state.loading)
    const dispatch=useDispatch<Dispatch<LoadingACType>>()



    const setLoading = () => {

        dispatch(loadingAC())
        setTimeout(() => {
            dispatch(loadingAC())
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>

            homeworks 10
            {/*should work (должно работать)*/}
            {loading.isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
