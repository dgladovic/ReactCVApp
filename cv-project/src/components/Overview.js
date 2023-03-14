import React, { Component, useState } from "react";
import BasicInfo from './BasicInfo';
import EduExperience from "./EduExperience";

function Overview(){

    const [info,setInfo] = useState(12);

    const hanva = (e) => {
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
        console.log(formData,'odavde');
    }

    return(
        <div>
            <BasicInfo hanva={hanva} ex={info}/>
            <EduExperience />
        </div>
    )
}

export {Overview};