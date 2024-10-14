interface TextCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TextCard = ({ children }: TextCardProps) => {
  return <div className="bg-gray-700 border rounded-md">{children}</div>;
};
