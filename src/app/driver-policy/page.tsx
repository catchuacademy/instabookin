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
                           
            <h2> 1.Purpose and Scope of Ride EC – Earn on Wheels</h2>
            <p>This Privacy Policy explains how the Ride EC – Earn on Wheels driver application (the "Driver App" of EC Auto) collects, uses, processes, and protects information provided by drivers who register and operate on the platform. By using the Driver App, you agree to the practices described in this Policy.
            </p>
          <ul>
            <h2 className="text-1xl font-bold text-foreground">This Policy applies to:</h2>
                      <p>•Drivers registered on the Ride EC – Earn on Wheels app</p>
                      <p>•All features, services, and interactions within the EC Auto Driver platform</p>
          </ul>

    <h2>2. Information Collected by Ride EC – Earn on Wheels</h2>
    <h2> 2.1 Information You Provide to EC Auto Driver App</h2>

    <ul>
        <h2 className="text-1xl font-bold text-foreground">To register and provide services as a driver, you may provide the following:</h2>
        <p>•Mobile number</p>
        <p>•Driving licence</p>
        <p>•Vehicle registration certificate</p>
        <p>•Vehicle insurance</p>
        <p>These details are used to create and verify your driver account and ensure compliance with transport regulations.</p>
        <h2 className="text-1xl font-bold text-foreground">We do not collect:</h2>
        <p>•Aadhaar</p>
        <p>•PAN</p>
        <p>•Bank account or UPI details</p>
        <p>•Selfie verification</p>
        <h2>2.2 Information Collected Automatically  </h2>
        <h2 className="text-1xl font-bold text-foreground">The Driver App collects operational data necessary to provide services, such as:</h2>
        <p>•Trip history</p>
        <p>•Pickup and drop locations</p>
        <p>•Earnings information</p>
        <p>•Ride timings</p>
        <p>•Ride acceptance and cancellation patterns</p>
        <p>This information supports trip accuracy, safety, compliance, and customer experience.</p>
         <h2 className="text-1xl font-bold text-foreground">We do not collect:</h2>
        <p>•Device model</p>
        <p>•Operating system details</p>
        <p>•Crash logs</p>
        <p>•IP address</p>
        <p>•OTP auto-read SMS</p>
        <p>•Call logs</p>
        <p>•Personal messages</p>
          
        <h2>2.3 Location Data Collected by Ride EC – Earn on Wheels</h2>
        <h2 className="text-1xl font-bold text-foreground">The Driver App collects precise GPS location only when:</h2>
         <p>•You are online</p>
         <p>•You are available for rides</p>
         <p>•The app is open and active</p>
         <h2 className="text-1xl font-bold text-foreground"> Location data is used for:</h2>
         <p>•Matching drivers with customers</p>
         <p>•Navigating to customer locations</p>
         <p>•Real-time trip monitoring</p>
         <p>•Showing your live position to customers for safety</p>
         <h2 className="text-1xl font-bold text-foreground">We do not collect location:</h2>
          <p>In the background</p>
         <p>•When the app is closed</p>
          <p>•When the app is minimised</p>
         <p>•When you switch to another app</p>
         <h2>2.4 Information from Third Party Services</h2>
         <h2 className="text-1xl font-bold text-foreground">The Driver App uses third-party services to support essential functions:</h2>
          <p>•Google Maps for navigation and location accuracy</p>
         <p>•Firebase for login, authentication, and notifications</p>
         <p>No analytics tools, cloud calling services, or payment gateway integrations are used in the Driver App.</p>    
    </ul>

    <h2>3. How Ride EC – Earn on Wheels Uses Driver Information</h2>
    <ul>
       <h2 className="text-1xl font-bold text-foreground">Your information may be used for the following purposes:</h2>
       <p>•Driver onboarding and account management</p>
         <p>•Document verification</p>
          <p>•Assigning trips and tracking trip progress</p>
         <p>•Providing navigation support</p>
         <p>•Sharing driver location with customers</p>
          <p>•Processing and showing driver earnings</p>
         <p>•Sending important updates and notifications</p>
          <p>•Ensuring safety and regulatory compliance</p>
            <p>•Improving app performance and driver experience</p>
            <p>We do not sell or share your information for marketing purposes.</p>
    </ul>
    

    <h2> 4. Sharing of Driver Information by EC Auto</h2>
    <h2>4.1 Sharing with Customers</h2>
    <ul>
        <h2 className="text-1xl font-bold text-foreground">To complete rides safely and transparently, customers may see the following:</h2>
       <p>•Driver name</p>
         <p>•Driver mobile number</p>
          <p>•Vehicle details</p>
         <p>Live location during the trip</p>
         <h2>4.2 Sharing with Service Providers</h2>
        <h2 className="text-1xl font-bold text-foreground">  We may share limited information with authorised partners who help us operate the platform, including:</h2>
         <p>•Document verification partners</p>
         <p>•Map and navigation providers</p>
          <p>•Cloud and notification service providers (Firebase)</p>
         <p>These partners are required to maintain strict data protection practices.</p>
         <h2>4.3 Sharing for Safety and Support</h2>
         <p>In case of incidents, disputes, or support requests, we may share relevant trip information with authorised safety or support teams.</p>
         <h2>4.4 Sharing with Legal Authorities</h2>
          <p>• Information is shared only:</p>
         <p>• When required by law</p>
          <p>• When responding to valid legal orders</p>
         <p>When necessary to ensure the safety of drivers or passengers</p>

    </ul>

    <h2>5. Storage and Protection of Driver Information</h2>
    <p>We securely store all driver information on protected servers. We use industry-standard security measures to prevent unauthorised access, misuse, loss, or alteration of your data.</p>
    <p>While no system can provide absolute security, we take all reasonable and appropriate measures to safeguard your information.</p>

    <h2>6. Your Rights and Choices as an EC Auto Driver</h2>
    <h2 className="text-1xl font-bold text-foreground">You may:</h2>
         <p>• View and update your driver account details</p>
         <p>• Go offline at any time to stop sharing location</p>
         <p>• Contact support for corrections or clarifications</p>
         <p>• Request deletion of your driver account</p>
         <p>Decline permissions (though some features may not work without them)</p>

    <h2> 7. Data Retention by Ride EC – Earn on Wheels</h2>
    <p>Driver information is retained for one year after account deletion or inactivity.</p>
    <h2 className="text-1xl font-bold text-foreground">Some information may be stored longer if required for:</h2>
     <p>• Legal compliance</p>
         <p>• Safety and incident review</p>
          <p>• Verification or auditing</p>
         <p>• After the retention period, your data is securely deleted or anonymised.</p>
     

    <h2>8. Drivers Under 18</h2>
    <p>The Driver App is only for individuals aged 18 and above with a valid driving licence. We do not knowingly register or collect information from minors.</p>

     <h2>9. Changes to This Privacy Policy</h2>
     <p>We may update this Privacy Policy periodically to reflect changes in law or service updates. The "Last Updated" date will change accordingly. In some cases, drivers may be notified within the app.</p>

     <h2>10. Contact Us and Grievance Redressal</h2>
     <p>For questions, complaints, or concerns related to this Privacy Policy, you may contact:</p>
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