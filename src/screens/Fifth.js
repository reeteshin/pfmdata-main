import React from 'react';
import FormButton from '../components/FormButton';
import './Style.css';
import Img1 from "../components/Images/Img1.jpeg"
import axios from 'axios';

export default function Fifth({ page, setPage, formData, setFormData }) {

    const submitbtn = async () => {
        const userData = {
            AccountTransactionID: formData.AccountTransactionID,
            TransactionID: formData.TransactionID,
            TransactionAmount: formData.TransactionAmount,

            LinkedAccountID: formData.LinkedAccountID,

            MCCCodeID: formData.MCCCodeID,
            ActiveFlag: formData.ActiveFlag,
            TransactionCurrencyCodeID: formData.TransactionCurrencyCodeID,
            TransactionModeID: formData.TransactionModeID,
            CategoryID: formData.CategoryID,

            MerchantID: formData.MerchantID,
            TransactionType: formData.TransactionType,
            NotAExpense: formData.NotAExpense,
            BalanceAmount: formData.BalanceAmount,
            DestinationCurrency: formData.DestinationCurrency,

            CurrencyCodeID: formData.CurrencyCodeID,
            AccountNumber: formData.AccountNumber,
            BankID: formData.BankID,
            Narration: formData.Narration,
            TransactionReferenceNumber: formData.TransactionReferenceNumber,

            CategorizedFlag: formData.CategorizedFlag,
        }
        await axios.post('http://pfmfake.herokuapp.com/transcation', userData).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <>


            <div className='main'>
                <div className='contr'>
                    <div>  <form >
                        <div className='centerr'><img className='log' src={Img1} alt="description" /></div>
                        {/* <p className='start' style={{ paddingTop: "10px" }}>Categorized_Flag:</p>
                        <div className='start'>

                            <input
                                type='radio'
                                id='1'
                                name='1'
                                value='1'
                                checked={formData.CategorizedFlag === '1'}
                                onChange={(e) => setFormData({ ...formData, CategorizedFlag: e.target.value })}
                            />
                            <label style={{ marginLeft: 7 }}
                                htmlFor='1'
                            >
                                Yes
                            </label>

                            <input
                                style={{ marginLeft: 40 }}
                                type='radio'
                                id='0'
                                name='0'
                                value='0'
                                checked={formData.CategorizedFlag === '0'}
                                onChange={(e) => setFormData({ ...formData, CategorizedFlag: e.target.value })}
                            />
                            <label style={{ marginLeft: 7 }}
                                htmlFor='0'
                            >
                                No
                            </label>
                        </div> */}


                        <div className="container">
                        CategorizedFlag
                            <div className="toggle-switch">
                                <input type="checkbox" className="checkbox"
                                    name='CategorizedFlag' id='CategorizedFlag'
                                    onChange={() => setFormData({ ...formData, CategorizedFlag: !formData.CategorizedFlag})} />
                                <label className="label" htmlFor='CategorizedFlag'>
                                    <span className="inner" />
                                    <span className="switch" />
                                </label>
                            </div>
                        </div>


                        <div className='centerr'>
                            <div><FormButton

                                className='btn btn-primary'
                                buttonText={'Previous'}
                                onClick={() => {
                                    setPage(page - 1);

                                }}
                            />

                                <FormButton

                                    className='btn btn-success'
                                    buttonText={'Submit'}
                                    onClick={() => {
                                        // setFormData({ ...formData, CategorizedFlag: (formData.CategorizedFlag === '1' ? true : false)});
                                        submitbtn();
                                        alert('Submit Successfully');
                                        console.log(formData);
                                        //console.log(typeof(formData.AccountTransactionID))

                                    }}
                                />
                            </div>
                        </div>


                    </form></div>
                </div>
            </div>


        </>
    )
}
