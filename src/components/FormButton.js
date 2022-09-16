import React from 'react'

export default function FormButton({ buttonClass, buttonText, ...rest }) {
  return (
    <>
      <button
        style={{
          margin: 10,
          fontSize: 17,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8
        }}
        type="button"
        className={buttonClass}
        {...rest}
      >
        {buttonText}
      </button>

    </>
  )
}
