import React from 'react';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import './Style.css';
import Img1 from "../components/Images/Img1.jpeg"


export default function Third({ page, setPage, formData, setFormData }) {
  return (
    <>
      <div className='main'>
        <div className='contr'>
          <div><form >
            <div className='centerr'><img className='log' src={Img1} alt="description"/></div>

            <div className='start' style={{ paddingTop: "10px" }}>  Merchant_ID:</div>
            <div className='centerr'>
              <FormInput
                placeholderText={'Merchant_ID'}
                value={formData.MerchantID}
                onChange={(e) => setFormData({ ...formData, MerchantID: e.target.value })}
              />
            </div>
            <div className='start'>Transaction_Type:</div>
            <div className='start' style={{ paddingTop: "10px" }}>

              <input
                type='radio'
                id='credit'
                name='credit'
                value='credit'
                checked={formData.TransactionType === 'credit'}
                onChange={(e) => setFormData({ ...formData, TransactionType: e.target.value })}
              />
              <label style={{ marginLeft: 7 }}
                htmlFor='credit'
              >
                Credit
              </label>

              <input
                style={{ marginLeft: 40 }}
                type='radio'
                id='debit'
                name='debit'
                value='debit'
                checked={formData.TransactionType === 'debit'}
                onChange={(e) => setFormData({ ...formData, TransactionType: e.target.value })}
              />
              <label style={{ marginLeft: 7 }}
                htmlFor='debit'
              >
                Debit
              </label>
            </div>


            <div className='start' style={{ paddingTop: "10px" }}>Not_A_Expense:</div>
            <div className='centerr'>
              <FormInput
                placeholderText={'Not_A_Expense'}
                value={formData.NotAExpense}
                onChange={(e) => setFormData({ ...formData, NotAExpense: e.target.value })}
              />
            </div>
            <div className='start' style={{ paddingTop: "10px" }}>Balance_Amount:</div>
            <div className='centerr'>
              <FormInput
                placeholderText={'Balance_Amount'}
                value={formData.BalanceAmount}
                onChange={(e) => setFormData({ ...formData, BalanceAmount: e.target.value })}
              />
            </div>
            <div className='start' style={{ paddingTop: "10px" }}>Destination_Currency:</div>
            <div className='centerr'>
              <FormInput
                placeholderText={'Destination_Currency'}
                value={formData.DestinationCurrency}
                onChange={(e) => setFormData({ ...formData, DestinationCurrency: e.target.value })}
              />
            </div>
            <div className='centerr'><div><FormButton

              className='btn btn-primary'
              buttonText={'Previous'}
              onClick={() => {
                return setPage(page - 1);

              }}
            />

              <FormButton

                className='btn btn-primary'
                buttonText={'Next'}
                onClick={() => {
                  setFormData({ ...formData, MerchantID: Number(formData.MerchantID), NotAExpense: Number(formData.NotAExpense), BalanceAmount: Number(formData.BalanceAmount), DestinationCurrency: Number(formData.DestinationCurrency) });
                  setPage(page + 1);
                }}
              />
            </div></div>



          </form></div>
        </div>
      </div>
      {/* <form style={{ marginRight: 270, marginLeft: 270, }}>


        <div style={{ margin: 17 }}>Merchant_ID:
          <FormInput
            placeholderText={'Merchant_ID'}
            value={formData.MerchantID}
            onChange={(e) => setFormData({ ...formData, MerchantID: e.target.value })}
          />
        </div>

        <div style={{ margin: 17 }}>
          <p>Transaction_Type:</p>
          <input
            type='radio'
            id='credit'
            name='credit'
            value='credit'
            checked={formData.TransactionType === 'credit'}
            onChange={(e) => setFormData({ ...formData, TransactionType: e.target.value })}
          />
          <label style={{ marginLeft: 7 }}
            htmlFor='credit'
          >
            Credit
          </label>

          <input
            style={{ marginLeft: 40 }}
            type='radio'
            id='debit'
            name='debit'
            value='debit'
            checked={formData.TransactionType === 'debit'}
            onChange={(e) => setFormData({ ...formData, TransactionType: e.target.value })}
          />
          <label style={{ marginLeft: 7 }}
            htmlFor='debit'
          >
            Debit
          </label>
        </div>



        <div style={{ margin: 17 }}>Not_A_Expense:
          <FormInput
            placeholderText={'Not_A_Expense'}
            value={formData.NotAExpense}
            onChange={(e) => setFormData({ ...formData, NotAExpense: e.target.value })}
          />
        </div>

        <div style={{ margin: 17 }}>Balance_Amount:
          <FormInput
            placeholderText={'Balance_Amount'}
            value={formData.BalanceAmount}
            onChange={(e) => setFormData({ ...formData, BalanceAmount: e.target.value })}
          />
        </div>

        <div style={{ margin: 17 }}>Destination_Currency:
          <FormInput
            placeholderText={'Destination_Currency'}
            value={formData.DestinationCurrency}
            onChange={(e) => setFormData({ ...formData, DestinationCurrency: e.target.value })}
          />
        </div>

        <FormButton
          style={{ marginLeft: 70 }}
          className='btn btn-primary'
          buttonText={'Previous'}
          onClick={() => {
            return setPage(page - 1);

          }}
        />

        <FormButton
          style={{ marginLeft: 400 }}
          className='btn btn-primary'
          buttonText={'Next'}
          onClick={() => {
            setFormData({ ...formData, MerchantID: Number(formData.MerchantID), NotAExpense: Number(formData.NotAExpense), BalanceAmount: Number(formData.BalanceAmount), DestinationCurrency: Number(formData.DestinationCurrency) });
            setPage(page + 1);
          }}
        />



      </form> */}


    </>
  )
}
