import React from 'react'
import { useSelector } from 'react-redux';
import { IRootState } from "../../ReduxSrore/RootReducer"
import UI_SideBarButton from '../../UI/UI_SideBarButton';
import Alert from '../../UI/Modal';


interface Props {
    setSearchParams
}

function Index(props: Props) {
    const { setSearchParams } = props
    const { response } = useSelector((state: IRootState) => state.Data);

    function handleClick(id) {
        setSearchParams({ 'question_id': id })
    }


    return (
        <>
            <div id="drawer-navigation" className="relative h-full top-[2px] border-t-0 border-[#EAECF0] border-2  bg-[#FFFFFF] font-sans-serif left-0 z-40 w-[24rem]   overflow-y-visible  -translate-x-full dark:bg-gray-800  mr-0 " tabIndex="-1" aria-labelledby="drawer-navigation-label">
                <div className='px-2'>
                    <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400 p-2">Menu</h5>
                    <button className="rounded-full border-1  shadow-3xl  bg-[#FFFFFF] w-[40px] h-[40px] right-[-4rem] top-2 absolute  mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-toggle="drawer-navigation" data-drawer-backdrop="false" aria-controls="drawer-navigation">
                        <img src="/arrow.svg" className='m-auto delay-200 transition-all btn  duration-0' />
                    </button>
                    <div className="overflow-y-auto">
                        <form action="#" className="mb-6 px-1">
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#0a0505]">Your email</label>
                                <input type="email" id="email" className="bg-gray-50 border  border-[#EAECF0] cursor-pointer dark:hover:bg-gray-700  hover:bg-gray-100  hover:shadow-button text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="&#128269; Search" required />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='bg-[#F9FAFB] py-1 px-3'>
                    <button className='flex'>
                        <img src="/arrow.svg" className='m-auto pr-3 h-[8px]' />
                        <span className='color-[#475467c5]   text-[#475467ba] text-sm '>Lesson 5</span>
                    </button>
                </div>
                <div className='px-3 text-md py-1'>
                    <p>Assignment Title Here</p>
                    <div className='flex flex-row justify-between text-xs '>
                        <span className='p-[2px] rounded-sm'>Questions:</span>
                        <span className='bg-[#F2F4F7]   p-[2px] rounded-sm'>30 questions</span>
                    </div>
                    <div className='grid grid-cols-3 gap-2 py-3' >
                        {Object.values(response).map(item =>
                            <UI_SideBarButton info={item} handleClick={handleClick} key={item.id} />
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Index
