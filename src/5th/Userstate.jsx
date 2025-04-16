import { useEffect, useState } from "react";

const Modal = ({ msg }) => {
  useEffect(() => {
    return () => {
      alert("모달 언마운트");
    };
  }, []);
  return <div>{msg}</div>;
};

export default function UseEffecct1() {
  const [inputs, setInputs] = useState({ name: "", nickname: "" });
  const [depname, setDepname] = useState("");
  const [modal, setModal] = useState(true); //모달을 보이게 함
  const [msg, setMsg] = useState("상미쌤의 프론트 실습!");
  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    console.log("마운트 될때만 실행");
    setTimeout(() => setModal(false), 4000);
  }, []);
  useEffect(() => {
    console.log("변경전", depname);
    return () => {
      console.log("변경후", depname);
    };
  }, [depname]);
  return (
    <div>
      <div>
        <input type="text" onChange={onChange} name="name" />
        <input type="text" onChange={onChange} name="nickname" />
        <button onClick={() => setDepname(inputs.name)}>이름</button>
      </div>
      <div>
        <div>
          <b>이름 : </b>
          {inputs.name}
        </div>
        <div>
          <b>닉네임 : </b>
          {inputs.nickname}
        </div>
        {modal && <Modal msg={msg} />}
      </div>
    </div>
  );
}
