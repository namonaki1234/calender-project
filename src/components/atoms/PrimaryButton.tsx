type PropasType = {
  children: React.ReactNode; };

export const PrimaryButton = ({ children }: PropasType) => {
  return (
    <button className="bg-lime-800 text-white p-4 text-lg rounded-lg">
    {children}
  </button>
  )
}
