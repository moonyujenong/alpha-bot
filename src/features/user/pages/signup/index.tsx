import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import user from "../../api/user.ts";

const Signup = () => {
  const location = useLocation();
  const [address, setAddress] = useState("");
  const [isAbled, setIsAbled] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (location.state) {
      setAddress(location.state?.address);
    }
  }, [location]);

  const checkUserId = async () => {
    try {
      const res = await user.checkUserId();

      if (res?.code === "SUCCESS") {
        if (res?.data.existRegisterId === true) {
          setIsAbled(true);
          alert("가능합니다.");
        } else {
          alert("현재 ID는 불가능합니다.");
        }
      } else {
        console.log("fail, try again");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const rgstSignUp = async () => {
    if (!isAbled) {
      return alert("닉네임 중복을 확인해주세요.");
    }

    try {
      if (confirm("가입하시겠습니까?")) {
        const res = await user.signUp({
          user_id: userId,
        });

        if (res?.code === "SUCCESS") {
          if (email) {
            updateEmail();
          } else {
            setIsAbled(false);
            window.location.replace("/");
          }
        } else {
          console.log("fail, try again");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateEmail = async () => {
    try {
      const res = await user.updateEmail({
        user_id: userId,
        email: email,
      });

      if (res?.code === "SUCCESS") {
        setIsAbled(false);
        window.location.replace("/");
      } else {
        console.log("fail, try again");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{ paddingTop: "80px", width: "80%", margin: "0 auto" }}>
      <h1>Sign Up page</h1>
      <h3>{address}</h3>
      <div>
        <label>nickname 필수</label>
        <input
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <button onClick={checkUserId}>중복확인</button>
      </div>
      <br />
      <div>
        <label>email 선택</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <br />
      <button onClick={rgstSignUp}>Sign Up</button>
    </div>
  );
};

export default Signup;
