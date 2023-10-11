import React, { memo, useState } from 'react'

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

function UI_PanelSearchBar(props: Props) {
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
        <form action="#" className="flex gap-2 w-100 flex-row  px-1">
            <div className="w-[100%]">
                <label hidden htmlFor="email" className="block mb-2 d-none hidden text-sm font-medium text-gray-900 dark:text-[#0a0505]">Answer</label>
                <input type="text" id="email" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={answer} onChange={(e) => { setAnswer(e.target.value) }} />
            </div>
            <div className='relative cursor-pointer'>
                <button className="text-white cursor-pointer h-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-11  mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" disabled={checkdisabled()} onClick={(e) => { e.preventDefault(); handleOnClick(answer) }} >{answer_data?.answer ? "Next" : "Check"}</button>
                <p className='absolute text-xs left-[16%] top-[110%] text-blue-700 '>{attempts} Attemps left</p>
            </div>
        </form>
    )
}

export default memo(UI_PanelSearchBar)

