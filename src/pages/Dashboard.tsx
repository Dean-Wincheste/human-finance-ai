import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  ArrowRight, 
  CreditCard,
  TrendingUp,
  Calendar,
  Download,
  MessageSquare
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Demo data for hackathon
const applicationData = {
  status: "In Progress",
  applicationId: "TC-2025-001234",
  loanAmount: "₹5,00,000",
  tenure: "36 months",
  interestRate: "10.99%",
  emi: "₹16,375",
  progress: 65,
  stages: [
    { name: "Application Started", status: "completed", date: "Oct 18, 2025" },
    { name: "Documents Submitted", status: "completed", date: "Oct 18, 2025" },
    { name: "KYC Verified", status: "completed", date: "Oct 18, 2025" },
    { name: "Underwriting", status: "current", date: "In Progress" },
    { name: "Final Approval", status: "pending", date: "Pending" },
    { name: "Disbursement", status: "pending", date: "Pending" },
  ],
};

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard | TARA - Tata Capital";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Welcome back, Rahul
            </h1>
            <p className="text-muted-foreground">
              Track your loan application progress and manage your account.
            </p>
          </div>
          <Button variant="hero" onClick={() => navigate('/chat')}>
            <MessageSquare className="w-4 h-4 mr-2" />
            Continue with TARA
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-accent" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Loan Amount</p>
            <p className="font-display text-2xl font-bold text-foreground">{applicationData.loanAmount}</p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Interest Rate</p>
            <p className="font-display text-2xl font-bold text-foreground">{applicationData.interestRate}</p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-warning" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Tenure</p>
            <p className="font-display text-2xl font-bold text-foreground">{applicationData.tenure}</p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Monthly EMI</p>
            <p className="font-display text-2xl font-bold text-foreground">{applicationData.emi}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Application Status */}
          <div className="lg:col-span-2">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Application Progress
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    ID: {applicationData.applicationId}
                  </p>
                </div>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  {applicationData.status}
                </span>
              </div>

              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Overall Progress</span>
                  <span className="text-sm font-medium text-foreground">{applicationData.progress}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full progress-bar"
                    style={{ width: `${applicationData.progress}%` }}
                  />
                </div>
              </div>

              {/* Stages */}
              <div className="space-y-4">
                {applicationData.stages.map((stage, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                      stage.status === 'current' 
                        ? 'bg-accent/5 border border-accent/20' 
                        : stage.status === 'completed'
                          ? 'bg-success/5'
                          : 'bg-muted/50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      stage.status === 'completed' 
                        ? 'bg-success text-success-foreground'
                        : stage.status === 'current'
                          ? 'bg-accent text-accent-foreground animate-pulse'
                          : 'bg-muted text-muted-foreground'
                    }`}>
                      {stage.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${
                        stage.status === 'pending' ? 'text-muted-foreground' : 'text-foreground'
                      }`}>
                        {stage.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{stage.date}</p>
                    </div>
                    {stage.status === 'current' && (
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        Processing
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* AI Assistant Card */}
            <div className="p-6 rounded-2xl gradient-hero text-primary-foreground">
              <h3 className="font-display font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                TARA is available 24/7 to answer your questions and guide you through the process.
              </p>
              <Button 
                variant="glass" 
                size="sm"
                onClick={() => navigate('/chat')}
                className="w-full justify-between"
              >
                Chat with TARA
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Documents Card */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
              <h3 className="font-display font-semibold text-foreground mb-4">Documents</h3>
              <div className="space-y-3">
                {[
                  { name: "PAN Card", status: "Verified" },
                  { name: "Aadhaar Card", status: "Verified" },
                  { name: "Salary Slips", status: "Pending" },
                  { name: "Bank Statement", status: "Pending" },
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">{doc.name}</span>
                    </div>
                    <span className={`text-xs font-medium ${
                      doc.status === 'Verified' ? 'text-success' : 'text-warning'
                    }`}>
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                <Download className="w-4 h-4 mr-2" />
                Upload Documents
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
