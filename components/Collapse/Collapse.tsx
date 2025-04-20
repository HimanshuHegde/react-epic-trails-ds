import { Children, Fragment, useState } from "react";
import { Badge } from "../Badge";
import { ChevronDownOutline, ChevronUpOutline } from "../icons";

type CollapseProps = {
    badge?: string[],
    expanded?: boolean,
    actionFunction?: (() => void),
    actionButtonLabel?:string,
    children: React.ReactNode
    label?: React.ReactNode
}
export default function Collapse({badge=[],label,expanded=false,actionFunction,actionButtonLabel='',children}: CollapseProps) {
    const [expand,setExpand] = useState(expanded);
      const childrenArray = Children.toArray(children)
    return (
        <div className="w-full border-gray-700 border-b">
            <div className="flex  bg-black text-white items-center px-4 gap-8  py-4 ">
                <div className="flex gap-4 items-center">
                <span className="text-1xl">{label}</span>
                {badge.map((e)=>{
                    return (
                        <Badge size='md' className="bg-gray-800 px-4" >{e}</Badge>
                    )
                })}
                </div>
                <div className="text-white flex gap-6">
                    <span>
                        {actionButtonLabel?<button  onClick={actionFunction}><u>{actionButtonLabel}</u></button>:null}
                    </span>
                    {expand?
                    <button onClick={e=>{setExpand(!expand)}} className="flex items-center" ><ChevronUpOutline color="white"/></button> 
                    : 
                    <button onClick={e=>{setExpand(!expand)}} className="flex items-center"><ChevronDownOutline color="white"/></button>}
                </div>
            </div>
            <div className="bg-black text-white ">   
                {expand?childrenArray.map((child, index) => (
                          <Fragment key={index}>
                            <div className="px-4 py-2 text-gray-300">
                            {child}
                            </div>
                            
                          </Fragment>
                        )):null}
            </div>
        </div>
    );
}