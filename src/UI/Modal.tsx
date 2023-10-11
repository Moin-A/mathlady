import React, { Component } from 'react'

interface Props {
    modalref: React.LegacyRef<HTMLButtonElement> | undefined
    buttonhidden: Boolean
    children: JSX.Element
}

function Alert(props: Props) {
    const { modalref, buttonhidden, children } = props
    return (
        <>



            <button data-modal-target="popup-modal" ref={modalref} data-modal-placement="top" data-modal-toggle="popup-modal" className={` text-white  bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ${buttonhidden && "hidden"} dark:focus:ring-blue-800`} type="button">
                Toggle modal
            </button>

            <div id="popup-modal" tabIndex="-1" data-modal-placement="top-right" className="modal-active fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                {children}
            </div>


        </>
    )
}

export default Alert
