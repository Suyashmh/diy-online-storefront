import { useState } from "react";
import { ShoppingCart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  storeAvailability: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card 
      className="group cursor-pointer transition-all duration-200 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4">
        <div className="relative mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md bg-muted"
          />
          {discount > 0 && (
            <Badge variant="destructive" className="absolute top-2 left-2">
              -{discount}%
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="secondary" className="absolute top-2 right-2">
              Out of Stock
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="font-medium text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-warning text-warning" />
            <span>{product.rating}</span>
            <span>({product.reviews})</span>
          </div>

          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>Available in {product.storeAvailability} stores</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-primary">
              RM {product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                RM {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          variant="cart"
          size="sm"
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
}