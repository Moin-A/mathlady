import React, { memo } from 'react'

interface Props {
    info: {
        flagged: Boolean,
        Answer: Boolean,
        id: string
    }
    handleClick: React.MouseEventHandler<HTMLDivElement>;

}

function UI_SideBarButton(props: Props) {
    const { flagged, id } = props.info
    const { handleClick } = props

    return (
        <div onClick={() => handleClick(id)}>
            <div className=' border flex justify-between border-[#EAECF0] cursor-pointer dark:hover:bg-gray-700  hover:bg-gray-100  hover:shadow-button rounded-[4px] h-9 bottom-2 '>
                <div className='w-5 my-auto mx-1 h-5 border-[1.5px] rounded-full border-[#D0D5DD]'></div>
                <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor" className={`flag first-letter:fill-inherit  text-[#F6B14D] my-auto mr-2 opacity-0 transition-all  ${flagged ? "opacity-100 block" : ""}`} xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.1665 5.5C1.1665 4.09987 1.1665 3.3998 1.43899 2.86502C1.67867 2.39462 2.06112 2.01217 2.53153 1.77248C3.06631 1.5 3.76637 1.5 5.1665 1.5H8.83317C10.2333 1.5 10.9334 1.5 11.4681 1.77248C11.9386 2.01217 12.321 2.39462 12.5607 2.86502C12.8332 3.3998 12.8332 4.09987 12.8332 5.5V16.5L6.99984 13.1667L1.1665 16.5V5.5Z"
                        stroke="#667085" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default memo(UI_SideBarButton)
