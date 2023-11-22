"use client";
import React, { useEffect } from 'react'

function Contact() {

    useEffect(()=>{
        fetch('/api',{
            method:'post',
            body:JSON.stringify({b:3000}),
            headers:{
                'Content-type' : 'application/json', //받아올 데이터 형식 : json
                'accent': '*/*' //접금할 수 있는 문서 : 모든 문서
            }
        })//중괄호 안에서 내용 정해줘야댐
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
        })
    },[])

    //get
//     fetch('/api',{
            
//     })
//     .then(res=>res.json())
//     .then(res=>{
//         console.log(res);
//     })
// },[])

  return (
    <div>Contact</div>
  )
}

export default Contact