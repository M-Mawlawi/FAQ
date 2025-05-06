type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
  };
  
  export default function SearchBar({ value, onChange }: SearchBarProps) {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mb-6 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search FAQs..."
      />
    );
  }
  