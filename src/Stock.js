import React, { useState } from 'react'
import JsonData from './exam-data.json'

const Stock = () => {

    return (
        <div className="section">
            <div className="container">
                <div className="content">
                    <div className="text-center">
                        <p className="titleform">Fetch Product On Json File</p>
                        <p className="mt-5">Products name was editabled price</p>
                        {JsonData.filter( json1 => json1.is_editable_price === false)
                                    .map( json1 => { 
                                    return <hexp> {json1.name}</hexp> })
                        }
                        <p className="mt-4">Total weight of products was editabled price</p>
                        {JsonData.filter( json2 => json2.is_editable_price === false)
                                    .map( json2 => json2.Total = json2.products
                                    .reduce((sum, cur) => sum + cur.weight, 0)) 
                                        .reduce( (total, get) => {
                                            return <hexp> {total + get}</hexp>
                                        })
                        }
                        <p className="mt-5">From json file : <a id="refJson" className="button" target="_blank" href="https://github.com/SPiKaRDolRa/pokemonjs/blob/main/src/exam-data.json">Json</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stock
