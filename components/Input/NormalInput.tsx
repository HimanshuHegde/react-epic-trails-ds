import { useState, useEffect } from "react";
import { IoCloseCircle, IoAlertCircle, IoCheckmarkCircle } from "react-icons/io5";
import { NInputProp } from "./Input.type";
import Truncate from "../Truncate/Truncate";
const Sizes = {
  small: "w-[375px] h-[36px]",
  medium: "w-[375px] h-[48px]",
  large: "w-[375px] h-[56px]",
  fit: "w-fit h-fit",
};

export default function NormalText({
  Size = "small",
  Label = "",
  Hint = "",
  placeholder = "Placeholder",
  State = "Default",
  value = "",
  curved = false,
  id='file-input',
  ...props
}: NInputProp) {
  const [inputValue, setInputValue] = useState(value||props.defaultValue);
  const [inputFile, setInputFile] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);  
  const handleInputChange = (text: string) => {
    setInputValue(text);
  };
  
  const getIcon = () => {
    switch (State) {
      case "Correct":
        return <IoCheckmarkCircle size={20} color="#22c55e" />; 
      case "Incorrect":
        return <IoAlertCircle size={20} color="#ef4444" />; 
      case "Loading":
        return <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" /> 
      default:
        return null; 
    }
  };
  const getBorderColor = () => {
    switch (State) {
      case "Incorrect":
        return "border-borderNegative";
      case "Correct":
        return "border-borderPositive";
      case "Active":
        return "border-black";
      case "Default":
        return isFocused ? "border-black" : "border-transparent";
      default:
        return "border-transparent";
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {Label ? (
        <div className="text-sm text-white">
          <text>{Label}</text>
        </div>
      ) : null}
      <div className={`relative ${Sizes[Size]} `}>
        <input 
        {...props}  
          
          className={`bg-[#e8e8e8] p-[8px] placeholder:text-inputPlaceholder outline-none pr-[40px] border-[3px]  ${props.type=='file'&&'hidden'} ${getBorderColor()} ${curved && 'rounded-md'} ${Sizes[Size]} ${props.className}`} 
          disabled={["Disabled", "ViewOnly"].includes(State)} 
          onFocus={(e) => {setIsFocused(true)
          props.onFocus?.(e);
          }}
          onBlur={(e) => {setIsFocused(false)
          props.onBlur?.(e);
          }}
          
          onChange={(e) => {handleInputChange(e.target.value)
          setInputFile(e.target.files ? e.target.files[0].name: null);
          props.onChange?.(e);
          }}
          value={inputValue}
          id={id}
        />
        {props.type === "file" && (
          <label
            htmlFor={id}
            className={`bg-[#e8e8e8] p-[8px] placeholder:text-inputPlaceholder outline-none  border-[3px] w-fit ${getBorderColor()} ${curved && 'rounded-md'} ${Sizes[Size]} font-semibold font-ubuntu flex items-center text-nowrap text-ellipsis max-w-sm`}
          >
           {inputFile&& <span className="min-h-4 min-w-4 flex justify-center items-center"><ion-icon name="attach-outline"  ></ion-icon></span>}
            Choose a file <Truncate className="!text-gray-300 text-sm  text-nowrap ml-2">{inputFile}</Truncate> 
          </label>
        )}
        
        {["Correct", "Incorrect", "Loading"].includes(State) && (
          <div className="absolute left-full top-1/2 -translate-x-full -translate-y-1/2 pr-4">
            {getIcon()}
          </div>
        )}
      </div>
      {Hint ? (
        <div className="text-sm text-inputHint text-white">
          <text>{Hint}</text>
        </div>
      ) : null}
    </div>
  );
}
