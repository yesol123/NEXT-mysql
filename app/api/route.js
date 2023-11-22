const fs = require('fs'); 

export async function GET(){

    fs.readFileSync('./db/data.json');
    return Response.json(JSON.parse(data));
}

export async function POST(req){ //req에 던져지는 내용... 비동기 일어남
    let a = await req.json();
    const data = JSON.parse(fs.readFileSync('./db/data.json')); //기존데이터에
    fs.writeFileSync('./db/data.json',JSON.stringify([...data,a])) //새로운 데이터 쌓아주기! 
    console.log(a);

    return Response.json(a);
}