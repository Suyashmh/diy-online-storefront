import { Button } from "@/components/ui/button";
import { ShoppingBag, Truck, Shield, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Your One-Stop{" "}
                <span className="text-primary">DIY Store</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                From tools to home essentials, find everything you need for your DIY projects. Now available online with store pickup!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                <ShoppingBag className="h-5 w-5" />
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Find Stores
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Free Delivery</p>
                  <p className="text-xs text-muted-foreground">Orders over RM100</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Quality Guarantee</p>
                  <p className="text-xs text-muted-foreground">30-day returns</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Store Pickup</p>
                  <p className="text-xs text-muted-foreground">Same day available</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Headphones className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">24/7 Support</p>
                  <p className="text-xs text-muted-foreground">Always here to help</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="DIY tools and hardware supplies"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}