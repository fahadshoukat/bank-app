import React from 'react'
import Accounts from '../accounts/Accounts'
import Transactions from '../transactions/Transactions'

const Cards = () => {
  return (
    <div className='d-flex justify-content-evenly'>
        <Accounts />
        <Transactions />
    </div>
  )
}

export default Cards