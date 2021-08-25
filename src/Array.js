import React from 'react'

const Array = () => {

    /* สร้างอาเรยย์ขึ้นมาแล้วแลนดอมค่าทั้งขนาด และ ข้อมูล โดยฟังก์ชั่น while */
    const randomArray = [];
    while(randomArray.length < ((Math.random()*10)-1)){
        var r = Math.floor((Math.random() * 10));
            randomArray.push(r);
    }
    const stringRandomArray = randomArray.toString();       //เก็บค่านำไปแสดงเป็นสตริงบนหน้าเว็บ      

    /* ฟังก์ชั่นรับค่าอาเรย์แล้วนำข้อมูลทุกตัวมาเปรียบเทียบ แล้วลบข้อมูลที่ซ้ำกัน */
    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
      }
    const unique = randomArray.filter(onlyUnique);          //เก็บค่าตัวแปลที่ทำการแยกข้อมูลซ้ำแล้วไปใช้ต่อ
    
    /* เข้าฟังก์ชั่น if 2ชั้น โดยการเริ่มจากสร้างตัวแปลที่เก็บค่า "null" ไว้เพื่อแสดงหากไม่มีค่าในอาเรย์ส่งมา */
    var secMax = "null";
    if (unique.length !== 0){                               //เงื่อนไขถ้าหากอาเรย์ไม่ว่าง ให้ทำงานทั้งหมดครบเงื่อนไข
        if (unique.length > 1) {                            //เงื่อนไขซ้อน ถ้าหากอาเรย์มีค่าส่งมาแค่ 1ตัว ไม่ต้องทำงานฟังก์ชั่นด้านใน
            const max = Math.max.apply(null, unique);       //ดึงค่ามากที่สุดในอาเรย์
            unique.splice(unique.indexOf(max), 1);          //ลบค่าที่มากทีสุดที่ดึงค่ามาจากฟังก์ชั่นด้านบน ออกจากอาเรย์
        }
        secMax = Math.max.apply(null, unique);              //ดึงค่ามากที่สุดในอาเรย์ รอบ2 (ซึ่งก็คือดึงค่ามากสุดอันดับ 2)
    }

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
                            <p id="output" className="mt-5">Output : <output>{secMax}</output></p>
                            <hexp><p className="mt-5">Source by</p></hexp>
                            <p>1. Source <hexp>"2nd"</hexp> of max element of array</p>
                            <p>2. If array is emtry - return <hexp>"null"</hexp></p>
                            <p>3. If the max has repeat - return <hexp>"just one"</hexp></p>
                            <p>4. If array just have 1 element - return index <hexp>"0"</hexp></p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Array