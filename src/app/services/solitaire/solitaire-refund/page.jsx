import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Terminal, 
  RotateCcw, AlertOctagon, Truck, Clock, Landmark, RefreshCw, FileText, DollarSign 
} from 'lucide-react';

export const metadata = {
  title: 'Solitaire Return & Refund Issues | Return, Exchange & Refund Help',
  description: 'Need help with Solitaire returns or refunds? Find solutions for return requests, refund delays, exchanges, pickup issues, and billing concerns.',
  alternates: {
    canonical: 'https://www.howtocontact.live/solitaire-return-refund',
  },

    openGraph: {
    title:"Solitaire Return & Refund Issues | Call +1-800-879-0156",

    description:
      "Need help with Solitaire returns or refunds? Find solutions for return requests, refund delays, exchanges, pickup issues, and billing concerns.",

    url: "https://www.howtocontact.live/services/solitaire-return-refund",

    siteName: "How to Contact",

    images: [
      {
        url: "https://www.howtocontact.live/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solitaire Return & Refund Issues",
      },
    ],

    locale: "en_US",
    type: "website",
  },
};

export default function SolitaireReturnRefundIssues() {
  const refundProblems = [
    {
      id: "return-request",
      title: "Solitaire Return Request",
      description: "Initiating structural product return protocols for eligible workspace items.",
      icon: <RotateCcw className="w-5 h-5" />,
      reasons: ["Product received damaged", "Incorrect product delivered", "Product quality concern", "Product not matching expectations", "Eligible return under policy terms"],
      steps: ["Log in to your Solitaire account.", "Open your order details.", "Select the return option.", "Provide the required return reason.", "Submit the request for review."]
    },
    {
      id: "return-not-approved",
      title: "Solitaire Return Not Approved",
      description: "Validation failures due to standard policy constraints or expired timestamps.",
      icon: <AlertOctagon className="w-5 h-5" />,
      reasons: ["Return period expired", "Product condition does not meet requirements", "Missing original packaging or accessories", "Product is not eligible for return"],
      steps: ["Review the return policy requirements.", "Check the reason for rejection.", "Provide additional information if required.", "Contact Solitaire Support for clarification."]
    },
    {
      id: "pickup-not-scheduled",
      title: "Solitaire Return Pickup Not Scheduled",
      description: "Logistical delays or terminal scheduling issues with third-party courier nodes.",
      icon: <Truck className="w-5 h-5" />,
      reasons: ["Courier scheduling delay", "Incorrect pickup information", "Service availability issue", "Logistics partner delay"],
      steps: ["Confirm your pickup address.", "Check return request status.", "Wait for courier scheduling updates.", "Contact support if pickup is delayed."]
    },
    {
      id: "refund-pending",
      title: "Solitaire Refund Pending",
      description: "Transactional settlements awaiting bank approval or clearance windows.",
      icon: <Clock className="w-5 h-5" />,
      reasons: ["Bank processing time", "Payment provider delay", "Refund verification process", "Transaction processing time"],
      steps: ["Confirm refund approval.", "Check your original payment method.", "Review bank transaction history.", "Contact support if the refund exceeds the expected timeline."]
    },
    {
      id: "partial-refund",
      title: "Solitaire Partial Refund Issue",
      description: "Discrepancies in credited values due to applicable discount recalculations.",
      icon: <Landmark className="w-5 h-5" />,
      reasons: ["Partial return of items", "Applicable deductions", "Discount adjustments", "Policy-based charges"],
      steps: ["Review your refund details.", "Check the refund calculation.", "Verify order and payment information.", "Contact Solitaire Support for clarification."]
    },
    {
      id: "exchange-request",
      title: "Solitaire Exchange Request",
      description: "Replacing current inventory allocations with alternative variant selections.",
      icon: <RefreshCw className="w-5 h-5" />,
      reasons: ["Wrong size or variation received", "Product replacement requirement", "Quality-related concern"],
      steps: ["Check exchange eligibility.", "Submit an exchange request.", "Provide required details.", "Follow instructions provided by Solitaire Support."]
    },
    {
      id: "policy-query",
      title: "Solitaire Return Policy Query",
      description: "Reviewing fundamental compliance windows and processing parameters.",
      icon: <FileText className="w-5 h-5" />,
      reasons: ["How many days are allowed for returns?", "Which products are eligible?", "What condition should the product be in?", "How long does the refund process take?"],
      steps: ["Review the return policy information.", "Check order-specific return details.", "Contact Solitaire Customer Support for clarification."]
    },
    {
      id: "wrong-amount",
      title: "Solitaire Wrong Refund Amount",
      description: "Mismatched financial tallies against final order invoices.",
      icon: <DollarSign className="w-5 h-5" />,
      reasons: ["Incorrect refund calculation", "Discount adjustments", "Partial order cancellation", "Payment processing differences"],
      steps: ["Check your refund confirmation details.", "Compare refund amount with your order invoice.", "Contact Solitaire Support with payment information.", "Request a refund review if required."]
    }
  ];

  const quickGuide = [
    { issue: "Return Request", solution: "Submit return through order details" },
    { issue: "Return Not Approved", solution: "Check eligibility requirements" },
    { issue: "Return Pickup Not Scheduled", solution: "Verify pickup details and status" },
    { issue: "Refund Pending", solution: "Track refund through payment method" },
    { issue: "Partial Refund Issue", solution: "Review refund calculation" },
    { issue: "Exchange Request", solution: "Submit exchange for eligible products" },
    { issue: "Return Policy Query", solution: "Review policy guidelines" },
    { issue: "Wrong Refund Amount", solution: "Request refund verification" }
  ];

  const faqs = [
    { q: "How can I submit a Solitaire return request?", a: "You can submit a return request through your order details by selecting the eligible product and providing the required return information." },
    { q: "Why was my Solitaire return request not approved?", a: "Returns may be rejected if the product does not meet eligibility requirements, the return period has expired, or required conditions are not fulfilled." },
    { q: "How long does a Solitaire refund take?", a: "Refund processing time depends on the payment method, bank processing time, and refund verification process." },
    { q: "What should I do if my Solitaire return pickup is delayed?", a: "Check your return status and pickup details. If the delay continues, contact Solitaire Customer Support." },
    { q: "Can I request an exchange instead of a refund?", a: "Yes, eligible products may qualify for an exchange request according to Solitaire’s return and exchange policies." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans antialiased scroll-smooth">
      


      {/* 2. Premium Hero Area */}
      <div className="relative bg-gradient-to-tr from-[#0c2e16] via-[#092210] to-emerald-950 text-white py-24 border-b-8 border-emerald-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Terminal className="w-4 h-4" /> Settlement & Return Modules
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Solitaire Return & <br /><span className="text-emerald-400">Refund Resolution</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              At Solitaire, we understand that customers may sometimes need to return products, request exchanges, or track refund payments. Troubleshoot pickup scheduling lags, partial refund anomalies, and clearance timelines smoothly.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Sidebar Navigational Dashboard Layout Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" aria-label="Resolution Panel Hub">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* 3.1 Sticky Left Navigation Menu Panel */}
          <nav className="hidden lg:block lg:col-span-4 bg-white border border-slate-100 rounded-2xl p-4 sticky top-28 shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 block mb-4">Select Node Channel</span>
            <div className="space-y-1">
              {refundProblems.map((problem) => (
                <a 
                  key={problem.id} 
                  href={`#${problem.id}`}
                  className="flex items-center justify-between p-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-slate-400 group-hover:text-emerald-600">{problem.icon}</div>
                    <span>{problem.title.replace("Solitaire ", "")}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-0.5 transition" />
                </a>
              ))}
            </div>
          </nav>

          {/* 3.2 Main Content Stream Cards */}
          <div className="col-span-1 lg:col-span-8 space-y-12">
            {refundProblems.map((item) => (
              <article 
                key={item.id} 
                id={item.id} 
                className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300 scroll-mt-28"
              >
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight">{item.title}</h3>
                      <p className="text-slate-500 text-xs md:text-sm mt-0.5">{item.description}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    FIN_LOG
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Parameter List */}
                  <div className="space-y-3">
                    <span className="text-xs font-black text-emerald-900 tracking-wider uppercase block">
                      {item.id === "policy-query" ? "Common Area Indices:" : "Common Core Reasons:"}
                    </span>
                    <ul className="space-y-2 pl-0 list-none text-sm text-slate-600">
                      {item.reasons.map((reason, i) => (
                        <li key={i} className="flex gap-2.5 items-center">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0"></span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Action Steps List */}
                  <div className="space-y-3">
                    <span className="text-xs font-black text-emerald-900 tracking-wider uppercase block">
                      {item.id === "policy-query" ? "Standard Help Routines:" : "Resolution Step Blueprint:"}
                    </span>
                    <ol className="space-y-2.5 pl-0 list-none text-sm text-slate-600">
                      {item.steps.map((step, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="w-5 h-5 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">{i + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Directory Grid Layout Index */}
      <section className="bg-white py-20 border-y border-slate-100" aria-label="System Quick Directory Overview">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">Manual Return Override Index</h2>
            <p className="text-sm text-slate-500 mt-1.5">Fast-track alternative bypass paths for transaction exceptions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickGuide.map((row, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex flex-col justify-between gap-4">
                <span className="text-sm font-extrabold text-slate-950 block tracking-tight">{row.issue}</span>
                <div className="pt-2 border-t border-slate-200/50 flex items-center justify-between text-xs font-semibold text-emerald-800">
                  <span>{row.solution}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clean Structured FAQ Accordion Blocks */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24" aria-label="FAQ Summary">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-950 tracking-tighter">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-sm mt-1">Pre-compiled transactional answers regarding policy indices.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:border-emerald-100 transition-all">
              <h3 className="text-base sm:text-lg font-bold text-slate-950 flex gap-4 items-start">
                <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-1" /> 
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-3 pl-9 border-l border-slate-200 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. High Grade Action CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="bg-gradient-to-r from-emerald-500 to-[#0c2e16] rounded-3xl p-10 md:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 border border-emerald-300/30">
          <div className="space-y-4 max-w-2xl relative z-10 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">Need Immediate Refund Reviews?</h2>
            <p className="text-emerald-100 text-base sm:text-lg">
              For any unresolved Solitaire Return & Refund Issues, contact Solitaire Customer Support for quick assistance. Our team is committed to providing a simple, transparent, and convenient return experience for every customer.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link href="/contact">
              <span className="inline-flex bg-white text-[#0c2e16] hover:bg-emerald-50 px-10 py-4 rounded-xl font-extrabold text-sm shadow-2xl transition transform hover:-translate-y-1 active:translate-y-0 group cursor-pointer items-center">
                Access Refund Desk <ArrowRight className="inline-block w-4 h-4 ml-2 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>

   

    </div>
  );
}