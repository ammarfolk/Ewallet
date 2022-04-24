import React, { useState } from 'react'
import { VENDORS } from '../model/vendors'

const CardForm = ({ onNewCardSubmitted }) => {
  const [holderName, SetHolderName] = useState("")
  const [cardNumber, SetCardNumber] = useState("")
  const [ccvValue, SetCCVValue] = useState("")
  const [expireDate, SetExpireDate] = useState("")
  const [vendor, SetVendor] = useState("")

  const formSubmitted = () => {
    if (holderName.length && cardNumber.length && ccvValue.length && expireDate.length && vendor.length) {
      let newCard = {
        "card_number": cardNumber,
        "holder_name": holderName,
        "expire_date": expireDate,
        "ccv": ccvValue,
        "vendor": vendor,
      }
      onNewCardSubmitted(newCard)
    }
  }

  return (
    <div>
      <section className="fourm">
        <label htmlFor="name">card holder name</label>
        <input id="name" maxLength="28" type="text" value={holderName} onChange={e => SetHolderName(e.target.value)} />
        <label htmlFor="cardnumber">Card Number</label>
        <input id="cardnumber" type="number" pattern="[0-9]*" value={cardNumber} onChange={e => SetCardNumber(e.target.value)} />
        <section className="valccv">
          <label htmlFor="Valid Thru">Valid Thru</label>
          <input className="val" maxLength="03" id="Valid Thru" type="number" pattern="[0-9]*" value={expireDate} onChange={e => SetExpireDate(e.target.value)} />
          <label htmlFor="CCV">CCV</label>
          <input className="ccv" id="CCV" maxLength="03" type="number" pattern="[0-9]*" value={ccvValue} onChange={e => SetCCVValue(e.target.value)} />
        </section>
        <form>
          <label htmlFor="Vendors">Vendors</label>
          <select name="Vendors" id="Vendors" value={vendor} onChange={e => SetVendor(e.target.value)}>
            <option hidden defaultValue></option>
            {Object.keys(VENDORS).map(vendorKey => {
              let vendor = VENDORS[vendorKey]
              return <option key={vendor} value={vendor}> {friendlyNameForVendor(vendor)} </option>
            })}
          </select>
        </form>
      </section>
      <button className="add" onClick={formSubmitted}>Add card</button>
    </div>
  )
}


const friendlyNameForVendor = (vendor) => {
  if (vendor === VENDORS.bitcoin) {
    return "Bitcoin Inc"
  } else if (vendor === VENDORS.chain) {
    return "Block chain INC"
  } else if (vendor === VENDORS.evil) {
    return "Evil corp"
  } else if (vendor === VENDORS.ninja) {
    return "Ninja Bank"
  }
}
export default CardForm