import { useState } from "react";
import { AInputProp } from "./Input.type";
import { AlertCircle, CheckmarkCircle, CloseCircle } from "../icons";

const Sizes = {
  small: "w-[375px] h-[36px]",
  medium: "w-[375px] h-[48px]",
  large: "w-[375px] h-[56px]",
};

export default function AutoComplete({
  Size = "small",
  Label = "",
  Hint = "",
  State = "Default",
  value = "",
  input = [],
  curved = false,
  id,
  ...props
}: AInputProp) {
  const [inputValue, setInputValue] = useState(value || props.defaultValue || "");
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputId = id || "input"+Math.random();

  const handleInputChange = (text: string) => {
    setInputValue(text);

    if (text.length > 0) {
      const filteredSuggestions = input.filter((item) =>
        item.startsWith(text)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const clearInput = () => {
    setInputValue("");
    setSuggestions([]);
  };

  const getBorderColor = () => {
    switch (State) {
      case "Error":
        return "border-borderNegative";
      case "Success":
        return "border-borderPositive";
      case "Default":
        return isFocused ? "border-black" : "border-transparent";
      default:
        return "border-transparent";
    }
  };

  const getHintColor = () => {
    switch (State) {
      case "Error":
        return "text-contentNegative";
      case "Success":
        return "text-contentPositive";
      default:
        return "text-inputHint";
    }
  };

  return (
    <div className="flex flex-col gap-2 relative w-[375px]">
      {Label && (
        <div className="text-sm text-white">
          <label htmlFor={inputId}>{Label}</label>
        </div>
      )}

      <div className="relative text-black">
        <div className="flex-row items-center w-[375px]">
          <input
            {...props}
            id={inputId}
            className={`${
              Sizes[Size]
            } p-[8px] placeholder:text-inputPlaceholder bg-gray-50 border-[3px] ${getBorderColor()} pr-[40px] outline-none flex-1 ${
              curved && "rounded-md "
            } ${props.className}`}
            disabled={props.disabled || 
              State === "Loading"}
            value={inputValue}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus && props.onFocus(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur && props.onBlur(e);
            }}
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                e.preventDefault();
                setIsFocused(false);
                setInputValue(suggestions[0] ? suggestions[0] : inputValue);
              }
            }}
            onChange={(e) => {
              handleInputChange(e.target.value);
              props.onChange && props.onChange(e);
            }}
            style={{ width: 375 }}
          />

          {State === "Default" && String(inputValue).length > 0 && (
            <button
              onClick={clearInput}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center"
            >
              <CloseCircle size="24px" color="#5e5e5e" />
            </button>
          )}

          {State === "Loading" && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          {State === "Success" && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
              <CheckmarkCircle size="20px" color="#22c55e" />
            </div>
          )}
          {State === "Error" && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
              <AlertCircle size="20px" color="#ef4444" />
            </div>
          )}
        </div>

        {suggestions.length > 0 && (
          <div
            className={`absolute top-0 left-0 ${Sizes[Size]} pointer-events-none`}
          >
            <input
              className={`${
                Sizes[Size]
              } p-[8px] border-[3px] bg-transparent border-transparent pr-[40px] outline-none flex-1 ${
                curved && "rounded-md"
              }`}
              disabled
              value={suggestions[0]}
              style={{ width: 375 }}
              {...props}
            />
          </div>
        )}
      </div>

      {Hint && (
        <div
          className={`text-sm ${getHintColor()} flex flex-row items-center gap-1`}
        >
          {State === "Error" && <AlertCircle size="24px" color="#ef4444" />}
          {State === "Success" && (
            <CheckmarkCircle size="16px" color="#22c55e" />
          )}
          <p
            className={`text-white ${State === "Error" && "!text-contentNegative"} ${
              State === "Success" && "!text-contentPositive"
            }`}
          >
            {Hint}
          </p>
        </div>
      )}
    </div>
  );
}
