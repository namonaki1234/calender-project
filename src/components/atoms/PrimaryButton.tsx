type PropsType = {
  onClick: () => void;
  children: React.ReactNode; };

export const PrimaryButton = ({ children, onClick }: PropsType) => {
  return (
    <button className="bg-lime-800 text-white p-4 text-lg rounded-lg" onClick={onClick}>
    {children}
  </button>
  )
}
