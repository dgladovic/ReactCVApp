import React, { Component, useState } from "react";
import BasicInfo from './BasicInfo';
import EduExperience from "./EduExperience";

function Overview(){

    const [info,setInfo] = useState();

    const Hanva = (e) => {
        e.preventDefault();
        console.log('test-123',e);
    }

    return(
        <div>
            <BasicInfo onSubmit={Hanva}/>
            <EduExperience />
        </div>
    )
}

export {Overview};