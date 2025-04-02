// 중첩된 객체를 Immer로 변경
import React, { useState } from "react";
import { produce } from "immer";

export default function Test() {
  const data = {
    profile: {
      nickname: "",
      email: ""
    },
  };

  const [user, setUser] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((currentUser) =>
      produce(currentUser, (draft) => {
        draft.profile[name] = value;
      })
    );
  };

  // 간단한 form UI 구성
  return (
    <div style={{ padding: "20px" }}>
      <h2>프로필 수정</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>이름: </label>
          <input
            type="text"
            name="nickname"
            value={user.profile.nickname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>이메일: </label>
          <input
            type="email"
            name="email"
            value={user.profile.email}
            onChange={handleChange}
          />
        </div>
      </form>

      <hr />

      {/* 변경된 결과를 바로 확인할 수 있도록 출력 */}
      <h3>입력 결과</h3>
      <p>이름: {user.profile.nickname}</p>
      <p>이메일: {user.profile.email}</p>
    </div>
  );
}
