import React from 'react'
// import st from '../page.module.css'; 모듈방법은 충돌 방지! .module 규칙~ css는 모듈을 사용할 수도 있고 그냥 할 수도 있음! 선택사항
import '../common.css';
import  '../style.scss';

function page() {
  return (
    <>
    {/* <div className={st.txt}> page</div> 별칭 이름과 같이 사용해야 함. st라는 별칭 안에들어있는 txt*/}
    <div  className="txt">글로벌스타이</div>
    <img src="/next.svg"/>
    <button className='btn'>scss btn</button>
    </>
  )
}

export default page