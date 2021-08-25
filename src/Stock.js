import React, { useState } from 'react'
import JsonData from './exam-data.json'

const Stock = () => {

    return (
        <div className="section">
            <div className="container">
                <div className="content">
                    <div className="text-center">
                        <p className="titleform">Fetch product on json file</p>
                        <p className="mt-4">Products name was editabled price</p>
                        {JsonData.filter( json1 => json1.is_editable_price === false)
                                    .map( json1 => { 
                                    return <p className="titlexp"> {json1.name}</p> })
                        }
                        <p className="mt-4">Total weight of products was editabled price</p>
                        {JsonData.filter( json2 => json2.is_editable_price === false)
                                    .map( json2 => json2.Total = json2.products
                                    .reduce((sum, cur) => sum + cur.weight, 0)) 
                                        .reduce( (total, get) => {
                                            return <p className="titlexp"> {total + get}</p>
                                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stock
