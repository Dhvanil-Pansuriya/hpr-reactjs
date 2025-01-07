import React from 'react'

const Divider = ({content}) => {
    return (
        <div>
            <span className="relative flex justify-center m-5">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                ></div>

                <span className="relative z-5 bg-white px-6">{content}</span>
            </span>
        </div>
    )
}

export default Divider
