import React from 'react';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import './Style.css';
import Img1 from "../components/Images/Img1.jpeg"


export default function Second({ page, setPage, formData, setFormData }) {
  return (
    <>
      {/* <form style={{ marginRight: 270, marginLeft: 270, }}>

        <div style={{ margin: 17 }}>MCC_Code_ID:
          <FormInput
            placeholderText={'MCC_Code_ID'}
            value={formData.MCCCodeID}
            onChange={(e) => setFormData({ ...formData, MCCCodeID: e.target.value })}
          />
        </div>

        <div style={{ margin: 17 }}>
          <p>Active_Flag:</p>
          <input
            type='radio'
            id='1'
            name='1'
            value='1'
            checked={formData.ActiveFlag === '1'}
            onChange={(e) => setFormData({ ...formData, ActiveFlag: e.target.value })}
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
            checked={formData.ActiveFlag === '0'}
            onChange={(e) => setFormData({ ...formData, ActiveFlag: e.target.value })}
          />
          <label style={{ marginLeft: 7 }}
            htmlFor='0'
          >
            No
          </label>
        </div>

        <div style={{ margin: 17 }}>Transaction_Currency_Code_ID:
          <FormInput
            placeholderText={'Transaction_Currency_Code_ID'}
            value={formData.TransactionCurrencyCodeID}
            onChange={(e) => setFormData({ ...formData, TransactionCurrencyCodeID: e.target.value })}
          />
        </div>

        <div style={{ margin: 17 }}>
          <p>Transaction_Mode_ID:</p>
          <input
            type='radio'
            id='1'
            name='1'
            value='1'
            checked={formData.TransactionModeID === '1'}
            onChange={(e) => setFormData({ ...formData, TransactionModeID: e.target.value })}
          />
          <label style={{ marginLeft: 7 }}
            htmlFor='1'
          >
            1
          </label>

          <input
            style={{ marginLeft: 40 }}
            type='radio'
            id='0'
            name='0'
            value='0'
            checked={formData.TransactionModeID === '0'}
            onChange={(e) => setFormData({ ...formData, TransactionModeID: e.target.value })}
          />
          <label style={{ marginLeft: 7 }}
            htmlFor='0'
          >
            0
          </label>
        </div>

        <div style={{ margin: 17 }}>Category_ID:
          <select
            style={{ margin: 7, maxWidth: 400, padding: 10 }}
            className="form-select"
            value={formData.CategoryID}
            onChange={(e) => setFormData({ ...formData, CategoryID: e.target.value })}
          >
            <option defaultValue value='0'>Open this for select Category ID</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
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
            setFormData({ ...formData, MCCCodeID: Number(formData.MCCCodeID), TransactionCurrencyCodeID: Number(formData.TransactionCurrencyCodeID) });
            setPage(page + 1);
          }}
        />

      </form> */}
      <div className='main'>
        <div className='contr'>
          <div>  <form >
            <div className='centerr'><img className='log' src={Img1} alt="description"/></div>

            <div className='start' style={{ paddingTop: "10px" }}>    MCC_Code_ID:</div>
            <div className='centerr'>
              <FormInput
                placeholderText={'MCC_Code_ID'}
                value={formData.MCCCodeID}
                onChange={(e) => setFormData({ ...formData, MCCCodeID: e.target.value })}
              />
            </div>
            <div className='start'>Active_Flag:</div>
            <div className='start' style={{ paddingTop: "10px" }}>

              <input
                type='radio'
                id='1'
                name='1'
                value='1'
                checked={formData.ActiveFlag === '1'}
                onChange={(e) => setFormData({ ...formData, ActiveFlag: e.target.value })}
              />
              <label style={{ marginLeft: 7 }}
                htmlFor='1'
              >
                Yes (1)
              </label>

              <input
                style={{ marginLeft: 40 }}
                type='radio'
                id='0'
                name='0'
                value='0'
                checked={formData.ActiveFlag === '0'}
                onChange={(e) => setFormData({ ...formData, ActiveFlag: e.target.value })}
              />
              <label style={{ marginLeft: 7 }}
                htmlFor='0'
              >
                No (0)
              </label>
            </div>
            <div className='start' style={{ paddingTop: "10px" }} >   Transaction_Currency_Code_ID:</div>
            <div className='centerr'>
              <FormInput
                placeholderText={'Transaction_Currency_Code_ID'}
                value={formData.TransactionCurrencyCodeID}
                onChange={(e) => setFormData({ ...formData, TransactionCurrencyCodeID: e.target.value })}
              />
            </div>
            <div className='start'>Transaction_Mode_ID:</div>
            <div className='start' style={{ paddingTop: "10px" }}>

              <input
                type='radio'
                id='1'
                name='1'
                value='1'
                checked={formData.TransactionModeID === '1'}
                onChange={(e) => setFormData({ ...formData, TransactionModeID: e.target.value })}
              />
              <label style={{ marginLeft: 7 }}
                htmlFor='1'
              >
                1
              </label>

              <input
                style={{ marginLeft: 40 }}
                type='radio'
                id='0'
                name='0'
                value='0'
                checked={formData.TransactionModeID === '0'}
                onChange={(e) => setFormData({ ...formData, TransactionModeID: e.target.value })}
              />
              <label style={{ marginLeft: 7 }}
                htmlFor='0'
              >
                0
              </label>
            </div>
            <div className='start' style={{ paddingTop: "10px" }}>  Category_ID:</div>
            <div className='centerr'>
              <select
                style={{ margin: 7, maxWidth: 400, padding: 10 }}
                className="form-select"
                value={formData.CategoryID}
                onChange={(e) => setFormData({ ...formData, CategoryID: e.target.value })}
              >
                <option defaultValue value='0'>Open this for select Category ID</option>
                <option value="1">Hotel</option>
                <option value="2">Groceries</option>
                <option value="3">Bank</option>
                <option value="4">Medical</option>
                <option value="5">Furniture</option>
                <option value="6">Fuel</option>
                <option value="7">Accounting</option>
                <option value="8">Agricultural</option>
                <option value="9">Architecture</option>
                <option value="10">Art</option>
                <option value="11">Books</option>
                <option value="12">Bus</option>
                <option value="13">Cab/Taxi</option>
                <option value="14">Cable TV</option>
                <option value="15">Contractors</option>
              </select>
            </div>


            <div className='centerr'>
              <div><FormButton

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
                    setFormData({ ...formData, ActiveFlag: Number(formData.ActiveFlag),MCCCodeID: Number(formData.MCCCodeID), TransactionCurrencyCodeID: Number(formData.TransactionCurrencyCodeID), TransactionModeID: (formData.TransactionModeID === '1' ? true : false)});
                    setPage(page + 1);
                  }}
                />
              </div>
            </div>



          </form>
          </div>
        </div>
      </div>



    </>
  )
}
