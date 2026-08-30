
export default function Sort({label, column, onClick}: {label: string, column: string, onClick: any}) {
  return (
    <button key={column} onClick={onClick} className="col-span-1 cursor-pointer font-medium border-1 py-1 border-mist-200 text-center">{label}</button>
  );
  
}