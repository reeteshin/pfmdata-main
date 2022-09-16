import React from 'react'

export default function FormInput({ placeholderText, ...rest }) {
    return (
        <>

            <input
                style={{
                    padding: 10,
                    marginTop: 5,
                    marginBottom: 10,
                    marginLeft: 17,
                    fontSize: 17,
                    borderRadius: 8,
                    borderWidth: 1,
                    maxWidth: 400,
                }}

                className="form-control"
                placeholder={placeholderText}


                {...rest}

            />

        </>
    )
}
