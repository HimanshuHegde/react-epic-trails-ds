import { Children } from "react"

type Dialogue = {
    title:React.ReactNode
    description:React.ReactNode
    image?:React.ReactNode,
    children?:React.ReactNode
    imagePosition?:'up'|'down'|''
}
export default function Dialogue({title="hello",description="hello",image="hello",imagePosition,children}:Dialogue) {
    const childrenArray = Children.toArray(children)
    return (
        <div className="fixed top-0 h-[100vh] w-[100vw] bg-[#2e2c2ca3] flex justify-center items-center">
            <div className="flex flex-col p-5 py-7  gap-5 bg-grey w-[50%] h-fit bg-gray-50">
                <div className="flex flex-col">
                    {imagePosition === 'up' && <span className="mb-3">{image}</span>}
                    <span className="font-bold text-2xl text-black font-sans">{title}</span>
                    <span className="text-lg text-gray-800 ">{description}</span>
                    {imagePosition === 'down' && <span className="mt-3">{image}</span>}
                </div>
                <div className="flex gap-2 ml-auto text-white">
                    {childrenArray.map((child, index) => (<div key={index} >{child}</div>))}
                </div>
            </div>
        </div>
    )
}