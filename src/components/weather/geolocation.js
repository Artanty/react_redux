import React from 'react';
import ApprovalCard from "../comments/approvalCard";


class Geolocation extends React.Component {
    render(){
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );
        return <div>Latitude: </div>;
    }
}

export default Geolocation;
