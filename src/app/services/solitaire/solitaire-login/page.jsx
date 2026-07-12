import React from 'react';
import { 
  Lock, LogIn, Key, ShieldAlert, MessageSquare, Mail, 
  Phone, UserCheck, UserX, UserPlus, Copy, ArrowRight, CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Solitaire Account & Login Issues | Login, Password & Verification Help',
  description: 'Facing Solitaire account login problems? Get solutions for Solitaire unable to login, forgot password, OTP, verification, account activation, and profile issues.',

    images: [
      {
        url: "https://www.howtocontact.live/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Browser Solution Services",
      },
    ],

    
  twitter: {
    card: "summary_large_image",

    title:"Solitaire Account & Login Issues | Call +1-800-879-0156",

    description:
      "Get fast, reliable Browser Solutions help from experts. Call +1-800-879-0156 for troubleshooting, software fixes, and technical support worldwide.",

    images: ["/og-image.jpg"],
  },

    openGraph: {
    title:"Solitaire Account & Login Issues | Call +1-800-879-0156",

    description:
      "Get fast, reliable Browser Solutions help from experts. Call +1-800-879-0156 for troubleshooting, software fixes, and technical support worldwide.",

    url: "https://www.howtocontact.live/services/browser-solution",

    siteName: "How to Contact",

    images: [
      {
        url: "https://www.howtocontact.live/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Browser Solution Services",
      },
    ],

    locale: "en_US",
    type: "website",
  },

};

export default function SolitaireAccountLoginIssues() {
  const issuesList = [
    {
      title: "Solitaire Unable to Login",
      icon: <LogIn className="w-6 h-6 text-emerald-700" />,
      reasons: ["Incorrect email address or mobile number", "Wrong password entered", "Poor internet connection", "Browser cache or cookies issue", "Temporary security restriction"],
      steps: ["Check that you are entering the correct registered email address or mobile number.", "Verify your password and ensure that caps lock is disabled.", "Clear browser cache and cookies before trying again.", "Try logging in from another browser or device.", "If the problem continues, contact Solitaire Support for assistance."]
    },
    {
      title: "Solitaire Forgot Password",
      icon: <Key className="w-6 h-6 text-emerald-700" />,
      reasons: ["Lost access to password", "Password expired"],
      steps: ["Go to the Solitaire login page.", "Select the Forgot Password option.", "Enter your registered email address or mobile number.", "Complete the verification process.", "Create a new secure password and log in again."]
    },
    {
      title: "Solitaire Account Locked",
      icon: <Lock className="w-6 h-6 text-emerald-700" />,
      reasons: ["Multiple failed login attempts", "Suspicious login activity", "Security verification requirement"],
      steps: ["Wait for a short period and try logging in again.", "Reset your password if required.", "Complete additional verification steps.", "Contact Solitaire Support if your account remains locked."]
    },
    {
      title: "Solitaire OTP Not Received",
      icon: <MessageSquare className="w-6 h-6 text-emerald-700" />,
      reasons: ["Poor mobile network", "Incorrect registered number", "SMS delivery delay", "Email OTP sent to spam folder"],
      steps: ["Check your mobile network connection.", "Wait a few moments and request a new OTP.", "Verify that your registered contact details are correct.", "Check spam or junk folders for email verification codes."]
    },
    {
      title: "Solitaire Email Verification Issue",
      icon: <Mail className="w-6 h-6 text-emerald-700" />,
      reasons: ["Incorrect email address", "Verification email moved to spam", "Expired verification link", "Email service delay"],
      steps: ["Check your spam or junk folder.", "Request a new verification email.", "Confirm that your email address is correct.", "Open the latest verification link provided."]
    },
    {
      title: "Solitaire Mobile Number Change",
      icon: <Phone className="w-6 h-6 text-emerald-700" />,
      reasons: ["Updated contact details", "No longer use old number"],
      steps: ["Log in to your Solitaire account.", "Open account settings.", "Select the mobile number update option.", "Enter your new mobile number.", "Complete verification using OTP."]
    },
    {
      title: "Solitaire Profile Update Issue",
      icon: <UserCheck className="w-6 h-6 text-emerald-700" />,
      reasons: ["Incorrect information format", "Missing required details", "Temporary website issue"],
      steps: ["Check all entered information carefully.", "Ensure all required fields are completed.", "Update your browser or app.", "Contact support if changes are not saved."]
    },
    {
      title: "Solitaire Account Activation Problem",
      icon: <UserPlus className="w-6 h-6 text-emerald-700" />,
      reasons: ["Verification email not completed", "OTP confirmation pending", "Incorrect registration details"],
      steps: ["Complete email or mobile verification.", "Confirm your registered details.", "Follow the activation instructions provided.", "Contact support if your account remains inactive."]
    },
    {
      title: "Solitaire Duplicate Account Issue",
      icon: <Copy className="w-6 h-6 text-emerald-700" />,
      reasons: ["Duplicate customer profiles", "Difficulty accessing previous information", "Order history confusion"],
      steps: ["Identify the account you want to continue using.", "Contact Solitaire Support for account management assistance.", "Provide required verification details if account merging is available."]
    },
    {
      title: "Solitaire Account Deactivation Request",
      icon: <UserX className="w-6 h-6 text-emerald-700" />,
      reasons: ["No longer wish to use account", "Account consolidation"],
      steps: ["Contact Solitaire Customer Support.", "Submit your account deactivation request.", "Complete the required verification process.", "Wait for confirmation from the support team."]
    }
  ];

  const tableData = [
    { issue: "Unable to Login", solution: "Check credentials and reset password" },
    { issue: "Forgot Password", solution: "Use password recovery option" },
    { issue: "Account Locked", solution: "Complete security verification" },
    { issue: "OTP Not Received", solution: "Check network and resend OTP" },
    { issue: "Email Verification Issue", solution: "Resend verification email" },
    { issue: "Mobile Number Change", solution: "Update contact details after verification" },
    { issue: "Profile Update Issue", solution: "Check information and save changes" },
    { issue: "Account Activation Problem", solution: "Complete account verification" },
    { issue: "Duplicate Account Issue", solution: "Contact support for account management" },
    { issue: "Account Deactivation Request", solution: "Submit account closure request" },
  ];

  const faqs = [
    { q: "Why can't I log in to my Solitaire account?", a: "Login problems may occur due to incorrect credentials, password issues, browser errors, or temporary account restrictions. Check your login details and reset your password if required." },
    { q: "How can I reset my Solitaire password?", a: "You can reset your password by selecting the Forgot Password option on the login page and completing the verification process." },
    { q: "What should I do if I don't receive my Solitaire OTP?", a: "Check your network connection, verify your registered mobile number, and request a new OTP after waiting for a few moments." },
    { q: "Can I change my registered Solitaire mobile number?", a: "Yes, you can update your mobile number through account settings after completing the required verification process." },
    { q: "How can I deactivate my Solitaire account?", a: "You can submit an account deactivation request through Solitaire Customer Support after completing account verification." }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">


      {/* 2. Hero Section (Matched Dark-Green Angle Layout) */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0a2312] to-[#123e20] text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" /> Secure Account Management
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Solitaire Account & <br /><span className="text-emerald-400">Login Issues</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Managing your Solitaire account should be simple, secure, and hassle-free. Quickly resolve your login problems, reset credentials, or update verification methods using our step-by-step troubleshooting guide below.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            {/* Minimalist Tech Illustration Box */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm w-full max-w-sm shadow-2xl">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                <Lock className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Need Direct Help?</h3>
              <p className="text-sm text-slate-400 mb-6">If your issue is not resolved by following the manual steps, connect instantly with our secure backend support team.</p>
              <button className="w-full bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-emerald-600 transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50">
                Get Instant Resolution <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Grid Solutions (Style matching 'Our Printer Solutions') */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Common Solitaire <span className="text-emerald-600">Account Problems</span>
          </h2>
          <div className="flex justify-center gap-1">
            <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
            <span className="w-8 h-2 bg-emerald-600 rounded-full"></span>
            <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
          </div>
          <p className="text-slate-500 pt-2">Select your specific account or authentication issue from our documented portal modules to restore service instantly.</p>
        </div>

        {/* 3.1 Custom Grid Layout (Matched Light Green Theme with Left-Curve Shape) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {issuesList.map((item, index) => (
            <div key={index} className="group bg-[#f4faf6] border border-emerald-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-emerald-300 flex flex-col justify-between relative overflow-hidden">
              {/* Corner accent to mimic image curvature styling */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center border border-emerald-500/10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">Possible Causes:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.reasons.map((reason, idx) => (
                      <span key={idx} className="bg-white px-2.5 py-1 text-xs text-slate-600 rounded-md border border-slate-100">{reason}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">How to Fix:</span>
                  <ol className="text-sm text-slate-600 space-y-1.5 list-none pl-0">
                    {item.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Quick Account Guide Table Section */}
      <div className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Quick Account & Login Issue Guide</h2>
            <p className="text-sm text-slate-500 mt-1">A reference overview matrix for instant fixes.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0c2e16] text-white">
                    <th className="p-4 font-semibold text-sm">Issue Type</th>
                    <th className="p-4 font-semibold text-sm">Possible Immediate Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                  {tableData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/80 transition">
                      <td className="p-4 font-medium text-slate-900">{row.issue}</td>
                      <td className="p-4 flex items-center gap-2 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {row.solution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Frequently Asked Questions Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-emerald-300 transition-colors">
              <h4 className="text-base font-bold text-slate-900 flex gap-2 items-start">
                <span className="text-emerald-600">Q:</span> {faq.q}
              </h4>
              <p className="text-sm text-slate-600 mt-2 pl-5 border-l-2 border-emerald-500/30">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Banner - Call To Action Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-[#0c2e16] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold">Unresolved Solitaire Account Errors?</h2>
            <p className="text-emerald-100 text-sm sm:text-base">
              Contact the Solitaire Support Team for secure and reliable backend authentication assistance. Our team is available 24/7 to help you regain access and manage your profile smoothly.
            </p>
          </div>
           <Link href='/contact'>
          <div className="relative z-10 shrink-0">
           
            <button className="bg-[#0c2e16] text-white hover:bg-[#144723] px-8 py-4 rounded-xl font-bold text-sm shadow-xl transition transform hover:-translate-y-0.5">
              Contact Support Agent
            </button>
         
          </div>
             </Link>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        </div>
      </div>

     

    </div>
  );
}