import { Input } from '../atoms/Input';
import { PrimaryButton } from '../atoms/PrimaryButton';

export const LoginPage = () => {
  return (
    <div className="w-[500px] bg-white rounded-lg py-10">
      <form className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-3xl font-bold text-lime-800 text-center">
          ログイン
        </h1>
        <div className="w-[80%]">
          <Input type='text' placeholder='email'/>
        </div>
        <div className="w-[80%]">
        <Input type='text' placeholder='password'/>
        </div>
        <PrimaryButton>ログイン</PrimaryButton>
      </form>
    </div>
  );
};
