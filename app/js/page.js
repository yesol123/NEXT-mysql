"use client"; 
//컴포넌트로 사용하는 애들은 use client를 사용. next : ssr방식 자체에서 클릭이벤트 지원하지 않음
import { useRouter } from 'next/navigation'; //뒤에 router를 navigation으로 바꿔줘야 오류 안남
import React, { useState } from 'react'

function Page() {
  const router = useRouter(); //라우터 훅을 정의 해주고~  
  const [count,setCount] = useState(0);

  const move = () =>{
    console.log('click');
    //router.push('/'); //push라는 메소드로 이동하고 싶은경로 지정해주면~ 홈페이지 이동
    router.push(`/js/${count}`); 
  }

  return (
    <div>
      page
      <button onClick={move}>클릭이벤트</button>
      <button onClick={()=>{setCount(count+1)}}>{count}</button>
    </div>
  )
}

export default Page