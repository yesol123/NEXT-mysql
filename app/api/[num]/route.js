
import {queryExecute} from '../db';


export async function DELETE(req,{params}) {
    await queryExecute(`delete from Table_test where num=?`,[params.num]) // where 이랑 params.뒤에 폴더명이라서 [num]으로 폴더명을 설정해줘야함 
    const data = await queryExecute(`select * from Table_test `)


    return Response.json(data);
}





export async function PUT(req,{params}) {
    
    const data = await req.json();
    const q = await queryExecute(`update Table_test set name=? where num=?`,[data.name,params.num])
    const getData = await queryExecute(`select * from Table_test`);

    return Response.json(getData);
}

