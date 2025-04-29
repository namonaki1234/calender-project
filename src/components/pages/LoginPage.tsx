import { ChangeEvent, FormEvent, useState } from 'react';
import { LoginInfoType } from '../../types/Login';
import { Input } from '../atoms/Input';
import { PrimaryButton } from '../atoms/PrimaryButton';
import { login } from '../../api/Login';
import { useSetRecoilState } from 'recoil';
import { loginUserState } from '../../store/LoginUserState';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  // const loginUser = useRecoilValue(loginUserState); 値のみ使用
  // const [loginUser, setLoginUser] = useRecoilState(loginUserState); // usestateと同様にstate,setstateを使用
  const setLoginUser = useSetRecoilState(loginUserState); // setstateのみ使用
  const [errorMessage, setErrorMessage] = useState('');
  const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
    email: '',
    password: '',
  });

  const changeLoginInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const resUser = login(loginInfo);
      setLoginUser({
        id: resUser.id,
        name: resUser.name,
      });
      navigate('/calender'); // ログイン成功後にカレンダーページに遷移
    } catch {
      setErrorMessage('ログインに失敗しました');
    }
  };

  return (
    <div className="w-[500px] bg-white rounded-lg py-10">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center justify-center gap-10"
      >
        <h1 className="text-3xl font-bold text-lime-800 text-center">
          ログイン
        </h1>
        {errorMessage !== '' && (
          <div className="p-5 bg-red-500 text-white w-[80%] rounded-lg">
            {errorMessage}
          </div>
        )}
        <div className="w-[80%]">
          <Input
            name="email"
            value={loginInfo.email}
            type="text"
            placeholder="email"
            onChange={changeLoginInfo}
          />
        </div>
        <div className="w-[80%]">
          <Input
            name="password"
            value={loginInfo.password}
            type="text"
            placeholder="password"
            onChange={changeLoginInfo}
          />
        </div>
        <PrimaryButton onClick={() => null}>ログイン</PrimaryButton>
      </form>
    </div>
  );
};
