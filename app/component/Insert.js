"use client";  //사용자 PC에서 랜더링 해서 보여주는 것 
import axios from 'axios';
import React from 'react'
import { useRouter } from 'next/navigation';

function Insert() {
    const navi = useRouter();
    const insertFn = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData);

        axios.post('/api', values);
        navi.push('./list');
    }
    return (
        <>
            <form onSubmit={insertFn}>
                <p><input type='text' name='id' /></p>
                <p><input type='text' name='name' /></p>
                <p><input type='email' name='email' /></p>
                <p><input type='submit' value='저장' /></p>
            </form>

        </>
    )
}

export default Insert