import { useRecoilValue } from "recoil";
import { loginUserState } from "../../store/LoginUserState";

export const Calender = () => {
    const loginUser = useRecoilValue(loginUserState); // 値のみ使用
    
  return (
    <div>
        <p>{loginUser.id}</p>
        <p>{loginUser.name}</p>
    </div>
  )
};
