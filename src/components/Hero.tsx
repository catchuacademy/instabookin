import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Coming Soon to Play Store
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Smart Auto Booking Made Simple
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                EC Auto connects drivers and passengers seamlessly. Book rides instantly, 
                earn money driving, and experience the future of transportation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <Play className="h-5 w-5" />
                For Passengers
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-5 w-5" />
                For Drivers
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Trips Completed</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1619645683482-9ca8d8ba0e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBib29raW5nJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1ODEwMzc0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="EC Auto mobile app interface"
                className="w-full h-150 rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}