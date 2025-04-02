
import { useState } from 'react'
import '../App.css'

function ConditionR1() {

  const [login,islogin] = useState(false);

  return (
    <>
      <div className='wrapp'>
        <p className=''> {login ? "환영합니다" : null}</p>
        {login ? (<button onClick={()=> islogin(false)} className='btn'>로그아웃</button>):(<button onClick={()=> islogin(true)} className='btn'>로그인</button>)}

       </div>
       <hr/>
        <h2>모두함께 리액트 공부</h2>
    </>
  )
}

export default ConditionR1
