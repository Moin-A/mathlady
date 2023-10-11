import React, { useState, useEffect, useRef, useCallback } from 'react'
import DraggableList from "react-draggable-list";
import ItemTemplate from '../ItemTemplete';


interface Props {
    data: Array<any>,
    handleOnClick: Function;
    attempts: string,
    answer_data: {
        flagged: boolean,
        Answer: boolean,
        id: string,
        answer: boolean
    }
}

function Index(props: Props) {
    const [answer, setAnswer] = useState<string[]>([]);
    const {
        data,
        attempts,
        answer_data,
        handleOnClick
    } = props

    useEffect(() => setList(data), [data])
    const [list, setList] = useState<string[]>([]);

    const checkDisabled = () => {
        if (answer_data?.flagged) return true;
        else if (Number(attempts) <= 0) {
            return answer_data?.answer ? false : true;
        }
    };

    const containerRef = useRef();
    return (
        <div  >
            <ul className="px-1 " ref={containerRef}
            >
                <DraggableList
                    itemKey="id"
                    template={ItemTemplate}
                    list={list}
                    onMoveEnd={(newList) => setList(newList)}
                    container={() => containerRef.current}
                />
                <div className='relative cursor-pointer w-32 h-10'>
                    <button className="text-white cursor-pointer h-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-11  mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 " disabled={checkDisabled()} onClick={(event) => { event.preventDefault(); handleOnClick(list) }}>{answer_data?.answer ? "Next" : "Check"}</button>
                    <p className='absolute text-xs left-[16%] top-[110%] text-blue-700 mt-1'>{attempts} Attemps left</p>
                </div>
            </ul>
        </div>
    )
}

export default Index
