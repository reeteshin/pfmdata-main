import React, { useState } from 'react'
import Fifth from './Fifth';
import First from './First';
import Fourth from './Fourth';
import Second from './Second';
import Third from './Third';
import './Style.css';
import FinalFetchedData from './FinalFetchedData';


export default function MSForms() {

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        AccountTransactionID: '',
        TransactionID: '',
        TransactionAmount: '',
        //TransactionTimeStamp : '',
        LinkedAccountID: '',

        MCCCodeID: '',
        ActiveFlag: '', //Yes or No 
        TransactionCurrencyCodeID: '',
        TransactionModeID: '', //Yes or No *************** Bool
        CategoryID: '',

        MerchantID: '',
        TransactionType: '', //Credit or Debit
        NotAExpense: '',
        BalanceAmount: '',
        DestinationCurrency: '',

        CurrencyCodeID: '',
        AccountNumber: '',
        BankID: '',
        Narration: '',
        TransactionReferenceNumber: '',

        CategorizedFlag: false, // Yes or No ***************** Bool

    })

    const MSScreens = [

        <First
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
        />,

        <Second
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
        />,

        <Third
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
        />,

        <Fourth
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
        />,

        <Fifth
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
        />,

    ];

    const [on, Seton] = useState(true)
    return (

        <>
        <button onClick={()=>Seton(!on)}>{on?<>Show Form</>:<>Show Data</>}</button>
            {

                on ? 
                <>
                    <FinalFetchedData/>
                </> :
                    <>

                        <div className='form-step'>

                            Page {page + 1}
                        </div>
                        <div className='form-box'>
                            {MSScreens[page]}
                        </div>

                    </>

            }

        </>
    )
}

