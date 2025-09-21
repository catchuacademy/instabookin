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
                  Last updated: September 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
        <header>
            <h1>ECAUTO Privacy Policy - Customer</h1>
            <p>Your privacy matters to <strong>ECAUTO Mobility Private Limited</strong> (“Company”, “ECAUTO”, “we”, “our” or “us”).</p>
            <p>This Privacy Policy explains how we collect, use, share, and protect your information when you use the ECAUTO app, website, or services as a Customer.</p>
            <p>By booking rides or rentals with ECAUTO, you agree to this Policy.</p>
        </header>
        
        <section>
            <h2>1. Information We Collect</h2>
            <p>We may collect the following information when you use our services:</p>
            <ul>
                <li><strong>Account Information:</strong> Name, email, phone number, password, profile photo.</li>
                <li><strong>Trip & Transaction Details:</strong> Pickup/drop addresses, ride history, payment details.</li>
                <li><strong>Location Data:</strong> Live GPS data while booking and during rides.</li>
                <li><strong>Device Information:</strong> IP address, device model, OS version, language, network data.</li>
                <li><strong>Saved Information:</strong> Frequently used addresses, billing info, emergency contacts.</li>
                <li><strong>Support & Feedback:</strong> Complaints, chat messages, ratings, and reviews.</li>
                <li><strong>Cookies:</strong> For app performance and personalization (can be disabled in settings).</li>
            </ul>
        </section>
        
        <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
                <li>Book and complete your rides or rentals.</li>
                <li>Share necessary details (name, phone, pickup location) with Drivers.</li>
                <li>Improve safety (real-time tracking, SOS features).</li>
                <li>Provide customer support.</li>
                <li>Send notifications about rides, offers, and service updates.</li>
                <li>Comply with legal requirements.</li>
            </ul>
        </section>
        
        <section>
            <h2>3. Sharing of Information</h2>
            <p>Your information may be shared with:</p>
            <ul>
                <li><strong>Drivers:</strong> To complete your ride (name, phone, pickup/drop location).</li>
                <li><strong>Third-Party Service Providers:</strong> For payments, hosting, fraud detection, analytics.</li>
                <li><strong>Law Enforcement/Government:</strong> When required by law.</li>
                <li><strong>Affiliates/Business Transfers:</strong> In case of mergers, acquisitions, or restructuring.</li>
            </ul>
            <p>We do not sell your personal data.</p>
        </section>
        
        <section>
            <h2>4. Your Rights</h2>
            <ul>
                <li>You can update or correct your information via the app.</li>
                <li>You can request account deletion.</li>
                <li>We retain limited ride and transaction history for <strong>180 days</strong> after closure for legal and safety reasons, after which it is deleted or anonymized.</li>
            </ul>
        </section>
        
        <section>
            <h2>5. Security</h2>
            <p>We use industry-standard encryption, SSL, and firewalls to protect your data. However, no system is 100% secure.</p>
        </section>
        
        <section>
            <h2>6. Children's Privacy</h2>
            <p>ECAUTO is only available for users <strong>18 years and above</strong>.</p>
        </section>
        
        <section>
            <h2>7. Grievance Officer</h2>
            <p>For questions or complaints:</p>
                <div style={{ marginTop: '14px', marginBottom: '16px' }}>
      <p><strong>Email:</strong> info@catchuhealthcare.com</p>
      <p className="mt-2"><strong>Phone number:</strong> +91 77357 36629</p>
    </div>
        </section>
        
        <section>
            <h2>8. Policy Updates</h2>
            <p>We may update this Policy from time to time. You will be notified of major changes via app or email.</p>
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