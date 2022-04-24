import React from 'react'
import { VENDORS } from '../model/vendors';
import { BitcoinIcon, ChainIcon, EvilIcon, NinjaIcon } from '../assets/VendorIcons';

export const VendorLogo = ({ vendor }) => {
    if (vendor === VENDORS.bitcoin) {
        return <BitcoinIcon />
    } else if (vendor === VENDORS.chain) {
        return <ChainIcon />
    } else if (vendor === VENDORS.evil) {
        return <EvilIcon />
    } else if (vendor === VENDORS.ninja) {
        return <NinjaIcon />
    }
    
    return <BitcoinIcon />
}