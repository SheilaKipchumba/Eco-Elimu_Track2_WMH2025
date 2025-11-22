import Navigation from "@/components/Navigation";
import { Smartphone, QrCode, MessageSquare } from "lucide-react";

const SMSConcept = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Offline Action Logging</h1>
            <p className="text-muted-foreground">Concept screens for SMS and QR code-based logging (UI prototype only)</p>
          </div>

          {/* SMS Logging Concept */}
          <div className="card-eco p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">SMS-Based Action Logging</h2>
                <p className="text-sm text-muted-foreground">For students without smartphones or internet access</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-accent rounded-xl">
                <h3 className="font-semibold mb-3">How It Works:</h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">1.</span>
                    <span>Student sends SMS to shortcode: <code className="px-2 py-1 bg-background rounded">*384*4K#</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">2.</span>
                    <span>System replies with action menu: "Reply 1 for Trees, 2 for Plastic, 3 for Clean-up..."</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">3.</span>
                    <span>Student replies with action code and details</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">4.</span>
                    <span>System confirms submission: "Action logged! Pending teacher verification."</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
                <h4 className="font-semibold mb-3">Example SMS Flow:</h4>
                <div className="space-y-3">
                  <div className="bg-background p-3 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Student sends:</div>
                    <div className="font-mono text-sm">*384*4K#</div>
                  </div>
                  <div className="bg-background p-3 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">System replies:</div>
                    <div className="font-mono text-sm">Welcome to 4K Clubs! Reply: 1=Trees 2=Plastic 3=Cleanup 4=Garden</div>
                  </div>
                  <div className="bg-background p-3 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Student sends:</div>
                    <div className="font-mono text-sm">1 20 trees school compound</div>
                  </div>
                  <div className="bg-background p-3 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">System confirms:</div>
                    <div className="font-mono text-sm">✓ Logged: 20 trees planted. Awaiting teacher verification. Points: 100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Concept */}
          <div className="card-eco p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <QrCode className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">QR Code Action Verification</h2>
                <p className="text-sm text-muted-foreground">Quick attendance and action logging for group activities</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-accent rounded-xl">
                <h3 className="font-semibold mb-3">For Teachers:</h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">1.</span>
                    <span>Generate unique QR code for each activity session</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">2.</span>
                    <span>Display QR code at activity location</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">3.</span>
                    <span>Students scan to log attendance and participation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">4.</span>
                    <span>System auto-verifies and awards points</span>
                  </li>
                </ol>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl flex flex-col items-center justify-center">
                <div className="w-48 h-48 bg-background rounded-xl flex items-center justify-center mb-4">
                  <QrCode className="w-32 h-32 text-muted-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-semibold mb-1">Sample QR Code</p>
                  <p className="text-xs text-muted-foreground">Tree Planting - Greenfields Secondary</p>
                  <p className="text-xs text-muted-foreground">March 15, 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* USSD Concept */}
          <div className="card-eco p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">USSD Menu System</h2>
                <p className="text-sm text-muted-foreground">Interactive menu for feature phones</p>
              </div>
            </div>

            <div className="bg-accent rounded-xl p-6">
              <h3 className="font-semibold mb-4">USSD Menu Flow:</h3>
              <div className="space-y-4">
                <div className="bg-background p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-bold mb-2">*384*4K#</div>
                  <div className="text-muted-foreground">
                    Welcome to 4K Clubs<br/>
                    1. Log Action<br/>
                    2. View Points<br/>
                    3. My Ranking<br/>
                    4. Club Stats
                  </div>
                </div>

                <div className="bg-background p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary font-bold mb-2">User selects: 1</div>
                  <div className="text-muted-foreground">
                    Select Activity:<br/>
                    1. Tree Planting (100pts)<br/>
                    2. Plastic Collection (50pts)<br/>
                    3. Clean-up (75pts)<br/>
                    4. School Garden (80pts)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
            <p className="text-center text-sm text-muted-foreground">
              <strong>Note:</strong> These are conceptual UI prototypes demonstrating offline-friendly features. 
              Actual SMS/USSD integration would require partnership with mobile network operators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSConcept;
