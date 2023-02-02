import React from 'react'
import Toutmrq from '../../constant/toutemarque';
import Products from "../../pages/products/nproducts"
export default function Smart() {
return (
<div>
    {Toutmrq.map((el,el1) => (
    <Products key={el1} Ourp={el}/>   
    ))}
</div>
)
}

    