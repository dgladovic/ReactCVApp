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

        this.Haru = this.props.onSubmit;
    }

    Haru(){
        console.log('eee');
    }

    handleChange(e){
        if (e.target.id in this.state) {
            this.setState({
                [`${e.target.id}`]: e.target.value
            })
        }
    }

    sendData(e){
        e.preventDefault();
        const formData = {};
        for(let i = 0; i < e.target.length - 1; i++){
            Object.defineProperty(formData,e.target[i].id,{
                value: e.target[i].value,
                writable: true 
            });
            if(e.target[i].value !== '')
                formData[`${e.target[i].id}`]= e.target[i].value;
        }
        console.log(formData);
        return formData;
        }


    render(){

        const {name,email,phone} = this.state;

        return(
            <form onSubmit={this.sendData}>
            <div style={{ display: "flex", 
            flexDirection: "column",
            margin: "auto",
            width: "400px",
            marginBottom: "18px",
            borderBottom: "solid black 2px",
            paddingBottom: "22px"
            }}>
                <label htmlFor="name">Name: </label>
                <input id="name" name="name" type="text" onChange={ (e) => this.handleChange(e)} value={name}></input>

                <label htmlFor="email">E-Mail: </label>
                <input id="email" type="email" onChange={(e) => this.handleChange(e)} value={email}></input>

                <label htmlFor="phone">Phone No. : </label>
                <input id="phone" type="tel" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
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