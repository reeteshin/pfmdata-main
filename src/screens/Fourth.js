import React from 'react';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import './Style.css';
import Img1 from "../components/Images/Img1.jpeg"

export default function Fourth({ page, setPage, formData, setFormData }) {
  return (
    <>
      <div className='main'>
        <div className='contr'><div>
          <form>
            <div className='centerr'><img className='log' src={Img1} alt="description"/></div>
            <div className='start'>  Currency_Code_ID:</div>
            <div className='centerr'>
              <FormInput
                placeholderText={'Currency_Code_ID'}
                value={formData.CurrencyCodeID}
                onChange={(e) => setFormData({ ...formData, CurrencyCodeID: e.target.value })}
              />
            </div>
            <div className='start'> Account_Number:</div>
            <div className='centerr'>
              <FormInput
                placeholderText={'Account_Number'}
                value={formData.AccountNumber}
                onChange={(e) => setFormData({ ...formData, AccountNumber: e.target.value })}
              />
            </div>
            <div className='start'>  Bank_ID:</div>
            <div className='centerr'>
              <FormInput
                placeholderText={'Bank_ID'}
                value={formData.BankID}
                onChange={(e) => setFormData({ ...formData, BankID: e.target.value })}
              />
            </div>
            <div className='start'>  Narration:</div>
            <div className='centerr'>
              <FormInput
                placeholderText={'Narration'}
                value={formData.Narration}
                onChange={(e) => setFormData({ ...formData, Narration: e.target.value })}
              />
            </div>
            <div className='start'>  Transaction_Reference_Number:</div>
            <div className='centerr' >
              <FormInput
                placeholderText={'Transaction_Reference_Number'}
                value={formData.TransactionReferenceNumber}
                onChange={(e) => setFormData({ ...formData, TransactionReferenceNumber: e.target.value })}
              />
            </div>

            <div className='centerr'>
              <div> <FormButton

                className='btn btn-primary'
                buttonText={'Prev'}
                onClick={() => {
                  return setPage(page - 1);

                }}
              /></div>

              <div><FormButton

                className='btn btn-primary'
                buttonText={'Next'}
                onClick={() => {
                  setFormData({ ...formData, CurrencyCodeID: Number(formData.CurrencyCodeID), AccountNumber: Number(formData.AccountNumber), BankID: Number(formData.BankID) });
                  setPage(page + 1);
                }}
              /></div>
            </div>
          </form>
        </div></div>
      </div>


    </>
  )
}
