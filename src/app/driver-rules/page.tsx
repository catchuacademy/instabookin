import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users,Shield,Car } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section id="privacy" className="py-20 bg-muted/30 mt-20">
        <div className="container mx-auto px-4">

          <Tabs defaultValue="driver" className="max-w-6xl mx-auto">
            <TabsContent value="driver">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    EC Auto Passenger App Privacy Policy
                  </CardTitle>
                  <CardDescription>
                    Last updated: November 2025
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 text-2xl leading-relaxed">
                  {/* 👇 Your content 그대로 */}
                  <h2 className="font-bold text-center">
                    ERODE CITY AUTO
                  </h2>
                   <h2 className="font-bold text-front">RULES & REGULATIONS</h2>
                  <p>Last updated: 26/11/2025</p>

                   <p>1. The auto must be operated strictly based on the mobile meter fare.</p>
                   <p>2. Drivers must operate the vehicle wearing the prescribed uniform.</p>
                   <p>3. Drivers should speak politely and respectfully with passengers.</p>
                    <p>4. Smoking or consumption of tobacco, betel nut, alcohol, or any intoxicating substances in front of passengers is strictly prohibited.</p>
                   <p>5. All vehicle-related documents must be maintained properly and in compliance with legal requirements.</p>
                   <p>6. While accepting a ride, friends or other persons should not be seated in the front seat.</p>
                   <p>7. Personal mobile numbers must not be shared with passengers while collecting fares.</p>
                   <p>8. Only the official Erode City Auto identity card must be used.</p>
                   <p>9. Drivers must maintain unity and cordial relations with fellow drivers.</p>
                   <p>10. Rides received through the rental platform must be posted after two minutes in the records by eligible drivers.</p>
                   <p>11. Drivers within the first two-kilometer radius shall be given priority for four minutes; thereafter, drivers outside the radius may register for the ride.</p>
                   <p>12. Religion, caste, politics, or organizational movements are personal matters, and no such views shall be brought into the Erode City Auto group.</p>
                   <p>I solemnly pledge to abide by all the above rules and regulations and work together in unity and cooperation with all members of Erode City Auto to strengthen our livelihood and ensure disciplined operations.</p>
                   <h2 className="font-bold text-end">Yours sincerely,</h2>
                    <h2 className="font-bold text-end">Member Name / Signature: _______________________________</h2>                
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
      </section>

      <Footer />
    </div>
  );
}
