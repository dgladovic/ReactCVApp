/* eslint-disable default-case */
import React, { Component } from 'react';

class EduExperience extends Component {
    constructor() {
        super();

        this.state = {
            schoolName: '',
            title: '',
            startDate: '',
            endDate: '',
            textarea: ''
        };
    }

    handleChange(e) {
        if (e.target.id in this.state) {
            this.setState({
                [`${e.target.id}`]: e.target.value
            })
        }
    }

    render() {

        const { schoolName, title, startDate, endDate, textarea } = this.state;

        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                width: "400px"
            }}>
                <label htmlFor="name">School Name: </label>
                <input id="schoolName" type="text" onChange={(e) => this.handleChange(e)} value={schoolName}></input>

                <label htmlFor="email">Title: </label>
                <input id="title" type="text" onChange={(e) => this.handleChange(e)} value={title}></input>

                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <label htmlFor="phone">Start Date: </label>
                    <input id="startDate" type="date"
                        onChange={(e) => this.handleChange(e)}
                        value={startDate}
                    ></input>

                    <label htmlFor="phone">End Date: </label>
                    <input id="endDate" type="date"
                        onChange={(e) => this.handleChange(e)}
                        value={endDate}
                    ></input>
                </div>

                <label htmlFor="textarea">Title: </label>
                <textarea id='textarea' value={textarea}
                    onChange={(e) => this.handleChange(e)}
                ></textarea>

            </div>
        )
    }

}

export default EduExperience;