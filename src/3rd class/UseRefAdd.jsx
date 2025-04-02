import { useRef, useState } from "react";


export default function UseRefAdd() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });

  const { name, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      name: '강민지',
      email: 'strongminji@gmail.com'
    },
    {
      id: 2,
      name: '정소울',
      email: 'soulright@bssm.hs.kr'
    },
    {
      id: 3,
      name: '이승현',
      email: 'victorynow@example.com'
    }
  ]);

  const nextId = useRef(4);
  const inputRef = useRef();


  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };


  const onAddUser = () => {
    const newUser = {
      id: nextId.current,
      name,
      email,
    };
    setUsers([...users, newUser]);
    nextId.current += 1;
    setInputs({ name: '', email: '' });
    inputRef.current.focus(); // 초기화 후 포커스 이동
  };

  // 초기화 함수
  const onReset = () => {
    setInputs({ name: '', email: '' });
    inputRef.current.focus(); // 포커스 이동
  };

  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        value={inputs.name}
        ref={inputRef}
        placeholder="이름을 입력"
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일을 입력"
      />
      <button onClick={onAddUser}>확인</button>
      <button onClick={onReset}>초기화</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
