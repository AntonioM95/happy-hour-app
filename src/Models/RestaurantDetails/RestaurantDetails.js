import React, { Component } from 'react';
class TestClass extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Test-Wrapper">
                <div className="img-roller">

                </div>
                <div className="row">
                <div className="day-specials-data col-6">
                    <label>Daily Specials</label>
                    <dl>
                    <dt>Monday</dt>
                    <dd>$1 Margaritas 5pm - 10pm</dd>
                    <dd>1/2 off wine 12pm - 5pm</dd>
                    <dt>Tuesday</dt>
                    <dd>$1 Margaritas 5pm - 10pm</dd>
                    <dt>Wednesday</dt>
                    <dd>$1 Margaritas 5pm - 10pmk</dd>
                    <dt>Thursday</dt>
                    <dd>$1 Margaritas 5pm - 10pm</dd>
                    <dt>Friday</dt>
                    <dd>$1 Margaritas 5pm - 10pm</dd>
                    <dt>Saturday</dt>
                    <dd>$1 Margaritas 5pm - 10pm</dd>
                    <dt>Sunday</dt>
                    <dd>$1 Margaritas 5pm - 10pm</dd>
                    </dl> 

                </div>
                <div className="col-6">
                    <dl>
                    <dt>Address</dt>
                    <dd>123 Elmo St Fort Dane, FL 32547</dd>
                    <dt>Phone Number</dt>
                    <dd>850-788-7654</dd>
                    </dl> 
                </div>
                </div>
            </div>
        )
    }
}

export default TestClass;