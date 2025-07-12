import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { Product } from "@/components/ProductCard";
import { products } from "@/data/products";

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItems={cartItemCount} 
        onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      
      <Navigation 
        isOpen={isMenuOpen}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      
      <main>
        <HeroSection />
        
        <section className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {selectedCategory === "all" ? "All Products" : selectedCategory}
            </h2>
            <p className="text-muted-foreground">
              {filteredProducts.length} products available
            </p>
          </div>
          
          <ProductGrid 
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        </section>
      </main>

      <footer className="bg-secondary mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">MR. DIY</h3>
              <p className="text-muted-foreground text-sm">
                Your trusted partner for all DIY projects. Quality tools and supplies for every home improvement need.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Contact Us</li>
                <li>Store Locator</li>
                <li>Returns & Exchanges</li>
                <li>FAQ</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Sustainability</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>YouTube</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 MR. DIY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
