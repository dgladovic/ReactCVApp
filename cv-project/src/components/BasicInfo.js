/* eslint-disable default-case */
import React, {Component} from 'react';

class BasicInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: ''
        };
    }

    handleChange(e){
        if (e.target.id in this.state) {
            this.setState({
                [`${e.target.id}`]: e.target.value
            })
        }
    }

    render(){

        const {name,email,phone} = this.state;
        const {hanva,ex} = this.props;

        return(
            <form onSubmit={hanva}>
            <div style={{ display: "flex", 
            flexDirection: "column",
            margin: "auto",
            width: "400px",
            marginBottom: "18px",
            borderBottom: "solid black 2px",
            paddingBottom: "22px"
            }}>
                <label htmlFor="name">Name: </label>
                <input id="name" name="name" type="text" onChange={ (e) => this.handleChange(e)} value={ex}></input>

                <label htmlFor="email">E-Mail: </label>
                <input id="email" type="email" onChange={(e) => this.handleChange(e)} value={email}></input>

                <label htmlFor="phone">Phone No. : </label>
                <input id="phone" type="number" 
                    onChange={(e) => this.handleChange(e)}
                    value={phone}
                ></input>
                <button type='submit'>HEJ!</button>
            </div>
            </form>
        )
    }

}

export default BasicInfo;