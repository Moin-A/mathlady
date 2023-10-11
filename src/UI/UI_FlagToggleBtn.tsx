import React from 'react'
import { useDispatch } from 'react-redux'
import { flagge_answer } from '../ReduxSrore/Slices/dataReducer'

interface Props {
    flagged: Boolean,
    id: String
}

function UI_FlagToggleBtn(props: Props) {
    const dispatch = useDispatch()
    const { flagged, id } = props
    function handleClick() {
        dispatch(flagge_answer(id))
    }

    return (
        <div className='flex absolute right-8 cursor-pointer top-6  w-24 ' onClick={handleClick}>
            <svg width="18" height="25" viewBox="0 0 14 18" fill="currentColor" className={`flag first-letter:fill-inherit transition-all ${flagged ? 'text-[#F6B14D]' : 'text-white'}`} xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.1665 5.5C1.1665 4.09987 1.1665 3.3998 1.43899 2.86502C1.67867 2.39462 2.06112 2.01217 2.53153 1.77248C3.06631 1.5 3.76637 1.5 5.1665 1.5H8.83317C10.2333 1.5 10.9334 1.5 11.4681 1.77248C11.9386 2.01217 12.321 2.39462 12.5607 2.86502C12.8332 3.3998 12.8332 4.09987 12.8332 5.5V16.5L6.99984 13.1667L1.1665 16.5V5.5Z"
                    stroke="#667085" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[8px] my-auto px-2">{flagged ? "Flagged" : "Flag for Latter"}</span>
        </div>
    )
}

export default UI_FlagToggleBtn
