import React, { useState } from 'react';
import { 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  PlayCircle, 
  Smartphone, 
  ShieldCheck, 
  Users, 
  Zap, 
  Clock, 
  BrainCircuit,
  MessageCircle,
  TrendingUp,
  Search,
  Video
} from 'lucide-react';
import { Step, Testimonial, FAQItem } from './types';

// Components
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5 bg-[#020617]/80">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic">S</div>
        <span className="text-2xl font-black tracking-tight text-white uppercase italic">Socialvert</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
        <a href="#results" className="hover:text-white transition-colors">Results</a>
        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-slate-200 transition-all flex items-center gap-2">
          Book Strategy Session <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-4 hero-gradient overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] -z-10 rounded-full"></div>
    <div className="max-w-5xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-sm font-semibold mb-8">
        <Smartphone className="w-4 h-4" /> Personal Injury Attorneys Who Want More Inbound Leads
      </div>
      <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight gradient-text">
        Become The Recognized Authority in Your Market And Generate In Bound Leads With Just 1 Hour Per Month
      </h1>
      <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
        Experts at Psychology-Based Content That Builds Trust at Scale. 
        Specializing in Premium Authority Positioning. 
        <span className="text-white block mt-2 font-semibold">100% Done-For-You in 1 Hour/Month.</span>
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-3">
          Book Your Free Strategy Session <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="text-left">
            <div className="text-white font-bold text-lg">95%</div>
            <div className="text-slate-500 text-sm">Client Retention Rate</div>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="text-left">
            <div className="text-white font-bold text-lg">2+ Billion</div>
            <div className="text-slate-500 text-sm">Views Generated</div>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="text-left">
            <div className="text-white font-bold text-lg">Exclusive</div>
            <div className="text-slate-500 text-sm">To Personal Injury Attorneys</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TrustLogos = () => (
  <section className="py-12 border-y border-white/5 bg-white/[0.01]">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-center text-slate-500 uppercase tracking-[0.2em] text-sm font-bold mb-8">Trusted By Leading Personal Injury Attorneys Nationwide</p>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale filter transition-all hover:grayscale-0 hover:opacity-100">
        <div className="font-heading text-2xl font-black italic">LAW FIRM ALPHA</div>
        <div className="font-heading text-2xl font-black italic">METRO INJURY</div>
        <div className="font-heading text-2xl font-black italic">TRUST JUSTICE</div>
        <div className="font-heading text-2xl font-black italic">PREMIER PI</div>
        <div className="font-heading text-2xl font-black italic">EQUITY LEGAL</div>
      </div>
    </div>
  </section>
);

const PainPoints = () => (
  <section className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Are You In The Right Place?</h2>
        <div className="max-w-2xl mx-auto text-slate-400 space-y-4 text-lg">
          <p>Are you a personal injury attorney who knows there are massive growth opportunities in building authority online…</p>
          <p>But you're stuck in the 60-80 hour/week grind with no time to create content?</p>
          <p>You've tried posting yourself…</p>
          <p>You've worked with agencies (who probably traumatized you)…</p>
          <p>But no one seems able to deliver real results or understand the realities of running a PI practice.</p>
          <p>Meanwhile, competitors are catching up, and you know you're leaving money on the table..</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20">
          <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
            <XCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 italic uppercase tracking-tight">The Referral Rollercoaster</h3>
          <p className="text-slate-400">You've relied on referrals you can't control. Some months are great. Others are crickets. Your income swings wildly based on who feels like referring that week.</p>
        </div>
        <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20">
          <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
            <XCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 italic uppercase tracking-tight">The Agency Trauma</h3>
          <p className="text-slate-400">You've been burned by agencies that ghosted. Big promises up front. Excitement for a few months. You've wasted serious money with nothing to show.</p>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-24 px-4 bg-blue-600/5">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">That's Where We Come In.</h2>
      <div className="space-y-6 text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
        <p><span className="text-blue-400 font-bold">Socialvert</span> helps personal injury attorneys making 7 & 8-figure annually to build strategic authority through content that generates qualified inbound leads.</p>
        <p>We're your dedicated 'plug and play' authority team that takes full ownership of strategy, psychology-based scripting, video production, content distribution, and optimization.</p>
        <p className="bg-white/5 border border-white/10 p-6 rounded-2xl italic">The result? A predictable, consistent, and scalable flow of qualified leads booked straight into your calendar. That we consistently optimize every single month.</p>
      </div>
      <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/20">
        Book Your Free Strategy Session
      </button>
    </div>
  </section>
);

const CaseStudies = () => {
  const cases: Testimonial[] = [
    {
      name: "Pete Michael",
      headline: "Most Followed Attorney in New Jersey",
      stats: "Under 4k to 110k+ Followers",
      image: "https://picsum.photos/seed/pete/400/600",
    },
    {
      name: "Frank Udinson",
      headline: "300k+ Followers, 1M+ Subs",
      stats: "Zero to Primary Client Acquisition Channel",
      image: "https://picsum.photos/seed/frank/400/600",
    },
    {
      name: "Rafael y Asociados",
      headline: "Viral Authority",
      stats: "2k to 54k Followers in 3 Months",
      image: "https://picsum.photos/seed/rafa/400/600",
    },
  ];

  return (
    <section id="results" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 text-center">And We Actually Get Results</h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto uppercase tracking-widest text-sm font-bold">Proven authority engineering for PI practices</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <div key={i} className="group glass-card rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-2xl font-bold text-white mb-1 uppercase italic tracking-tighter">{item.name}</h4>
                  <p className="text-blue-400 font-semibold text-sm mb-2">{item.headline}</p>
                  <div className="flex items-center gap-2 text-white font-bold bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-md">
                    <TrendingUp className="w-4 h-4" /> {item.stats}
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-400 text-sm italic">"Facebook ad campaigns which have led to so many leads that I actually had to turn them off…." — Frank Udinson</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-3xl flex flex-col items-center text-center">
             <div className="flex items-center gap-2 text-emerald-400 mb-4 font-bold">
               <MessageCircle className="w-5 h-5" /> Client Message
             </div>
             <p className="text-xl text-white font-medium mb-4 italic">"Dude yesterday I got 9 leads from Facebook, have gotten 5 today since midnight"</p>
             <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Frank signed 3 clients in 1 day</p>
          </div>
          <div className="glass-card p-8 rounded-3xl flex flex-col items-center text-center">
             <div className="flex items-center gap-2 text-emerald-400 mb-4 font-bold">
               <MessageCircle className="w-5 h-5" /> Client Message
             </div>
             <p className="text-xl text-white font-medium mb-4 italic">"I got 4 clients signed from that 1 video. Crazyyyy"</p>
             <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">4 clients signed from a single video 🤯</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps: Step[] = [
    { number: 1, title: "Video Ideation", description: "We combine human market research with AI scanning tools to analyze trends, patterns, and winning content across your niche.", details: "This allows us to identify viral-ready angles faster, validate demand before posting, and map a content plan designed to attract buyers" },
    { number: 2, title: "Video Scripting", description: "Every script is built using proven psychological frameworks.", details: "You record once per week, following scripts engineered to engrave your authority, communicate value clearly, and drive inbound demand." },
    { number: 3, title: "Recording", description: "We simplify recording with clear prompts, structure, and flow so you can batch all content in a single session." },
    { number: 4, title: "Editing", description: "Your raw footage is transformed into high-retention, professional content by expert editors, ensuring pacing, subtitles, and visual clarity are optimized for attention." },
    { number: 5, title: "SEO & Captions", description: "We deliver each video with optimized captions, keywords, and recommended posting times.", details: "This ensures your content ranks higher, reaches the right audience, and consistently builds brand visibility." },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Here's How It Works</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">You record once. We handle everything else. This system is built so your content grows your business in the background while you stay focused on serving clients.</p>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start glass-card p-8 rounded-3xl border-l-4 border-l-blue-600">
              <div className="w-12 h-12 flex-shrink-0 bg-blue-600 rounded-xl flex items-center justify-center font-black text-2xl text-white italic">
                {step.number}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 uppercase italic">{step.title}</h3>
                <p className="text-lg text-slate-300 mb-3">{step.description}</p>
                {step.details && <p className="text-slate-500 text-sm leading-relaxed">{step.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonTable = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-16 leading-tight">So... How Is Socialvert Different From Every Other Agency?</h2>
      
      <div className="overflow-hidden glass-card rounded-3xl border border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-white/10">
          <div className="hidden md:block p-8 bg-white/5 font-bold uppercase tracking-widest text-xs text-slate-500">Feature</div>
          <div className="p-8 bg-red-500/5 font-bold uppercase tracking-widest text-xs text-red-400 text-center">Typical Agencies</div>
          <div className="p-8 bg-blue-500/5 font-bold uppercase tracking-widest text-xs text-blue-400 text-center">Socialvert</div>
        </div>
        
        {[
          ["Time Commitment", "\"Minimal time required\" (reality: 10 hrs/wk)", "Actually 1 hour/month"],
          ["Communication", "Quarterly check-ins, then ghosting", "24/7 WhatsApp access (text us anytime)"],
          ["Focus", "Generic \"we work with lawyers\"", "Exclusive PI attorney focus"],
          ["Strategy", "Random posting, no strategy", "Psychology-based framework"],
          ["Retention", "High churn, clients leave fast", "95% retention rate (first client 3+ years)"],
          ["Proof", "Promises without proof", "2+ billion views generated"],
        ].map(([label, bad, good], i) => (
          <div key={i} className="grid grid-cols-2 md:grid-cols-3 divide-x divide-white/10 border-t border-white/10 group">
            <div className="hidden md:block p-8 font-semibold text-slate-300">{label}</div>
            <div className="p-8 text-center text-slate-500 flex flex-col items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500 opacity-50" />
              <span className="text-sm">{bad}</span>
            </div>
            <div className="p-8 text-center text-white font-bold flex flex-col items-center gap-2 bg-blue-500/5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm">{good}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhatYouGet = () => {
  const items = [
    { icon: BrainCircuit, title: "Authority Positioning Strategy", text: "Custom positioning that differentiates you from every other PI attorney in your market" },
    { icon: Zap, title: "Psychology-Based Content Scripts", text: "Pre-written scripts using proven psychological triggers (no guessing what to say)" },
    { icon: Clock, title: "Monthly Recording Sessions", text: "1 hour/month guided recording (we handle setup, delivery coaching, everything)" },
    { icon: Video, title: "Premium Video Production", text: "Retention-optimized editing that positions you as the recognized expert" },
    { icon: Users, title: "Multi-Platform Distribution", text: "Strategic posting across Instagram, TikTok, YouTube Shorts (SEO-optimized for discovery)" },
    { icon: Search, title: "Authority Signal Tracking", text: "Monthly reports tracking what actually matters: authority recognition, inbound quality, premium positioning" },
  ];

  return (
    <section className="py-24 px-4 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16 text-center">Here's What You Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl glass-card hover:bg-white/5 transition-all">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 italic">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Guarantee = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto p-12 rounded-[3rem] bg-blue-600 relative overflow-hidden text-center">
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <ShieldCheck className="w-64 h-64" />
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Our 90-Day Authority Signal Guarantee</h2>
        <p className="text-2xl text-blue-50 mb-12 leading-relaxed">Within 90 days, you will see measurable authority signals and inbound conversations or we keep working for <span className="underline decoration-white underline-offset-4">FREE</span> until you do.</p>
        
        <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto bg-black/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-4">What "Authority Signals" Means:</h4>
            <ul className="space-y-3">
              {[
                "Increased profile visits from ideal clients",
                "Quality inbound DMs referencing your content",
                "Recognition in your market as a known name",
                "Warmer leads across all acquisition channels"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-white" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-4">What This Requires From You:</h4>
            <ul className="space-y-3">
              {[
                "Show up for 1 hour of recording per month",
                "Give us 90 days to build momentum",
                "Trust the psychology-based process"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-white" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Fix: Explicitly typed FAQAccordion as a React.FC to properly support the 'key' prop when mapped in a list.
const FAQAccordion: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left gap-4"
      >
        <span className="text-xl font-bold text-white hover:text-blue-400 transition-colors">{item.question}</span>
        <ChevronRight className={`w-6 h-6 text-slate-500 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-4 text-slate-400 leading-relaxed animate-fade-in">
          {item.answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs: FAQItem[] = [
    { question: "1. What exactly does Socialvert help with?", answer: "We build and run your entire authority content system—from positioning strategy and psychology-based scripting to premium editing, multi-platform posting, and SEO optimization. You only need to record for one hour per month. Everything else is handled done-for-you, with a focus on generating premium inbound cases and authority—not just views or engagement." },
    { question: "2. Why social media? I'm an attorney, not an influencer.", answer: "Because trust is built before the call, not during it. When prospects research attorneys (which they all do), strategic social content lets them experience your expertise and authority in advance—so when they reach out, they're already warm, pre-sold, and choosing you specifically. Done right, it compounds over time instead of expiring like ads or cold outreach." },
    { question: "3. I'm already getting cases from referrals. Why add this?", answer: "Because those channels work better when authority exists first. Authority content pre-sells prospects before they ever speak to you, making referrals convert easier, ads perform better, and your reputation spread faster. Social media doesn't replace what's working—it amplifies and compounds it." },
    { question: "4. How much time does this actually take me?", answer: "About one hour per month. You simply record using our pre-written psychology-based scripts while we handle everything else—market research, scripting, editing, caption writing, posting, and optimization—so the system runs without pulling you away from cases or court." },
    { question: "5. How do I know this will work for my practice?", answer: "This system is built for personal injury attorneys who sell expertise—not influencers chasing views. If you have a proven offer (you convert cases when you get qualified leads) and can commit to one recording session per month, we handle the strategy, execution, and optimization to turn visibility into authority and inbound demand. And if you're still unsure—that's exactly why we start with a free strategy session. So we can audit your market, show you what's possible, and make sure it's a fit before we build anything." },
    { question: "8. How is this different from hiring a video editor or typical agency?", answer: "Editors execute tasks. We build a system. We handle positioning, psychology-based messaging, strategic scripting, premium production, and multi-platform distribution so your content creates authority and inbound demand—not just polished videos. Plus, we're exclusive to personal injury attorneys. We understand contingency fees, case timelines, ethics rules, and case manager referrals. Generic agencies don't." },
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => <FAQAccordion key={i} item={faq} />)}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-24 px-4 text-center">
    <div className="max-w-3xl mx-auto glass-card p-12 rounded-[3rem] border border-blue-500/20">
      <div className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-400 rounded-full font-bold text-xs tracking-widest uppercase mb-8">Limited Availability</div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Book Your Free Authority Strategy Session</h2>
      <p className="text-xl text-slate-400 mb-10">Only 4 spots available this month for serious personal injury attorneys ready to build real authority.</p>
      <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-blue-600/40 transition-all flex items-center justify-center gap-4 mx-auto uppercase italic tracking-tight">
        Claim Your Session Now <ChevronRight className="w-6 h-6" />
      </button>
      <p className="mt-8 text-slate-500 text-sm italic">"Socialvert is designed to work before you have scale. We focus on the right people, not just the most people."</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 px-4 text-center text-slate-500 text-sm">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-slate-600 rounded-md flex items-center justify-center font-bold text-white italic text-xs">S</div>
        <span className="text-lg font-black tracking-tight text-white uppercase italic">Socialvert</span>
      </div>
      <p>&copy; {new Date().getFullYear()} Socialvert. Exclusive to Personal Injury Attorneys. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustLogos />
      <PainPoints />
      <Solution />
      <Process />
      <CaseStudies />
      <ComparisonTable />
      <WhatYouGet />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}