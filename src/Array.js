    import React from 'react'

const Array = () => {

    const randomArray = [];
    while(randomArray.length < ((Math.random()*10)-1)){
        var r = Math.floor((Math.random() * 10));
            randomArray.push(r);
    }
    const stringRandomArray = randomArray.toString();

    const max = Math.max.apply(null, randomArray); // get the max of the array
    randomArray.splice(randomArray.indexOf(max), 1); // remove max from the array
    const secMax = Math.max.apply(null, randomArray); // get the 2nd max

    return (
        <div className="section">
            <div className="container">
                <div className="content">
                    <p className="titleform">Hardcore Random of Array</p>
                        <div className="text-center">
                            <p className="mt-4">Array random size <hexp>"0-9"</hexp></p>
                            <p>Array random <hexp>"0-9"</hexp> for elements</p>
                            <p>Array : <hexp>[ {stringRandomArray} ]</hexp></p>
                            <a id="refJson" href="">Random !</a>
                            <p id="output" className="mt-5">Output : {secMax} </p>
                            <h6 className="source mt-5">Source by</h6>
                            <p>1. Source 2nd of max element of array</p>
                            <p>2. If array is emtry - return "null"</p>
                            <p>3. If the max has repeat - return "just one"</p>
                            <p>4. If array just have 1 element - return index "0"</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Array
