type CategoryFilterProps = {
    categories: string[];
    selected: string;
    onSelect: (category: string) => void;
  };
  
  export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
    return (
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-4 py-2 text-sm rounded-full ${
              selected === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    );
  }
  