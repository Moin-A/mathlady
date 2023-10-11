import React from 'react'

interface Props {
    data:{
        label:string,
        value:string,
        id:string,
        type:string,
        
    }
    setAnswer:Function
}

function UI_RadioButton(props: Props) {
    const {label,value,id,type} = props?.data
    const {setAnswer} = props;
    return (
        <div className="flex items-center mb-4 mr-auto">
        <input id={label} type="radio"  name={type} className="w-4 h-4 text-gray-300 relative inputRadio border-gray-300 focus:ring-red-500 dark:focus:ring-white dark:focus:gray-800 dark:ring-offset-red-800 focus:bg-gray-700 dark:bg-gray-700 dark:border-gray-600" onChange={()=>setAnswer(id)} data-id={id} value={id}/>
         <label htmlFor={label} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{value}</label>
    </div>
    )
}

export default UI_RadioButton
