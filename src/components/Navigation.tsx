import { Button } from "@/components/ui/button";

const categories = [
  "Tools & Hardware",
  "Home & Garden",
  "Electrical",
  "Plumbing",
  "Paint & Supplies",
  "Storage & Organization",
  "Automotive",
  "Safety & Security"
];

interface NavigationProps {
  isOpen: boolean;
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

export function Navigation({ isOpen, onCategorySelect, selectedCategory }: NavigationProps) {
  return (
    <nav className={`bg-secondary border-b ${isOpen ? 'block' : 'hidden md:block'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-2 py-3 overflow-x-auto">
          <Button
            variant={selectedCategory === "all" ? "default" : "ghost"}
            size="sm"
            onClick={() => onCategorySelect("all")}
            className="whitespace-nowrap"
          >
            All Products
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              size="sm"
              onClick={() => onCategorySelect(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}