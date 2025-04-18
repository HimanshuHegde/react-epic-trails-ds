import { HTMLAttributes } from "react"

type NotificationBadgeProps = HTMLAttributes<HTMLDivElement>&{
    children?: React.ReactNode
}
export default function NotificationBadge({
    children,
    ...props
}: NotificationBadgeProps){
    return(
        <div className={`h-8 w-8 rounded-full bg-black flex justify-center items-center text-white ${props.className}`}>
            {children}
        </div>
    )
}