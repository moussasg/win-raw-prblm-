import React from 'react'
import classes from "./index.module.css"
import Toutmrq from '../../constant/toutemarque'
import Products from "../../components/afichtout/afichtout"
export default function Nproducts() { 
  return (
    <>
      {Toutmrq.map((el) => (
      <div className={classes.Prod}>
       <Products Ourp={el}/>  
      </div>
      ))}
</>
  )}


