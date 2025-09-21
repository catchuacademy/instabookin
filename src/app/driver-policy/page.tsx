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
                  Last updated: September 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p>Your privacy matters to <strong>ECAUTO Mobility Private Limited</strong> (“Company”, “ECAUTO”, “we”, “our” or “us”).</p>
    <p>This Privacy Policy explains how we collect, use, share, and protect your information when you register and operate as a <strong>Driver (Captain) on the ECAUTO Platform.</strong></p>
    <p>By driving with ECAUTO, you agree to this Policy.</p>

    <h2>1. Information We Collect</h2>
    <p>We collect the following when you sign up and provide services:</p>
    <ul>
      <li><strong>Account & Profile Information:</strong> Name, phone, email, password, photo.</li>
      <li><strong>Verification & KYC Data:</strong> Aadhaar, PAN, driving license, vehicle RC, insurance, permits, pollution certificate, bank details, and real-time selfies for ID verification.</li>
      <li><strong>Trip & Transaction Details:</strong> Ride history, payments, incentives, earnings.</li>
      <li><strong>Location Data:</strong> GPS while you are marked “On Duty”.</li>
      <li><strong>Device Information:</strong> IP address, mobile model, OS version, app usage.</li>
      <li><strong>Health Declarations:</strong> Vaccination status, symptoms (when required).</li>
      <li><strong>Call & SMS Data:</strong> Call records and OTPs for verification.</li>
      <li><strong>Support & Feedback:</strong> Messages, ratings, or complaints.</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <ul>
      <li>Verify your identity and eligibility to drive with ECAUTO.</li>
      <li>Match you with Customers for rides/rentals.</li>
      <li>Share limited details with Customers (name, photo, vehicle number, phone).</li>
      <li>Process payments and transfer earnings.</li>
      <li>Ensure safety through live tracking and SOS features.</li>
      <li>Prevent fraud and enforce platform rules.</li>
      <li>Provide customer and driver support.</li>
      <li>Comply with legal and regulatory requirements.</li>
    </ul>

    <h2>3. Sharing of Information</h2>
    <p>Your data may be shared with:</p>
    <ul>
      <li><strong>Customers:</strong> For trip safety and completion (name, vehicle number, phone, tracking).</li>
      <li><strong>Third-Party Service Providers:</strong> Background verification, payment settlement, hosting, analytics.</li>
      <li><strong>Law Enforcement/Government:</strong> When required by law.</li>
      <li><strong>Affiliates/Business Transfers:</strong> In case of mergers, acquisitions, or restructuring.</li>
    </ul>
    <p>We do not sell your data.</p>

    <h2>4. Your Rights</h2>
    <ul>
      <li>You can update/correct your details via the app.</li>
      <li>You can request account deletion (subject to settlement of pending dues).</li>
      <li>We retain limited trip and transaction history for <strong>180 days after account closure</strong> for legal and safety reasons, after which it is deleted or anonymized.</li>
    </ul>

    <h2>5. Security</h2>
    <p>We use <strong>encryption, SSL, and secure servers</strong> to protect your data. Still, no system is completely secure — use the platform responsibly.</p>

    <h2>6. Children’s Privacy</h2>
    <p>You must be <strong>18 years or older</strong> and legally eligible to drive to use ECAUTO.</p>

    <h2>7. Grievance Officer</h2>
    <div style={{ marginTop: '14px', marginBottom: '16px' }}>
      <p><strong>Email:</strong> info@catchuhealthcare.com</p>
      <p className="mt-2"><strong>Phone number:</strong> +91 77357 36629</p>
    </div>

    <h2>8. Policy Updates</h2>
    <p>We may update this Policy periodically. Major changes will be notified via app or email.</p>

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