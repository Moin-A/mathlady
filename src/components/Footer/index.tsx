import React from 'react'
import { MuteUnmute } from '../../ReduxSrore/Slices/soundReducer'
import { useDispatch } from 'react-redux'

interface Props {

}

function Index(props: Props) {

    const Dispatch = useDispatch();
    return (
        <footer className="bg-white absolute bottom-0 left-0 right-0 m-0 shadow  dark:bg-gray-800">
            <div className="w-full mx-left max-w-screen-xl p-4 md:flex md:items-left md:justify-left mx-[4rem]">
                <div className="flex items-center justify-left w-full ">
                    <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" id="toggleB" className="sr-only" onChange={() => Dispatch(MuteUnmute())} />
                            <div className="block parent bg-gray-400 w-10 h-6 rounded-full"></div>
                            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition">
                                <img src="/soundIcon.svg" className='m-auto w-[60%] h-full delay-200 transition-all btn  duration-0' />
                            </div>
                        </div>
                        <div className="ml-3 text-gray-700 font-medium text-sm">
                            Correct answer sound on
                        </div>
                    </label>
                </div>
            </div>
        </footer>
    )
}

export default Index
