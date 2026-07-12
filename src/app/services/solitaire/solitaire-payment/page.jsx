import React from 'react';
import Link from 'next/link';
import {
  CreditCard, Wallet, Banknote, AlertTriangle, RefreshCw,
  HelpCircle, Receipt, Landmark, CheckCircle2, ShieldCheck, ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Solitaire Payment Issues | Payment Failed, Refund & Transaction Help',
  description: 'Facing Solitaire payment problems? Find solutions for payment failed, refund issues, gateway errors, card, UPI, wallet payments, and billing concerns.',
  alternates: {
    canonical: 'https://www.howtocontact.live/solitaire-payment',
  },
  openGraph: {
    title: "Solitaire Payment Issues  | Call +1-800-879-0156",

    description:
      "Facing Solitaire payment problems? Find solutions for payment failed, refund issues, gateway errors, card, UPI, wallet payments, and billing concerns.",

    url: "https://www.howtocontact.live/services/solitaire-payment",

    siteName: "How to Contact",

    images: [
      {
        url: "https://www.howtocontact.live/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solitaire Payment Issues",
      },
    ],

    locale: "en_US",
    type: "website",
  },

};

export default function SolitairePaymentIssuesNew() {
  const paymentProblems = [
    {
      title: "Solitaire Payment Failed",
      id: "payment-failed",
      description: "A secure verification timeout occurred at the merchant bank portal.",
      icon: <AlertTriangle className="w-8 h-8 text-emerald-600" />,
      reasons: ["Insufficient account balance", "Incorrect card or payment details", "Bank server issue", "Poor internet connection", "Payment gateway timeout", "Transaction security restrictions"],
      steps: ["Check your payment details carefully.", "Ensure sufficient balance is available.", "Verify your internet connection.", "Try completing the payment again after some time.", "Use an alternative payment method if the issue continues."]
    },
    {
      title: "Amount Deducted But Order Not Created",
      id: "deducted-no-order",
      description: "Successful bank debit did not result in immediate purchase status.",
      icon: <RefreshCw className="w-8 h-8 text-emerald-600" />,
      reasons: ["Payment confirmation delay", "Payment gateway communication failure", "Temporary system error"],
      steps: ["Check your order history.", "Verify your payment transaction status.", "Wait for the payment confirmation update.", "Contact Solitaire Support with transaction details if required."],
      note: "The payment status is automatically verified. If the order is not created, eligible refunds are processed according to the payment provider's timeline."
    },
    {
      title: "Refund Not Received",
      id: "refund-not-received",
      description: "Return or cancellation funds are delayed in the settlement chain.",
      icon: <Banknote className="w-8 h-8 text-emerald-600" />,
      reasons: ["Bank processing delay", "Payment provider processing time", "Incorrect refund status information"],
      steps: ["Confirm that the refund has been initiated.", "Check your original payment method.", "Review your bank statement.", "Contact support if the refund exceeds the expected timeline."]
    },
    {
      title: "Payment Gateway Error",
      id: "gateway-error",
      description: "Gateway communication response failure during authorization phase.",
      icon: <Landmark className="w-8 h-8 text-emerald-600" />,
      reasons: ["Temporary gateway downtime", "Server communication issue", "Browser or device compatibility problem", "Network interruption"],
      steps: ["Refresh the payment page.", "Clear browser cache.", "Try another browser or device.", "Attempt payment after some time.", "Use another available payment option."]
    },
    {
      title: "Card Payment Issue",
      id: "card-issue",
      description: "Authentication processing failed across credit or debit card networks.",
      icon: <CreditCard className="w-8 h-8 text-emerald-600" />,
      reasons: ["Incorrect card information", "Expired card", "Bank transaction restrictions", "International payment limitations", "Insufficient balance"],
      steps: ["Verify card number, expiry date, and CVV.", "Confirm that your card is active.", "Contact your bank if transactions are blocked.", "Try another payment method if needed."]
    },
    {
      title: "UPI Payment Issue",
      id: "upi-issue",
      description: "Real-time payment interface timed out or rejected by consumer bank.",
      icon: <HelpCircle className="w-8 h-8 text-emerald-600" />,
      reasons: ["UPI server downtime", "Incorrect UPI PIN", "Bank connectivity issue", "Transaction limit reached"],
      steps: ["Check your UPI app status.", "Confirm your bank account connection.", "Enter the correct UPI PIN.", "Retry the transaction after some time.", "Use another payment option if required."]
    },
    {
      title: "Wallet Payment Issue",
      id: "wallet-issue",
      description: "Merchant api request timed out while communicating with wallet provider.",
      icon: <Wallet className="w-8 h-8 text-emerald-600" />,
      reasons: ["Low wallet balance", "Wallet service interruption", "Account verification issue", "Payment limit restrictions"],
      steps: ["Check your wallet balance.", "Verify wallet account details.", "Ensure your wallet is active.", "Retry the payment after resolving the issue."]
    },
    {
      title: "Incorrect Billing Amount",
      id: "billing-issue",
      description: "The charged transactional summary amount differs from system product values.",
      icon: <Receipt className="w-8 h-8 text-emerald-600" />,
      reasons: ["Incorrect product pricing", "Tax calculation differences", "Discount or coupon application issue", "Additional charges"],
      steps: ["Review your order summary.", "Check applied discounts and offers.", "Verify invoice details.", "Contact Solitaire Support with your order information."]
    }
  ];

  const tableData = [
    { issue: "Payment Failed", solution: "Check payment details and retry" },
    { issue: "Amount Deducted But Order Not Created", solution: "Verify transaction and wait for confirmation" },
    { issue: "Refund Not Received", solution: "Check refund status with payment provider" },
    { issue: "Payment Gateway Error", solution: "Retry after clearing browser issues" },
    { issue: "Card Payment Issue", solution: "Verify card details and bank restrictions" },
    { issue: "UPI Payment Issue", solution: "Check UPI status and retry" },
    { issue: "Wallet Payment Issue", solution: "Verify wallet balance and account" },
    { issue: "Incorrect Billing Amount", solution: "Review invoice and contact support" }
  ];

  const faqs = [
    { q: "Why did my Solitaire payment fail?", a: "Payment failures can happen due to incorrect payment details, insufficient balance, bank restrictions, or temporary technical issues. Try again after checking your payment information." },
    { q: "What should I do if money is deducted but my Solitaire order is not created?", a: "Check your order history and payment status. If the order is not created, the amount is usually refunded according to the payment provider's processing timeline." },
    { q: "How long does a Solitaire refund take?", a: "Refund processing time depends on the payment method and banking partner. You can check the refund status through your transaction details." },
    { q: "Why is my Solitaire UPI payment not working?", a: "UPI payments may fail due to bank issues, incorrect PIN, server problems, or transaction limits. Verify your UPI details and try again." },
    { q: "How can I report an incorrect billing amount?", a: "Contact Solitaire Support with your order details and invoice information so the billing issue can be reviewed." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">



      {/* 2. Brand Hero Segment */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0c2e16] to-emerald-950 text-white py-24 md:py-32 border-b-8 border-emerald-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.2),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-emerald-300 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4" /> SECURE GATEWAY PROTOCOLS
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.95]">
              Solitaire <span className="text-emerald-400">Payment Issues</span>
            </h1>
            <p className="text-emerald-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed pt-2">
              A secure and smooth payment experience is an important part of your Solitaire shopping journey. Quickly resolve transaction failures, refund delays, and merchant portal errors using our advanced gateway documentation.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Stacked-Flow Dynamic List Content Panels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" aria-label="Solitaire Transaction Solutions Matrix">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tighter leading-tight">
            Advanced <span className="text-emerald-700">Payment Solutions Matrix</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed pt-2">Troubleshoot network timeouts, card authentication, billing discrepancies, or pending settlement delays below.</p>
        </div>

        <div className="space-y-10">
          {paymentProblems.map((item, index) => (
            <article key={item.id} className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-xl hover:border-emerald-100 group flex flex-col md:flex-row gap-10 items-start">
              <div className="shrink-0 flex items-center justify-center md:pt-2">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#f4faf6] rounded-full flex items-center justify-center border border-emerald-100 shadow-inner transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>
              </div>

              <div className="flex-1 space-y-6 w-full">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 group-hover:text-emerald-800 transition">{item.title}</h3>
                  <p className="text-slate-500 text-sm md:text-base mt-1.5">{item.description}</p>
                </div>

                {item.note && (
                  <div className="bg-amber-50 border-l-4 border-amber-500 text-amber-950 p-4 rounded-r-xl text-sm leading-relaxed">
                    <strong className="block mb-1">AUTOMATED SETTLEMENT NOTICE:</strong> {item.note}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">Potential Causes:</span>
                    <ul className="text-sm text-slate-600 space-y-2 list-none pl-0">
                      {item.reasons.map((reason, idx) => (
                        <li key={idx} className="flex gap-2.5 items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">Merchant Action Plan:</span>
                    <ol className="text-sm text-slate-600 space-y-2 list-none pl-0">
                      {item.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Matrix Quick Table View */}
      <section className="bg-white py-20 border-y border-slate-100" aria-label="Reference Table Matrix">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">Solitaire Payment & Billing Matrix</h2>
            <p className="text-base text-slate-600 mt-2">Cross-reference grid for instant gateway resolution protocols.</p>
          </div>
          <div className="bg-[#0c2e16] rounded-3xl shadow-xl overflow-hidden border border-emerald-900 p-2">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-0.5">
                <thead>
                  <tr className="bg-white/5 text-emerald-100">
                    <th className="p-5 font-semibold text-sm">Transaction Issue Type</th>
                    <th className="p-5 font-semibold text-sm">Possible Immediate Solution Protocol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-950 text-sm text-emerald-50">
                  {tableData.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition">
                      <td className="p-5 font-medium">{row.issue}</td>
                      <td className="p-5 flex items-center gap-3">
                        <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                        {row.solution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clean Structured Accordion FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24" aria-label="FAQ Summary">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-950 tracking-tighter">Frequently Asked Questions</h2>
          <p className="text-slate-600 mt-3 max-w-xl mx-auto">Get answers to the most common queries regarding payment processes and transaction management.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:border-emerald-200 transition-colors">
              <h3 className="text-lg font-bold text-slate-950 flex gap-4 items-start">
                <HelpCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-base text-slate-600 mt-3 pl-10 border-l-2 border-emerald-500/30 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Call To Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="bg-gradient-to-r from-emerald-500 to-[#0c2e16] rounded-3xl p-10 md:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 border border-emerald-300/30">
          <div className="space-y-4 max-w-2xl relative z-10 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">Unresolved Solitaire Payment Issues?</h2>
            <p className="text-emerald-100 text-base sm:text-lg">
              Contact the Solitaire Support Team for quick assistance. We help customers resolve structural transaction problems and ensure a secure automated payment experience loop.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link href="/contact"
              target="_blank"
              rel="noopener noreferrer">
              <span className="inline-flex bg-white text-[#0c2e16] hover:bg-emerald-50 px-10 py-4 rounded-xl font-extrabold text-sm shadow-2xl transition transform hover:-translate-y-1 active:translate-y-0 group cursor-pointer items-center">
                Access Support Desk <ArrowRight className="inline-block w-4 h-4 ml-2 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>



    </div>
  );
}