import React from 'react'

interface Props {
    text:string
}

function UI_Alert(props: Props) {
    const {text} = props

    return (
        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <span className="font-medium">Info alert!</span> {text}
        </div>
    )
}

export default UI_Alert
