import React from 'react'

function Button({ onSubmit, children }) {
    return (
        <button className="mt-3 w-full bg-[#1A2C50] text-[#FFBE00]
         py-2 rounded-xl hover:text-[#F2C46F] hover:bg-[#282764] transition" onClick={onSubmit}>
            {children}
        </button>
    )
}

export default Button