import React from 'react'
import style from './style.module.css'
import Logo from '../../../assets/svg/cart.svg?react'

const {basketContainer , basketQuantity} = style
// const {basketContainer , basketQuantity} = style
const HeaderBascet = () => {
  return (
    <div className={basketContainer}>
        <Logo title="basket title"/>
        <div className={basketQuantity}>0</div>
    </div>
  )
}

export default HeaderBascet