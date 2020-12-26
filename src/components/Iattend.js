import React, {Component} from "react";
import QRCode from 'qrcode.react';

function Iattend() {
    return(
        <div>
            <QRCode
    classcode="123456"
    longitude="123456"
    latitude="123456"
    includeMargin={true}
  />
        </div>
    );
}

export default Iattend;