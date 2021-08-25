import React from 'react'
import JsonData from './exam-data.json'

console.log(JsonData[20].products[0].id)

const Stock = () => {

    return (
        <div className="section">
            <div className="container">
                <div className="content">
                    <p className="titleform">Fetch product on json file</p>
                    <p className="mt-4">Product name was editabled price</p>
                    {JsonData.filter( json1 => json1.is_editable_price === false)
                             .map( json1 => { 
                                return <p className="titlexp">- {json1.name}</p> })
                    }
                    <p className="mt-4">SUM of products weight</p>
                    {JsonData.filter( json2 => json2.is_editable_price === false)
                             .map(json2 => json2.products.map(products => {
                                return <p>{products.weight}</p>
                             }))
                    }
                </div>
            </div>
        </div>
    )
}

export default Stock
