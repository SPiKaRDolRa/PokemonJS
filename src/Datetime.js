import React from 'react'
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/th';

const Datetime = () => {

    const dayOfMonth = moment().daysInMonth();  //ใช้ momentjs เข้าฟังก์ชั่นนำเวลาปัจจุบันคำนวณหาวันในเดือนนี้
    const quarterOfYear = moment().quarter();   //ใช้ momentjs เข้าฟังก์ชั่นนำเวลาปัจจุบันคำนวณหาไตรมาสในปีนี้
    const timeStamp = moment().unix();          //ใช้ momentjs เข้าฟังก์ชั่นแปลง datetime เป็น unix timestamp

    return (
        <div className="section">
            <div className="container">
                <div className="content">
                    <p className="titleform">Local Timezone Format </p>
                    <div className="text-center mt-5">
                        <Moment id="localtime" interval={1000} local format="YYYY-MM-DDThh:mm:ssZ" />
                    </div>
                    <div className="text-center mt-5">
                        <p>Normal : <hexp><Moment local format="DD-MM-YYYY hh:mm" /></hexp></p>
                        <p>Thai : <hexp><Moment local locale="th" add={{y: 543}} format="ddddที่ DD MMMM พศ.YYYY"></Moment></hexp></p>
                        <p>Days on this month : <hexp>{dayOfMonth}</hexp></p>
                        <p>Quarter on this year : <hexp>{quarterOfYear}</hexp></p>
                        <p>Unix timestamp : <hexp>{timeStamp}</hexp></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Datetime
