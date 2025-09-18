import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Shield, Users, Car, Mail, Phone, MapPin } from "lucide-react";

export function Privacy() {
  return (
    <section id="privacy" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Privacy Policies</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy and data security are our top priorities. Review our comprehensive 
            privacy policies for both passenger and driver applications.
          </p>
        </div>

        <Tabs defaultValue="passenger" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="passenger" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Passenger Privacy Policy
            </TabsTrigger>
            <TabsTrigger value="driver" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              Driver Privacy Policy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="passenger">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  EC Auto Passenger App Privacy Policy
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
                    <li>Name, email address, and phone number for account creation</li>
                    <li>Profile photo (optional)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Government-issued ID verification (where required by law)</li>
                  </ul>
                  
                  <h4>Location Information:</h4>
                  <ul>
                    <li>Pickup and drop-off locations for ride booking</li>
                    <li>Real-time location during active trips</li>
                    <li>Location history for completed trips</li>
                  </ul>
                  
                  <h4>Usage Information:</h4>
                  <ul>
                    <li>App usage patterns and preferences</li>
                    <li>Trip history and ratings</li>
                    <li>Device information and identifiers</li>
                    <li>Communication records with drivers and support</li>
                  </ul>

                  <h3>2. How We Use Your Information</h3>
                  <ul>
                    <li>Provide ride booking and transportation services</li>
                    <li>Match you with nearby drivers</li>
                    <li>Process payments and maintain transaction records</li>
                    <li>Provide customer support and resolve disputes</li>
                    <li>Improve app functionality and user experience</li>
                    <li>Send important service notifications and updates</li>
                    <li>Ensure safety and security of our platform</li>
                    <li>Comply with legal obligations and prevent fraud</li>
                  </ul>

                  <h3>3. Information Sharing</h3>
                  <p>We share your information only as necessary:</p>
                  <ul>
                    <li><strong>With Drivers:</strong> Name, photo, pickup location, and contact info for trip coordination</li>
                    <li><strong>Service Providers:</strong> Payment processors, mapping services, and analytics providers</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                    <li><strong>Safety:</strong> To protect safety, prevent fraud, or investigate violations</li>
                    <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                  </ul>
                  <p><strong>We never sell your personal information to third parties for marketing purposes.</strong></p>

                  <h3>4. Data Security</h3>
                  <ul>
                    <li>Industry-standard encryption for data transmission and storage</li>
                    <li>Secure authentication and access controls</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Employee access controls and privacy training</li>
                    <li>Secure payment processing through PCI-compliant providers</li>
                  </ul>

                  <h3>5. Your Rights and Choices</h3>
                  <ul>
                    <li><strong>Access:</strong> View and download your personal data</li>
                    <li><strong>Correction:</strong> Update or correct your information</li>
                    <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                    <li><strong>Portability:</strong> Export your data in a standard format</li>
                    <li><strong>Objection:</strong> Object to certain data processing activities</li>
                    <li><strong>Location:</strong> Control location sharing through device settings</li>
                  </ul>

                  <h3>6. Data Retention</h3>
                  <ul>
                    <li>Account information: Until account deletion or required by law</li>
                    <li>Trip data: 7 years for tax and legal compliance</li>
                    <li>Payment records: As required by financial regulations</li>
                    <li>Support communications: 3 years after resolution</li>
                  </ul>

                  <h3>7. Children's Privacy</h3>
                  <p>EC Auto is not intended for users under 18 years of age. We do not knowingly collect personal information from children under 18. If we discover such information has been collected, we will delete it immediately.</p>

                  <h3>8. International Data Transfers</h3>
                  <p>Your data may be processed in countries outside your residence. We ensure appropriate safeguards are in place for international transfers, including standard contractual clauses and adequacy decisions.</p>

                  <h3>9. Updates to This Policy</h3>
                  <p>We may update this privacy policy periodically. We will notify you of significant changes through the app or email. Continued use of the service constitutes acceptance of the updated policy.</p>

                  <h3>10. Contact Information</h3>
                  <p>For privacy-related questions or to exercise your rights:</p>
                  <ul>
                    <li>Email: privacy@ecauto.com</li>
                    <li>Phone: +1-XXX-XXX-XXXX</li>
                    <li>Address: [Company Address]</li>
                  </ul>
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
  );
}