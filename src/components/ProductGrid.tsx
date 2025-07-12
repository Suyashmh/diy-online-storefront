import { ProductCard, Product } from "./ProductCard";
import { useToast } from "@/hooks/use-toast";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}