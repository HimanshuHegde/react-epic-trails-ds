import React, { InputHTMLAttributes, useState } from "react";
import { Checkbox, SquareOutline } from "../icons";
type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
    checked?: boolean
    children?: React.ReactNode
    info?:React.ReactNode
    label?:React.ReactNode
    error?:boolean
    disabled?:boolean
    name?:string
    value?:string
}
export default function CheckBox({children,
    checked=false,
    info,
    label,
    error=false,
    disabled=false,
    name = 'checkbox',
    value,
    ...props
}: CheckBoxProps) {
    const [check , setCheck] = useState<boolean>(checked);
    return (
        <div className={`flex gap-2 p-2 ${disabled ? 'cursor-not-allowed text-gray-400' : ''} bg-black text-white`}>

            <div id={name} className={`${disabled ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer'}`}>
                <span className={`flex gap-2`}>
                    <span className={`  ${disabled ? 'text-gray-400' : ''} flex ${info ? '':'items-center'}`}>
                        
                        <input type="checkbox" defaultValue={value} className="w-4 h-4 hidden" name={name} id={name}  disabled={disabled} onChange={(e)=>{(setCheck(e.target.checked));}}
                        {...props} value={value}/>

                        {check ?        
                            <button id={name} className={`flex ${error ? 'text-red-500' : ''} ${disabled ? 'text-gray-400' : ''}` } onClick={e=>{(setCheck(!check))}}>
                                <Checkbox color="white" height="20px"/>
                            </button>
                            : 
                            <button id={name} className={`flex ${error ? 'text-red-500' : ''} ${disabled ? 'text-gray-400' : ''}`} onClick={e=>{(setCheck(!check))}}>
                                <SquareOutline color="white"/>
                            </button>}
                    </span>
                    <label  htmlFor={name} className="flex flex-col leading-none gap-1 text-white">
                        {label}
                        <div className="text-sm text-gray-400 leading-none">{info}</div>
                    </label>
                </span>
            </div>
                
                
            
        </div>
    );
}