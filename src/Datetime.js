import React from 'react'

const Datetime = () => {

    let now = new Date();
    let basicFormatUTC = datetime.utc().format();
    console.log(basicFormatUTC)  // Output: 2020-07-21T07:24:06Z
 


    return (
        <div className="section">
            <div className="container">
                <div className="content">
                <h1 className="text-center" style={{paddingTop: "30%"}}>Datatime</h1>
                </div>
            </div>
        </div>
    )
}

export default Datetime
