"use client";

import { useEffect, useState } from "react";
import axios from "axios";



function Upload() {
    const [imgView, setImgView] = useState();
    const [data, setData] = useState([]);
    const [testBlob, setTestBlob] = useState();
    const uploadFile = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const obj = Object.fromEntries(formdata);//이미지파일을 가지고 있지만 코드화 해야함
        const fr = new FileReader(); //파일 읽어내는 생성자 함수
        fr.readAsDataURL(obj.upload);//이미지 파일의 정보 
        fr.addEventListener('load', () => {
            axios.post('/api/upload/files', { //db로 보내주자.
                title: obj.title,
                imgUrl: fr.result
            })
            console.log(fr.result);
            console.log(fr);
        })
        console.log(obj.upload);
    }

    const getFile = async () => {
        const d = await axios.get('/api/upload/files');


        const setD = d.data.map(obj => {
            obj.imgUrl = b64toBlob(obj.imgUrl);
            return obj;
        })

        setData(setD)
    }



    function b64toBlob(b64Data, contentType = '') {
        const image_data = atob(b64Data.split(',')[1]);

        const arraybuffer = new ArrayBuffer(image_data.length);
        const view = new Uint8Array(arraybuffer);

        for (let i = 0; i < image_data.length; i++) {
            view[i] = image_data.charCodeAt(i) & 0xff;
        }

        const blob = new Blob([arraybuffer], { type: contentType });

        return URL.createObjectURL(blob); 
    }

    

    useEffect(() => {
        getFile();
    }, [])

    return (
        <>
            <div>
                <h2>파일 업로드</h2>
                <form
                    onSubmit={uploadFile}
                    method="post"
                    encType="multipart/form-data" // 여러개가 올라가기 때문에! 
                >
                    <p><input type='text' name='title' /></p>
                    <p>
                        <input type='file' name='upload'
                            onChange={(e) => {
                                const file = e.target.files[0];
                                file && setImgView(URL.createObjectURL(file))
                                //createObjectURL 객체를 나타내는 URL이 포함된 문자열 생성
                                //&& = true 파일 업로드시 취소버튼 눌러도 오류 안남
                            }}
                        />
                        <img src={imgView} />
                    </p>
                    <p><input type='submit' value='저장' /></p>
                </form>


                <div>
                    {
                        data.map(obj => (

                            <figure key={obj.num}>
                                <img src={obj.imgUrl} alt='' />
                                <figcaption>{obj.title}</figcaption>
                            </figure>

                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Upload