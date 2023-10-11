import { queryExecute } from "../../db"; // 데이터베이스 접근! 


export async function GET(){

    
    const q = 'select * from files'
    const data = await queryExecute(q)
    return Response.json(data)
}


//이미지 받기~~~ 
export async function POST(req){
    const {title,imgUrl} = await req.json();
    const q = 'insert into files (title,imgUrl) values (?,?)'
    await queryExecute(q,[title,imgUrl]) // db데이터에 이미지 파일이 들어와야함! 
    //const imgUrl = req.nextUrl.searchParams.get('imgUrl');
    
    
    return Response.json({done:'성공!!'})
}
