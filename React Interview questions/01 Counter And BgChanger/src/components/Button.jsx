import React from 'react'

function Button({
        text,
        backgroundColor="",
        textColor="white",
        bgChanger=()=>{}
}
) {
        return (
                <button 
                className='bgBtn' 
                style={{backgroundColor:backgroundColor,color:textColor}} 
                onClick={()=>bgChanger(text)}>
                        {text?.toUpperCase()}
                </button>
        )
}

export default Button