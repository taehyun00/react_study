/* InputTest1.jsx */
import { useState } from "react";

export default function InputTest1() {
    // useState로 객체 초기화
    const [user, setUser] = useState({ id: 0, name: "", email: "", nick: "" });
    const [isset, setisset] = useState(0);


    // 입력값 변경 핸들러
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form>
                <h1>로그인</h1>

                <li>
                    이름
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    닉네임
                    <input
                        type="text"
                        name="nick"
                        value={user.nick}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    이메일
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </li>
                {console.log(user)}
                <li>
                    <button type="button" onClick={() => setisset(!isset)}>확인</button>
                    <button type="button" onClick={() => setisset(!isset)}>취소</button>
                </li>
            </form>
            {isset ? <div>
                입력된 이름은 <span>{user.name}</span>이고 닉네임은 <span>{user.nick}</span> 입력된 이메일은 <span>{user.email}</span>
            </div> : <></> }
            
        </div>
    );
}
