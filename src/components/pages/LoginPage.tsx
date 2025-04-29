import { PrimaryButton } from '../atoms/PrimaryButton';

export const LoginPage = () => {
  return (
    <div className="w-[500px] bg-white rounded-lg py-10">
      <form className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-3xl font-bold text-lime-800 text-center">
          ログイン
        </h1>
        <div className="w-[80%]">
          <input
            type="text"
            placeholder="email"
            className="w-full border-4 border-solid border-lime-800 rounded-md p-2"
          />
        </div>
        <div className="w-[80%]">
          <input
            type="text"
            placeholder="password"
            className="w-full border-4 border-solid border-lime-800 rounded-md p-2"
          />
        </div>
        <PrimaryButton>ログイン</PrimaryButton>
      </form>
    </div>
  );
};
