import React from "react";
import MathExpression from "../Utility/MathExpression";


const ItemTemplate = ({ item, itemSelected, dragHandleProps }) => {
    const { onMouseDown, onTouchStart } = dragHandleProps;

    return (
        <div
            className="disable-select min-h-[30px] flex "
        >   {item?.type == "MathExp" ? <MathExpression expression={item.value} /> : <p>{item.value}</p>}
            <div
                className="disable-select dragHandle my-auto ml-2"

                onTouchStart={(e) => {
                    e.preventDefault();
                    e.target.style.backgroundColor = "blue";
                    document.body.style.overflow = "hidden";
                    onTouchStart(e);
                }}
                onMouseDown={(e) => {
                    document.body.style.overflow = "hidden";
                    onMouseDown(e);
                }}
                onTouchEnd={(e) => {
                    e.target.style.backgroundColor = "black";
                    document.body.style.overflow = "visible";
                }}
                onMouseUp={() => {
                    document.body.style.overflow = "visible";
                }}
            >
                <svg className="w-3 h-3 m-auto text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.335 6.514 6.91 1.464a1.122 1.122 0 0 0-1.818 0l-3.426 5.05a.988.988 0 0 0 .91 1.511h6.851a.988.988 0 0 0 .91-1.511Zm-8.67 6.972 3.426 5.05a1.121 1.121 0 0 0 1.818 0l3.426-5.05a.988.988 0 0 0-.909-1.511H2.574a.987.987 0 0 0-.909 1.511Z" />
                </svg>
            </div>
        </div>
    );
};

export default ItemTemplate