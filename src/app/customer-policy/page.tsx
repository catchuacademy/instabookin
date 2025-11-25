import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, Car, Mail, Phone, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
        <div className="min-h-screen bg-background">
              <Header />
    <section id="privacy" className="py-20 bg-muted/30 mt-5">
      <div className="container mx-auto px-4">

        <Tabs defaultValue="passenger" className="max-w-6xl mx-auto">

          <TabsContent value="passenger">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  EC Auto Passenger App Privacy Policy
                </CardTitle>
                <CardDescription>
                  Last updated: November 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
        <header>
            <h4 className="font-bold text-foreground">EC Auto – Instant Ride</h4>
            <p>Combined Privacy Policy and Customer Terms</p>
          <p>Last updated: 25/11/2025</p>
             <h4 className="font-bold text-foreground">Provided by kcatchu</h4>

        </header>
        
        <section>
            <h2>1.Privacy Policy for EC Auto – Instant Ride</h2>
            <h2>1.1 Purpose and Scope</h2>
            <p>This Privacy Policy explains how the EC Auto – Instant Ride customer application collects, uses, stores, and protects information from customers who book rides using the EC Auto platform. By using the Customer App, you agree to the practices described in this Policy.</p>
            <ul>
                <h2 className="text-1xl font-bold text-foreground">This Policy applies to:</h2>
                <p>•	All customers using the EC Auto – Instant Ride app</p>
                <p>•	All features, services, and interactions within the EC Auto platform</p>
                 <h2>1.2 Information We Collect</h2>
                 <h2>1.2.1 Information You Provide</h2>
                 <h4 className="font-bold text-foreground">You may provide the following information while registering or booking rides:</h4>
                 <p>•Name</p>
                 <p>•Mobile number</p>
                 <p>•Email address</p>
                 <p>•Pickup and drop location</p>
                 <h4 className="font-bold text-foreground">We do not collect: </h4>
                 <p>•	Aadhaar</p>
                 <p>•	PAN</p>
                 <p>•	Bank or card details</p>
                 <p>•	Biometric data</p>
                 <h2>1.2.2 Information Collected Automatically</h2>
                 <h4 className="font-bold text-foreground"> We collect essential app and ride information such as:</h4>
                  <p>•   Ride history</p>
                  <p>•	Pickup and drop points</p>
                  <p>•	App usage data</p>
                  <p>•	Performance and crash information (device controlled)</p>
                  <h2>1.2.3 Location Information</h2>
                   <h4 className="font-bold text-foreground">Your GPS location is collected only when:                    </h4>
                    <p>•	Selecting pickup location</p>
                    <p>•	Tracking your ride</p>
                    <p>•	Showing nearby drivers</p>
                    <h4 className="font-bold text-foreground"> We do not collect location:</h4>
                    <p>•	When the app is closed</p>
                    <p>•	When the app is not in use</p>
                    <p>•	In the background</p>
                    <h2>1.2.4 Third Party Services</h2>
                    <h4 className="font-bold text-foreground">We use:                    </h4>
                    <p>•	Google Maps for navigation and map services</p>
                    <p>•	Firebase for OTP login, authentication, and notifications</p>
                     <h2>1.3 How We Use Customer Information</h2>
                    <h4 className="font-bold text-foreground">Your information is used for:</h4>
                    <p>•	Creating and managing your account</p>
                    <p>•	Booking and managing rides</p>
                    <p>•	Providing navigation and real time tracking</p>
                    <p>•	Safety, support, and dispute resolution</p>
                    <p>•	Improving app performance</p>
                    <p>•	Fraud prevention and compliance</p>
                    <p>We do not sell your information.</p>
                    <h2>1.4 Sharing of Customer Information</h2>
                    <h2>1.4.1 With Drivers</h2>
                    <h4 className="font-bold text-foreground">To complete your ride, the following may be shared with the assigned driver:</h4>
                    <p>•	Name</p>
                    <p>•	Mobile number</p>
                    <p>•	Pickup and drop location</p>
                    <p>•	Trip details</p>
                     <h2>1.4.2 With Service Providers</h2>
                    <h4 className="font-bold text-foreground">We may share data with:</h4>
                    <p>•	Map and navigation partners</p>
                    <p>•	Cloud service providers</p>
                    <p>•	SMS and notification gateways</p>
                    <h2>1.4.3 For Safety, Support, and Compliance</h2>
                    <h4 className="font-bold text-foreground">We may share trip information when required for:</h4>
                    <p>•	Dispute resolution</p>
                    <p>•	Safety review</p>
                    <p>•	Lawful requests by authorities</p>
                    <h2>1.5 Data Storage and Security</h2>
                    <p>We store customer data securely using industry standard security practices. While no system can guarantee full security, we take strong measures to protect your data.</p>
                    <h2>1.6 Your Rights</h2>
                    <h4 className="font-bold text-foreground">Customers may:</h4>
                    <p>•	Update account information</p>
                    <p>•	Enable or disable permissions</p>
                    <p>•	Request account deletion</p>
                    <p>•	Access ride history</p>
                    <p>•	Report concerns to customer support</p>
                    <h2>1.7 Data Retention</h2>
                    <p>Customer information is kept for one year after account deletion or inactivity unless legally required longer.After this period, data is deleted or anonymised.</p>
                    <h2>1.8 Children’s Privacy</h2>
                    <p> The EC Auto app is not meant for users under 18. We do not knowingly collect information from minors.</p>
                    <h2> 1.9 Updates to This Privacy Policy</h2>
                    <p>  We may update this Policy. The “Last Updated” date will change accordingly.</p>
                    
            </ul>
        </section>
        
        <section>
            <h2>2.Customer Terms and Conditions</h2>
            <h4 className="font-bold text-foreground">2.1 Introduction</h4>
            <p>These Terms apply to all customers using the EC Auto – Instant Ride app for booking rides. By using the app, you agree to these Terms.</p>

            <ul>
                <h2>2.2 Eligibility to Use the App</h2>
                 <h4 className="font-bold text-foreground">To use the app, a customer must:</h4>
                 <p>•	Be at least 18 years old</p>
                 <p>•	Use a valid mobile number</p>
                 <p>•	Follow all rules of the platform</p>
                 <p>Violation may lead to account restrictions.</p>
                 <h2>2.3 Account Creation and Security</h2>
                 <p>•	You must register using your own mobile number.</p>
                 <p>•	You are responsible for maintaining the secrecy of OTPs.</p>
                 <p>•	You must not allow others to use your account.</p>
                 <p>•	Report suspicious activity immediately.</p>
                 <h2>2.4 Booking Rides</h2>
                 <h4 className="font-bold text-foreground">Customers must:</h4>
                 <p>•	Enter accurate pickup and drop details</p>
                 <p>•	Be ready when the driver arrives</p>
                 <p>•	Behave respectfully</p>
                 <p>EC Auto is a platform that connects customers with independent drivers.</p>
                 <h2>2.5 Payments and Charges</h2>
                 <p> •	Fares may be shown before booking</p>
                 <p>•	Additional charges may apply for waiting, tolls, or distance</p>
                 <p>•	Payments are made directly to the driver</p>
                 <p>•	EC Auto is not responsible for payment disputes</p>
                 <h2>2.6 Cancellations</h2>
                 <p>•	Customers may cancel before the driver arrives  </p>
                 <p>•	Frequent cancellations may lead to limitations</p>
                 <p>•	Cancelling after the driver reaches pickup may incur penalties</p>
                 <h2>2.7 Customer Responsibilities</h2>
                 <h4 className="font-bold text-foreground"> Customers agree to:</h4>
                 <p>•	Provide accurate trip details</p>
                 <p>•	Maintain respectful behaviour</p>
                 <p>•	Not misuse or manipulate the app</p>
                 <p>•	Avoid harassment or unlawful behaviour</p>
                 <p>•	Not make fake bookings or use fraudulent actions</p>
                 <h2>2.8 Driver Conduct and Safety</h2>
                 <h4 className="font-bold text-foreground">Drivers are expected to:</h4>
                 <p>•	Hold valid commercial documents</p>
                 <p>•	Drive safely and responsibly</p>
                 <p>•	Maintain clean vehicles</p>
                 <p>Safety concerns should be reported immediately via support.</p>
                 <h2> 2.9 Platform Rights</h2>
                 <h4 className="font-bold text-foreground"> EC Auto may:</h4>
                 <p>•	Modify or remove app features</p>
                 <p>•	Suspend or terminate accounts</p>
                 <p>•	Cancel rides under special circumstances</p>
                 <p>•	Take action against fraud or misuse</p>
                 <h2>2.10 Data Protection</h2>
                 <p>Customer data is protected according to the EC Auto Privacy Policy.By using the app, you consent to data processing as described there.</p>
                 <h2>2.11 Liability</h2>
                 <h4 className="font-bold text-foreground">EC Auto is a connecting platform and is not responsible for:</h4>
                <p>•	Driver behaviour</p>
                <p>•	Loss or theft of belongings</p>
                <p>•	Delays due to traffic or external factors</p>
                <p>•	Accidents not caused by EC Auto systems</p>
                <p>We assist in disputes but do not guarantee solutions.</p>
                <h2>2.12 Suspension and Termination</h2>
                <h4 className="font-bold text-foreground">Your account may be suspended if you:</h4>
                <p>•	Misuse the platform</p>
                <p>•	Harass or abuse drivers</p>
                <p>•	Repeatedly cancel rides without valid reasons</p>
                <p>•	Engage in fraud or unsafe behaviour</p>
                <h2>2.13 Dispute Resolution</h2>
                <p>For concerns regarding rides, drivers, fares, or app issues, customers may contact support. Disputes will be handled fairly.</p>
                <h2>2.14 Contact and Grievance Redressal</h2>
                  <h4 className="font-bold text-foreground">For questions or complaints:</h4>
                <div style={{ marginTop: '14px', marginBottom: '16px' }}>
                <p><strong>Email:</strong> info@catchuhealthcare.com</p>
                <p className="mt-2"><strong>Phone number:</strong> +91 77357 36629</p>
                </div>
            </ul>
        </section>
        
       
        
              <section>
                <h4 className="font-bold text-foreground">Grievance Officer:</h4>
                <p>ArunKanth</p>
                <p>Email: info@catchuhealthcare.com</p>
                <p>Phone: 7735736629</p>
                <p>Address:
                  No 19 B, Second floor
                  Vijay Complex
                  Vilankuruchi Road
                  Saravanampatti
                  Coimbatore
                  Tamil Nadu 641035</p>
                 
              </section>
        
        
    </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="driver">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  EC Auto Driver App Privacy Policy
                </CardTitle>
                <CardDescription>
                  Last updated: December 2024 | Effective Date: Upon App Launch
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-sm max-w-none">
                  <h3>1. Information We Collect</h3>
                  <h4>Personal Information:</h4>
                  <ul>
                    <li>Full name, email address, and phone number</li>
                    <li>Driver's license and registration documents</li>
                    <li>Vehicle information (make, model, year, license plate)</li>
                    <li>Insurance documentation</li>
                    <li>Tax identification information</li>
                    <li>Bank account details for payments</li>
                    <li>Background check results (where legally required)</li>
                    <li>Profile photo and vehicle photos</li>
                  </ul>
                  
                  <h4>Location Information:</h4>
                  <ul>
                    <li>Real-time location while online and during trips</li>
                    <li>Location history and driving patterns</li>
                    <li>Route information and navigation data</li>
                  </ul>
                  
                  <h4>Driving and Earnings Data:</h4>
                  <ul>
                    <li>Trip details, duration, and distances</li>
                    <li>Earnings, tips, and payment history</li>
                    <li>Driving behavior and performance metrics</li>
                    <li>Vehicle telematics (if enabled)</li>
                    <li>Passenger ratings and feedback</li>
                  </ul>

                  <h3>2. How We Use Your Information</h3>
                  <ul>
                    <li>Verify your identity and eligibility to drive</li>
                    <li>Match you with nearby ride requests</li>
                    <li>Process payments and maintain earnings records</li>
                    <li>Provide navigation and route optimization</li>
                    <li>Monitor service quality and safety</li>
                    <li>Provide driver support and resolve issues</li>
                    <li>Generate tax documents and comply with regulations</li>
                    <li>Improve driver experience and app functionality</li>
                    <li>Investigate safety incidents and policy violations</li>
                    <li>Provide insurance and background check services</li>
                  </ul>

                  <h3>3. Information Sharing</h3>
                  <p>We share your information as follows:</p>
                  <ul>
                    <li><strong>With Passengers:</strong> Name, photo, vehicle info, and location for trip coordination</li>
                    <li><strong>Verification Partners:</strong> Background check and identity verification services</li>
                    <li><strong>Payment Processors:</strong> Bank and payment information for earnings processing</li>
                    <li><strong>Insurance Providers:</strong> Trip and driving data for coverage purposes</li>
                    <li><strong>Government Agencies:</strong> Tax information and regulatory compliance data</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect safety</li>
                    <li><strong>Service Providers:</strong> Technology and support service providers</li>
                  </ul>

                  <h3>4. Driver-Specific Data Security</h3>
                  <ul>
                    <li>Enhanced security for sensitive driver documents</li>
                    <li>Secure handling of financial and tax information</li>
                    <li>Protected storage of background check results</li>
                    <li>Encrypted transmission of location and trip data</li>
                    <li>Regular security reviews of driver data access</li>
                  </ul>

                  <h3>5. Your Rights as a Driver</h3>
                  <ul>
                    <li><strong>Access:</strong> View all data we have about you and your driving</li>
                    <li><strong>Correction:</strong> Update your personal and vehicle information</li>
                    <li><strong>Deletion:</strong> Request account deletion (subject to legal requirements)</li>
                    <li><strong>Earnings Data:</strong> Export your earnings and trip history</li>
                    <li><strong>Location Control:</strong> Manage location sharing when offline</li>
                    <li><strong>Communication:</strong> Opt out of promotional communications</li>
                  </ul>

                  <h3>6. Data Retention for Drivers</h3>
                  <ul>
                    <li>Driver account data: Until account deletion or as required by law</li>
                    <li>Trip and earnings data: 7 years for tax and regulatory compliance</li>
                    <li>Background check results: As required by local regulations</li>
                    <li>Vehicle and insurance documents: Duration of driving eligibility</li>
                    <li>Safety incident reports: As required by law or insurance</li>
                  </ul>

                  <h3>7. Driver Verification and Background Checks</h3>
                  <p>We conduct background checks and identity verification as required by law. This may include:</p>
                  <ul>
                    <li>Criminal background checks</li>
                    <li>Driving record verification</li>
                    <li>Identity document verification</li>
                    <li>Vehicle registration and insurance verification</li>
                  </ul>
                  <p>These checks are performed by third-party services and results are stored securely.</p>

                  <h3>8. Earnings and Tax Information</h3>
                  <ul>
                    <li>We collect tax identification information for earnings reporting</li>
                    <li>Earnings data is reported to tax authorities as required by law</li>
                    <li>You can access your earnings history and tax documents through the app</li>
                    <li>We may share earnings information with tax preparation services you authorize</li>
                  </ul>

                  <h3>9. Driver Safety and Monitoring</h3>
                  <p>To ensure passenger safety and service quality, we may:</p>
                  <ul>
                    <li>Monitor driving patterns and behavior</li>
                    <li>Review passenger feedback and ratings</li>
                    <li>Investigate safety incidents or policy violations</li>
                    <li>Use telematics data (if you consent)</li>
                    <li>Conduct periodic re-verification of documents</li>
                  </ul>

                  <h3>10. International Drivers</h3>
                  <p>If you drive in multiple countries, your data may be processed according to local laws in each jurisdiction. We ensure compliance with applicable privacy laws in all operating regions.</p>

                  <h3>11. Contact Information</h3>
                  <p>For driver privacy questions or to exercise your rights:</p>
                  <ul>
                    <li>Email: driver-privacy@ecauto.com</li>
                    <li>Phone: +1-XXX-XXX-XXXX</li>
                    <li>Driver Support Portal: Available in the app</li>
                    <li>Address: [Company Address]</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-8 bg-primary/5 border-primary/20 max-w-6xl mx-auto">
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