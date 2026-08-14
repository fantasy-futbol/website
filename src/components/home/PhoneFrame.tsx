export default function PhoneFrame({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.5rem] border-[6px] border-[#2A2A2A] bg-[#171717] shadow-2xl shadow-black/50 ${className}`}
    >
      {children}
    </div>
  );
}
