
import {queryExecute}  from "./db";


export async function GET() {
    const host = process.env.NEXT_PUBLIC_NODE_HOST;
    console.log(host);

    const data = await queryExecute(`select * from Table_test`)


    //const data = await queryExecute(`delete from Table_test where num=10`) 
    //`delete from Table_test where num=10`
    //(`insert into Table_test (id,name,email) value ('ff','김예솔','yesolg90@gmail.com')` ) //'SELECT * from Table_test'
    //`update Table_test set email='gnsdud529@gmail.com' where num=18`

    // const data = await queryExecute(`
    //     create table contact(
    //         name varchar(30),
    //         email varchar (100),
    //         contents text,
    //         num int not null auto_increment,
    //         primary key(num)
    //     )
    // // `)
    // const data = await queryExecute(`drop table contact`);
    return Response.json(data);

}

export async function POST(req) {
    const { name, email, id } = await req.json();
    //보낼때 sql 문서로 보내고 value 값이 있다면 뒤에다가 넣어준다~
    const data = await queryExecute(`insert into Table_test (id,name,email) values (?,?,?)`, [id, name, email])
    return Response.json([]);
}

