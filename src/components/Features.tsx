import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Shield, 
  Star, 
  Navigation,
  CreditCard,
  PhoneCall,
  Users,
  TrendingUp,
  Award,
  CheckCircle
} from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need in One App
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're looking for a ride or wanting to earn money driving, 
            EC Auto provides all the tools you need for a seamless experience.
          </p>
        </div>

        {/* For Passengers */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Badge variant="default" className="text-lg px-4 py-2">
              For Passengers
            </Badge>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1612014414973-a665d5688c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHdhaXRpbmclMjBmb3IlMjB0YXhpfGVufDF8fHx8MTc1ODEwMzc0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Customer using EC Auto app"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Book Rides Instantly</h3>
              <p className="text-lg text-muted-foreground">
                Get connected with nearby drivers in seconds. Track your ride in real-time 
                and enjoy safe, reliable transportation whenever you need it.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Real-time Tracking</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Know exactly where your driver is and when they'll arrive
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Multiple Payment Options</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Pay with cash, card, or digital wallet
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Rate & Review</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Help maintain quality by rating your experience
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Safe & Secure</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Verified drivers and 24/7 support for your safety
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* For Drivers */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              For Drivers
            </Badge>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-2xl font-bold">Start Earning Today</h3>
              <p className="text-lg text-muted-foreground">
                Turn your car into a source of income. Set your own schedule, 
                work when you want, and earn money while helping people get around.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Flexible Earnings</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Earn competitive rates with instant payouts
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Work Your Schedule</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Drive when you want, for as long as you want
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Navigation className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Smart Navigation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Get optimal routes and avoid traffic
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">24/7 Support</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Get help whenever you need it
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642331395578-62fc20996c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXhpJTIwZHJpdmVyJTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NTgxMDM3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Driver using EC Auto driver app"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-20 pt-16 border-t border-border">
          <h3 className="text-2xl font-bold text-center mb-12">Why Choose EC Auto?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">Growing Community</h4>
              <p className="text-muted-foreground">
                Join thousands of satisfied users and drivers in our growing network
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">Competitive Pricing</h4>
              <p className="text-muted-foreground">
                Fair pricing for riders and great earnings for drivers
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">Quality Service</h4>
              <p className="text-muted-foreground">
                Commitment to excellence in every ride and interaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}