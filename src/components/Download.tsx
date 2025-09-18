import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Smartphone, Download as DownloadIcon, Bell } from "lucide-react";

export function Download() {
  return (
    <section id="download" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Coming Soon
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get EC Auto on Your Phone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our mobile apps are currently in development and will be available on Google Play Store soon. 
            Stay tuned for the official launch!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center p-8">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>EC Auto - Passenger App</CardTitle>
              <CardDescription className="text-base">
                Book rides, track drivers, and manage your trips with ease
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Features include:</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Instant ride booking</li>
                  <li>• Real-time tracking</li>
                  <li>• Multiple payment options</li>
                  <li>• Trip history</li>
                  <li>• Driver ratings</li>
                </ul>
              </div>
              <Button className="w-full" disabled>
                <DownloadIcon className="h-4 w-4 mr-2" />
                Coming to Play Store
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-8">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>EC Auto - Driver App</CardTitle>
              <CardDescription className="text-base">
                Start earning by driving with our easy-to-use driver platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Features include:</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Trip management</li>
                  <li>• Earnings dashboard</li>
                  <li>• Navigation integration</li>
                  <li>• Instant payouts</li>
                  <li>• Driver support</li>
                </ul>
              </div>
              <Button className="w-full" disabled>
                <DownloadIcon className="h-4 w-4 mr-2" />
                Coming to Play Store
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <Bell className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Be the First to Know</h3>
            <p className="text-muted-foreground mb-6">
              Sign up to get notified when EC Auto launches on Google Play Store
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
              />
              <Button>
                Notify Me
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              We'll only notify you about the app launch. No spam, we promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}