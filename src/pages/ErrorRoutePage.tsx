import { FC } from "react"

const ErrorRoutePage:FC = () => {
    return (
        <div className="flex h-screen w-full items-center justify-center flex-col">
            <div className="text-red-500 text-8xl">404</div>
            <div className="text-4xl">The page doesn't seem to exist</div>
        </div>
    )
}

export default ErrorRoutePage