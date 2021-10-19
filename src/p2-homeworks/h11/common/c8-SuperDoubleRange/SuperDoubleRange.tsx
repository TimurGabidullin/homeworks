import React, {ChangeEvent} from 'react'
import './SuperDoubleRange.css'


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]



    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,


        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    //

    const onChangeCallbackMin = (e: ChangeEvent<HTMLInputElement>) => {
        const val = Math.min(Number(e.target.value), value[1] - 1);
        onChangeRange && onChangeRange([val, value[1]])
    }

    const onChangeCallbackMax = (e: ChangeEvent<HTMLInputElement>) => {
        const val = Math.max(Number(e.target.value), value[0] + 1);
        onChangeRange && onChangeRange([value[0], val])
    }


    return (
        <>
            {/*DoubleRange*/}
            <input
                type="range"
                value={value[0]}
                onChange={onChangeCallbackMin}
                className="thumb thumb--left"
                style={{zIndex: value[0] > value[1] - 10 ? 5 : 3}}
            />
            <input
                type="range"
                value={value[1]}
                onChange={onChangeCallbackMax}
                className="thumb thumb--right"
            />
            <div className="slider">
                <div className="slider__track" />
                <div className="slider__range" />
            </div>
        </>
    )
}

export default SuperDoubleRange
