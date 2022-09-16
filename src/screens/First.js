import React from 'react';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import './Style.css';
import Img1 from "../components/Images/Img1.jpeg"

export default function First({ page, setPage, formData, setFormData }) {

    return (
        <>

            <div className='main'>
                <div className='contr'>    <div>
                    <form

                    >
                        <div className='centerr'><img className='log' src={Img1} alt="description"/></div>
                        <div className='start' style={{ paddingTop: "10px" }}>  Account_Transaction_ID:</div>

                        <div
                            className='centerr'
                        >
                            <FormInput

                                placeholderText={'Account_Transaction_ID'}
                                value={formData.AccountTransactionID}
                                onChange={(e) => setFormData({ ...formData, AccountTransactionID: e.target.value })}
                            />
                        </div>
                        <div className='start'>   Transaction_ID:</div>

                        <div className='centerr'>
                            <FormInput

                                placeholderText={'Transaction_ID'}
                                value={formData.TransactionID}
                                onChange={(e) => setFormData({ ...formData, TransactionID: e.target.value })}
                            />
                        </div>

                        <div className='start'>   Transaction_Amount:</div>
                        <div className='centerr'>
                            <FormInput

                                placeholderText={'Transaction_Amount'}
                                value={formData.TransactionAmount}
                                onChange={(e) => setFormData({ ...formData, TransactionAmount: e.target.value })}
                            />
                        </div>

                        <div className='start'>   Linked_Account_ID:</div>

                        <div className='centerr'>
                            <FormInput

                                placeholderText={'Linked_Account_ID'}
                                value={formData.LinkedAccountID}
                                onChange={(e) => setFormData({ ...formData, LinkedAccountID: e.target.value })}
                            />
                        </div>
                        <div className='centerr'><FormButton

                            className='btn btn-primary nextBtn'
                            buttonText={'Next'}
                            onClick={() => {
                                setFormData({ ...formData, TransactionAmount: Number(formData.TransactionAmount), LinkedAccountID: Number(formData.LinkedAccountID) });
                                setPage(page + 1);
                            }}
                        /></div>


                    </form>
                </div></div></div>




        </>
    )
}
