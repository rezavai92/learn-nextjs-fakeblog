import React from 'react'

export default function Input({type,placeholder,value,inputChangeHandler,style,required }) {
    return (
        <div>
            <input style={style}type={type} required={required} placeholder={placeholder} value={value} onChange={inputChangeHandler} />
         
        </div>
    )
}
