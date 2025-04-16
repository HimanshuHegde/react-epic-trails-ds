import React, { InputHTMLAttributes } from "react";
type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
    checked?: boolean
    children?: React.ReactNode
    info?:React.ReactNode
    label?:React.ReactNode
    // error?:boolean
    disabled?:boolean
    name?:string
}
export default function CheckBox({children,
    checked=false,
    info,
    label,
    // error=false,
    disabled=false,
    name,
    ...props
}: CheckBoxProps) {
    return (
        <div className={`flex gap-2 p-2 align-middle ${disabled ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer'}`}>
            <div className={`  ${disabled ? 'text-gray-400' : ''}`}>
            {/* {checked ? <ion-icon name="checkbox" ></ion-icon> : <ion-icon name="square-outline"></ion-icon>} */}
            <input type="checkbox" className="w-4 h-4 " name={name} id={name} checked={checked} disabled={disabled} 
            {...props} />
            </div>
            <div className="flex flex-col mt-1 gap-1">
                <div className="leading-none"><label id={name} >{label}</label></div>
                <span className="text-sm text-gray-400 leading-none">{info}</span>
            </div>
        </div>
    );
}