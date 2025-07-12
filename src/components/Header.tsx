import { useState } from "react";
import { Search, ShoppingCart, Menu, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  cartItems: number;
  onMenuClick: () => void;
}

export function Header({ cartItems, onMenuClick }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={onMenuClick}
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MD</span>
              </div>
              <span className="font-bold text-xl text-foreground">MR. DIY</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search for tools, hardware, home & garden..."
                className="pl-10 pr-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <MapPin className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {cartItems > 99 ? "99+" : cartItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="pb-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}