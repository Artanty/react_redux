import React from 'react';
import ApprovalCard from "../comments/approvalCard";
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./Spinner";

class Geolocation extends React.Component {
    constructor(props){
        super(props);

        this.state = { lat: null, errorMessage: ''};

    }
    render(){

        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request" />;

    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }
}

export default Geolocation;
