//UseRefCRUD.jsx
import {useRef, useState} from "react";
import "../style.css";
export default function UseRefCRUD(){
	const [inputs, setInputs] = useState({
    name : '',
    email : '',
  });
    const {name, email} = inputs;
	  const [users, setUsers] = useState([
        {
          id: 1,
          name: '강민지',
          email: 'strongminji@gmail.com',
          selected : false, //3-1. 속성 추가
        },
        {
          id: 2,
          name: '정소울',
          email: 'soulright@bssm.hs.kr',
          selected : false,
        },
        {
          id: 3,
          name: '이승현',
          email: 'victorynow@example.com',
          selected : false,
        }
      ]);
    const nextId = useRef(4);//1-1. useRef로 4 설정
    const inputRef = useRef(); //1-2. useRef로 설정
    // nextId값 1 증가
    const onChange =(e)=>{ // 7. input에 반영될 state 수정
      const {name,value} = e.target;
          setInputs({
          ...inputs,
          [name]: value,});
      }
//   const onhandleDelete = ( )=>{  }

const onToggle = (id) => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };




return (
<div>
<input name = "name" onChange={onChange } value={inputs.name} ref={inputRef} placeholder = "이름을 입력" />
<input name = "email" onChange={onChange} value = {inputs.email} placeholder = "이메일을 입력" />

<button onClick ={()=>{
    alert(`현재값은 ${inputRef.current.value}`)
    setUsers({...users, inputs})
    }}>확인</button>
<button onClick={()=>{
    setInputs({
    name : '',
    email : '',
    })
    inputRef.current.focus()
}}>초기화</button>

 {/* 2-1. 추가버튼 만들기 */}
 <button onClick={()=> {setUsers([...users,{id:nextId.current, name:inputs.name,email:inputs.email}])
    nextId.current += 1
    console.log(users)
    }}>등록</button>
 {/* 2-2. map을 이용해서 조회 만들기 */}
 <ul>
        {users.map((user) => (
          <li>
            {user.id}
            <span
        onClick={() => onToggle(user.id)}
        style={{
          color: user.active ? 'green' : 'black',
          cursor: 'pointer',
          fontWeight: user.active ? 'bold' : 'normal'
        }}
      >
        {user.name}
      </span>{' '}
            <button onClick={() => {
                setUsers(users.filter((item) => item.id !== user.id));
                nextId.current = user.id
            
            }
            
            }>
                삭제</button>

            <button onClick={() => {setUsers(
            users.map(item => user.id === item.id ?
            {
                ...item , name:inputs.name , email:inputs.email
            }
            : item
            )

            )}}>수정</button>
          </li>
        ))}
</ul>

  {/* 3-1. users배열에 속성 추가하기 */}
  {/* 3-2. 이름클릭시 색깔변경 하기 (onToggle()작성) */} 
  
  

  {/* 3-3. 수정버튼 만들고 users 배열 수정하기 */}

</div>
);

}