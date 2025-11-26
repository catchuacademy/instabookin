import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, Car, Mail, Phone, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
          <Header />
    <section id="privacy" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">

        <Tabs defaultValue="driver" className="max-w-6xl mx-auto">
          <TabsContent value="driver">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  EC Auto Driver App Privacy Policy
                </CardTitle>
                <CardDescription>
                  Last updated: November 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>

                  <header>
            <h4 className="font-bold text-foreground">Ride EC – Earn on Wheels</h4>
            <p>Combined Privacy Policy and Driver Terms</p>
          <p>Last updated: 26/11/2025</p>
             <h4 className="font-bold text-foreground">Provided by kcatchu</h4>

        </header>

              <h2>1.Privacy Policy for Ride EC – Earn on Wheels</h2>
            <h2>1.1 Purpose and Scope</h2>
            <p> Ride EC – Earn on Wheels (“Driver App”) is a platform that allows commercial auto drivers to accept ride requests from customers using EC Auto.
            </p>
          <ul>
                       <p>This Privacy Policy explains how we collect, use, store, and protect your information.</p>
                      <p>By using the Driver App, you agree to this Policy.</p>
          </ul>

    <h2>2. Information We Collect</h2>
    <h2>2.1 Information You Provide</h2>

    <ul>
        <h2 className="text-1xl font-bold text-foreground">To create and verify your driver account, you provide:</h2>
        <p>•Mobile number</p>
        <p>•Driving licence</p>
        <p>•Vehicle registration certificate</p>
        <p>•	Commercial Auto Permit</p>
        <p>•	Insurance Certificate</p>
        <p>•	Fitness Certificate (FC)</p>
        <p>Only yellow-board commercial autos are allowed on the Ride EC platform.</p>
        <p>Document Compliance Requirements</p>
         <h2 className="text-1xl font-bold text-foreground">To operate on the platform, drivers must maintain:</h2>
        <p>•	A valid Driving Licence</p>
        <p>•	A valid RC</p>
        <p>•	A valid FC</p>
        <p>•	A valid commercial permit</p>
        <p>•	A valid insurance certificate</p>
       <p> Deactivation for Non-Compliance</p>
       <h2 className="text-1xl font-bold text-foreground">We may deactivate your driver account if:</h2>
       <p>•	Any required document expires</p>
       <p>•	Documents are invalid or fake</p>
       <p>•	You operate a white-board (private) vehicle</p>
       <p>•	You fail to update renewed documents</p>
        <h2>2.2 Information Collected Automatically  </h2>
        <h2 className="text-1xl font-bold text-foreground">We collect certain operational information to support trip delivery:</h2>
        <p>• Trip history</p>
        <p>• Pickup and drop locations</p>
        <p>• Earnings information</p>
        <p>• Ride timings</p>
        <p>•	Earnings and payment summaries</p>
        <p>• Ride acceptance and cancellation patterns</p>
         <h2 className="text-1xl font-bold text-foreground">We do not collect:</h2>
        <p>•	Aadhaar or PAN</p>
        <p>•	Bank or UPI details</p>
        <p>•	Selfie or biometrics</p>
        <p>•	Call logs</p>
        <p>•	Personal messages</p>
        <p>•	IP address</p>
        <p>•	Device model</p>
          
      
    </ul>

    <h2>3. Location Information</h2>
    <h2>3.1 Foreground and Background Location</h2>
    <ul>
       <h2 className="text-1xl font-bold text-foreground">The Driver App collects precise GPS location when you are online, including:</h2>
       <p>•	When available for rides</p>
         <p>•	When a ride is assigned</p>
          <p>•	When a trip is in progress</p>
         <p>  •	When the app is open or minimised</p>
         <p> •	When running in the background but you are on duty</p>
          <p>Why We Collect Background Location </p>
          <h2 className="text-1xl font-bold text-foreground">Location Data section:</h2>
          <p>EC Auto collects location data in the background when drivers are marked "On Duty".</p>
          <p>This background location data is required for live driver tracking, route updates,</p>
          <p>ride allocation, and safety monitoring, even when the app is closed or not in use.</p>
        <h2 className="text-1xl font-bold text-foreground"> Background location helps us:</h2>
        <p>•	Match drivers with nearby customers</p>
        <p>•	Navigate to pickup and drop points</p>
        <p>•	Provide customers with real-time tracking</p>
        <p>•	Ensure accuracy and safety of trips</p>
        <p>•	Maintain route history for disputes</p>
        <p>•	Improve safety for both drivers and passengers</p>
        <p>•	Comply with transport regulations</p>
       <h2 className="text-1xl font-bold text-foreground">  What We Do NOT Use Location For:</h2>
       <p>•	Marketing</p>
        <p>•	Selling or sharing data</p>
         <p>•	Analytics</p>
          <p>•	Social profiling</p>
           <p>How You Can Stop Location Sharing</p>
           <h2 className="text-1xl font-bold text-foreground">You may stop sharing location by:</h2>
           <p>•	Going offline</p>
            <p>•	Closing the Driver App</p>
             <p>•	Disabling background location permission</p>
             <p>(Note: ride services will not function if disabled)</p>
    </ul>
    

    <h2>4. Third-Party Services We Use</h2>
    
    <ul>
        <h2 className="text-1xl font-bold text-foreground">The Driver App integrates:</h2>
       <p>•	Google Maps – for navigation and accurate routing</p>
         <p>•	Firebase – for login verification and push notifications</p>
          <p>We do not use marketing or analytics tools.</p>
          

    </ul>

    <h2>5. How We Use Driver Information</h2>
     <h2 className="text-1xl font-bold text-foreground">Your data is used to:</h2>
    <p>•	Create and verify your account</p>
    <p>•	Validate driving and vehicle documents</p>
    <p>•	Assign ride requests</p>
    <p>•	Support navigation and routing</p>
    <p>•	Show your live location to customers</p>
    <p>•	Calculate earnings</p>
    <p>•	Maintain trip safety</p>
    <p>•	Prevent fraud and misuse</p>
    <p>•	Resolve ride-related complaints</p>
    <p>We do not sell your information to anyone.</p>

    <h2>6. Sharing of Driver Information</h2>
    <h2>6.1 Shared With Customers</h2>
    <h2 className="text-1xl font-bold text-foreground">To complete a ride, customers may see:</h2>
         <p>•	Driver name</p>
         <p>•	Phone number</p>
         <p>•	Vehicle number and details</p>
         <p>•	Live location</p>
         <p>•	Trip status</p>
         <h2>6.2 Shared With Service Providers</h2>
        <h2 className="text-1xl font-bold text-foreground"> We share limited data with:</h2>
        <p>•	Document verification partners</p>
        <p>•	Map and navigation providers</p>
        <p>•	Notification service providers</p>
        <h2>6.3 Legal and Safety Disclosures</h2>
       <h2 className="text-1xl font-bold text-foreground">We may share information when required to:</h2>
      <p>•	Respond to lawful authority requests</p>
      <p>•	Investigate safety or fraud incidents</p>
      <p>•	Support dispute resolution</p>

    <h2>7. Data Storage and Protection</h2>
    <p>Your information is stored securely on protected servers.</p>
    <p>We use industry-standard measures to protect against unauthorized access, misuse, or loss.</p>
    
    <h2>8. Data Retention</h2>
    <p>We retain driver data for 1 year after account deletion or inactivity.</p>
    <h2 className="text-1xl font-bold text-foreground">Some data may be kept longer for:</h2>
    <p>•	Legal compliance</p>
    <p>•	Dispute resolution</p>
    <p>•	Safety records</p>


     <h2>9. Your Choices and Rights</h2>
     <h2 className="text-1xl font-bold text-foreground">Drivers may:</h2>
     <p>•	Update account details</p>
     <p>•	View trip and earnings history</p>
     <p>•	Request account deletion</p>
     <p>•	Withdraw permissions (may disable app functions)</p>

     <h2>10. Drivers Under 18</h2>
     <p>The Driver App is only for drivers aged 18 and above with a valid commercial driving licence.</p>

     <h2>11. Changes to This Policy</h2>
     <p>This Privacy Policy may be updated.</p>
     <p>The updated version will always be available on our website or in the app.</p>
 
     <h2>12. Contact & Grievance Redressal</h2>
          <h2 className="text-1xl font-bold text-foreground">Grievance Officer:</h2>

       <p>ArunKanth</p>
         <p>Email: info@catchuhealthcare.com</p>
           <p>Phone: 7735736629</p>

            <h2 className="text-1xl font-bold text-foreground">Address:</h2>
            <p>No 19 B, Second floor
              Vijay Complex
              Vilankuruchi Road
              Saravanampatti
              Coimbatore
              Tamil Nadu 641035</p>
        


                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Commitment to Privacy</h3>
                <p className="text-sm text-muted-foreground">
                  EC Auto is committed to protecting your privacy and maintaining transparency about our data practices. 
                  These policies are designed to comply with Google Play Store requirements and applicable privacy laws. 
                  For specific questions about our privacy practices, please contact us using the information provided above.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
          <Footer />
    </div>
  );
}