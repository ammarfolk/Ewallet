import React from 'react'
import { WifiIcon } from '../assets/WifiIcon';
import { VENDORS } from '../model/vendors';
import { VendorLogo } from './VendorLogo';

const Card = ({ cardData, isActiveCard, onClick }) => {
    const isEmptyCard = !cardData
    const isActiveCardClass = isActiveCard ? "mainCard" : ""
    const vendorClass = isEmptyCard ? "newCard" : cardData.vendor

    return (
        <>
            { isActiveCard ? <p>Active Card</p> : null}
            <section className={vendorClass + ' ' + isActiveCardClass} onClick={() => onClick(cardData)}>
                <section className="top">
                    <WifiIcon color={isEmptyCard ? "#000" : wifiIconColor(cardData.vendor)} />
                    <VendorLogo vendor={isEmptyCard ? null : cardData.vendor} />
                </section>
                <h2>{isEmptyCard ? "xxxx xxxx xxxx xxxx" : cardData.card_number}</h2>
                <section className="holder">
                    <p>cardholder name</p>
                    <h3>{isEmptyCard ? "xxx xxxx" : cardData.holder_name}</h3>
                    <p>Valid thru</p>
                    <h3>{isEmptyCard ? "xx/xx" : cardData.expire_date}</h3>
                </section>
            </section>
        </>
    );
}

export default Card

const wifiIconColor = (vendor) => {
    if (vendor === VENDORS.bitcoin) {
        return "#000"
    }
    return "#fff"
}