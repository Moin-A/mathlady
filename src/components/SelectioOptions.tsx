import React, { useState } from 'react'
import UI_RadioButton from '../UI/UI_RadioButton'

interface Props {
    data: Array<any>,
    handleOnClick: Function
    attempts: string,
    answer_data: {
        flagged: boolean,
        Answer: boolean,
        id: string,
        answer: boolean
    }
}


function SelectioOptions(props: Props) {
    const [answer, setAnswer] = useState<string>("");
    const {
        data,
        attempts,
        answer_data,
        handleOnClick
    } = props

    function checkdisabled() {
        if (answer_data?.flagged) return true
        else if (Number(attempts) <= 0) {
            return answer_data?.answer ? false : true
        }

    }

    return (
        <div className="flex gap-2 w-100 flex-col  px-1">
            {data.map(item => (
                <UI_RadioButton data={item} setAnswer={setAnswer} />
            ))}
            <div className='relative cursor-pointer w-32 h-10'>
                <button className="text-white cursor-pointer h-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-11  mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={(e) => { e.preventDefault(); handleOnClick(answer) }} disabled={checkdisabled()}>{answer_data?.answer ? "Next" : "Check"}</button>
                <p className='absolute text-xs left-[16%] top-[110%] text-blue-700 mt-1' >{attempts} Attemps left</p>
            </div>
        </div>
    )
}

export default SelectioOptions


