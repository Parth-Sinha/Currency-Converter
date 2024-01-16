import React, { useId, useState } from 'react'

function InputBox({
    label,
    currencySelected,
    currencyOptions = {},
    amount,
    onAmountChange,
    onCurrencyChange,
    amountDisabled = false,
    currencyDisabled = false
}) {
    const [selectedCurrency, setSelectedCurrency] = useState(currencySelected);
    const amountId = useId()
    const options = Object.keys(currencyOptions)
    return (
        <div className='flex justify-between px-3 py-2 bg-white rounded-lg m-2 mb-3'>
            {/* This is a from block */}
            <div>
                {/* This div is for number input */}
                <div className='py-4 text-gray-950'>
                    <label htmlFor={amountId}>{label}</label>
                </div>
                <input type='number' disabled={amountDisabled} value={amount} onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}></input>
            </div>
            <div>
                <div className='py-4 text-gray-950'>
                    <label htmlFor='selectoptionfrom'>Currency</label>
                </div>
                <select name='selectoptionfrom' className='bg-gray-50' disabled={currencyDisabled} value={currencySelected} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}>
                    {options.map((currency)=>(<option key={currency} value={currency}>{currency}</option>))}
                </select>
            </div>
        </div>
    )
}

export default InputBox
