import { PrimaryButton } from '../atoms/PrimaryButton';

export const TopPage = () => {
  return (
    // <NotLoginLayout>
      <div className="text-center">
        <h1 className="text-7xl logo">スケジュール管理APP</h1>
        <p className="pt-[10vh] text-5xl">
          あなたのスケジュールを管理するアプリです
        </p>
        <div className="pt-[20vh]">
         <PrimaryButton >ログイン</PrimaryButton>
        </div>
      </div>
    // </NotLoginLayout>
  );
};
