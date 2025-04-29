import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginUserState } from '../../store/LoginUserState';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
// import { login } from '../../api/Login';

const LoginLayout = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useRecoilState(loginUserState); // stateとsetstateを使用

  const handleLogout = () => {
    setLoginUser({
      id: 0,
      name: '',
    });
    navigate('/login'); // ログアウト後にログインページに遷移
  };

  if (loginUser.id === 0) return <Navigate to="/login" />; // ログインしていない場合はログインページにリダイレクト

  return (
    <div className="relative">
      <header className="fixed top-0 right-0 left-0 bg-white">
        <div className="flex justify-between container mx-auto leading-[50px]">
          <p className="logo">
            <Link to="/">スケジュール管理APP</Link>
          </p>
          <nav>
            <ul className="flex gap-5 text-lime-800">
              <li className='flex items-center'>
                <FaUser />
                {loginUser.name}
              </li>
              <li className='flex items-center'>
                <MdLogout />
                <a onClick={handleLogout}>ログアウト</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="pt-[50px] bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default LoginLayout;
