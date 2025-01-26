export default function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {title && <h2 className="text-2xl font-serif mb-4">{title}</h2>}
      <div className="font-sans">{children}</div>
    </div>
  );
}
