export default function Spinner() {
  return (
    <div className="flex gap-2 w-full">
      <div className="w-5 h-5 rounded-full animate-pulse bg-pink"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-pink"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-pink"></div>
    </div>
  );
}
