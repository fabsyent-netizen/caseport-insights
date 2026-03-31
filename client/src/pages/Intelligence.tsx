import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, Zap, BarChart3, Lock, Target } from 'lucide-react';

/**
 * CasePort Intelligence Landing Page
 * 
 * Design Philosophy: "Data Observatory" — Brutalist minimalism meets data science
 * - Asymmetric 60/40 layout (narrative left, live data right)
 * - Cyan accents only on active data points (creating urgency)
 * - Staggered animations and glass-morphism panels
 * - PASTOR conversion sequence with temperature shifts (cyan → gold → cyan)
 * 
 * This page is a list-building, lead-capture experience designed for elite PI law firms.
 * Every element reinforces: "You're seeing proprietary intelligence in real-time."
 */

interface LiveCounter {
  label: string;
  value: number;
  suffix: string;
}

export default function Intelligence() {
  const [counters, setCounters] = useState<Record<string, number>>({
    casesInFlight: 2847,
    firmsConnected: 156,
    marketCapRemaining: 34,
    conversionRate: 18,
  });

  // Animate counters on mount
  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setCounters(prev => ({
          ...prev,
          casesInFlight: prev.casesInFlight + Math.floor(Math.random() * 3),
          firmsConnected: prev.firmsConnected + (Math.random() > 0.7 ? 1 : 0),
          marketCapRemaining: Math.max(0, prev.marketCapRemaining - (Math.random() > 0.8 ? 1 : 0)),
        }));
      }, 3000),
    ];

    return () => intervals.forEach(i => clearInterval(i));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-sm font-mono uppercase tracking-wider text-accent">
            CasePort Intelligence
          </div>
          <Button 
            className="bg-gradient-to-r from-[#06B6D4] to-[#0891B2] hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            size="sm"
          >
            Request Access <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section - PROBLEM + AMPLIFY */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background gradient zones */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Narrative */}
          <div className="space-y-8">
            <div className="space-y-4 animate-in fade-in slide-in-from-left-20 duration-1000">
              <div className="text-xs font-mono uppercase tracking-widest text-accent">
                For Elite Personal Injury Firms
              </div>
              <h1 className="text-5xl font-bold leading-tight">
                Stop Guessing.
                <br />
                <span className="text-accent">Start Controlling</span>
                <br />
                Case Intelligence.
              </h1>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-md animate-in fade-in slide-in-from-left-20 duration-1000 delay-100">
              You're not losing cases because there's no demand. You're losing them because <span className="text-accent font-semibold">value breaks down after inquiry</span>. CasePort gives you real-time visibility into case flow—from search intent to signed opportunity.
            </p>

            {/* Trust signals - TESTIMONY */}
            <div className="space-y-3 pt-4 animate-in fade-in slide-in-from-left-20 duration-1000 delay-200">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Market-Capped Exclusivity</div>
                  <div className="text-xs text-foreground/60">3 firms per metro area maximum</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Review-First Onboarding</div>
                  <div className="text-xs text-foreground/60">Every opportunity pre-qualified</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Transparent Reporting</div>
                  <div className="text-xs text-foreground/60">Full visibility into case flow metrics</div>
                </div>
              </div>
            </div>

            {/* CTA - RESPONSE */}
            <div className="pt-6 animate-in fade-in slide-in-from-left-20 duration-1000 delay-300">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#06B6D4] to-[#0891B2] hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group"
              >
                See Intelligence Dashboard
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-foreground/50 mt-3">Limited to 3 firms per market. Current availability: 34 slots.</p>
            </div>
          </div>

          {/* Right: Live Data Visualization */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right-20 duration-1000 delay-300">
            {/* Hero background image */}
            <div className="relative h-96 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482465617/LAV6Q5KQeg36DB9a5R9GW9/intelligence-hero-data-flow-fTtNNYjuPckE49Z3r4Si2U.webp"
                alt="Case Flow Analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
            </div>

            {/* Live metrics cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-xl border border-border/50 backdrop-blur-xl bg-white/3 animate-in fade-in delay-500">
                <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">Cases In Flight</div>
                <div className="text-3xl font-bold text-foreground">{counters.casesInFlight.toLocaleString()}</div>
                <div className="text-xs text-foreground/50 mt-1">↑ 12 this hour</div>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-border/50 backdrop-blur-xl bg-white/3 animate-in fade-in delay-700">
                <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">Firms Connected</div>
                <div className="text-3xl font-bold text-foreground">{counters.firmsConnected}</div>
                <div className="text-xs text-foreground/50 mt-1">Active members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The System - STORY/SOLUTION */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 space-y-4 text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-accent">
              The Case Flow Engine™
            </div>
            <h2 className="text-4xl font-bold">
              Six Stages. One System. Complete Control.
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From the moment a potential client searches for help to the moment you sign a case, every step is tracked, optimized, and reported.
            </p>
          </div>

          {/* Case Flow Diagram */}
          <div className="relative mb-16 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482465617/LAV6Q5KQeg36DB9a5R9GW9/intelligence-case-flow-diagram-WadNPG9fZs9aNwyiwDeHML.webp"
              alt="Case Flow Journey"
              className="w-full h-auto"
            />
          </div>

          {/* System specs grid */}
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                stage: '01',
                title: 'Search Intent',
                metrics: ['Keyword Volume: High', 'Intent Score: 85+', 'Sources: Organic, Paid'],
                icon: Target,
              },
              {
                stage: '02',
                title: 'Demand Capture',
                metrics: ['Conversion Rate: 12%', 'Capture Time: <2 min', 'Lead Sources: Web, Chat'],
                icon: Zap,
              },
              {
                stage: '03',
                title: 'Qualification',
                metrics: ['MQL to SQL: 40%', 'Criteria: Budget, Authority, Need', 'Scoring: Predictive AI'],
                icon: TrendingUp,
              },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-xl border border-border/50 backdrop-blur-xl bg-white/3 animate-in fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">{item.stage}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.metrics.map((metric, i) => (
                    <li key={i} className="text-sm text-foreground/70 font-mono text-xs">
                      <span className="text-accent">▸</span> {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Intelligence - AMPLIFY */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/3 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-yellow-400">
              Market Intelligence
            </div>
            <h2 className="text-4xl font-bold">
              The Personal Injury Market is Massive.
              <br />
              <span className="text-yellow-400">Firms that control case flow will dominate.</span>
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {[
              { label: 'U.S. Personal Injury Market', value: '$750B+', desc: 'Annual market size' },
              { label: 'Auto Accidents Per Year', value: '6M+', desc: 'In the United States' },
              { label: 'Average Cost Per Lead', value: '$45-$150', desc: 'For high-intent PI leads' },
              { label: 'Average Case Value', value: '$250K-$500K', desc: 'Auto accident settlements' },
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-xl border border-border/50 backdrop-blur-xl bg-white/3 animate-in fade-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="text-xs font-mono text-foreground/60 uppercase tracking-wider mb-3">{stat.label}</div>
                <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                <div className="text-xs text-foreground/50">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CasePort - TESTIMONY */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 space-y-4 text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-accent">
              Six Pillars of Trust
            </div>
            <h2 className="text-4xl font-bold">
              Built for Firms That Care About Quality
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              {
                title: 'Market-Capped Exclusivity',
                desc: 'Limited firms per region to preserve lead quality and prevent market saturation.',
              },
              {
                title: 'Review-First Onboarding',
                desc: 'Every opportunity is evaluated before access is granted. No surprises.',
              },
              {
                title: 'Transparent Reporting',
                desc: 'Full visibility into case flow activity and metrics. No black boxes.',
              },
              {
                title: 'Compliance-First Design',
                desc: 'Built with legal advertising compliance in mind. ABA rules baked in.',
              },
              {
                title: 'Dedicated Support',
                desc: 'Direct line to the team. No ticket queues. Real humans, real answers.',
              },
              {
                title: 'Qualification Standards',
                desc: 'Every opportunity is screened before routing. You only get qualified leads.',
              },
            ].map((pillar, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-xl border border-border/50 backdrop-blur-xl bg-white/3 animate-in fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-lg font-bold mb-2 text-accent">{pillar.title}</h3>
                <p className="text-sm text-foreground/70">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics & ROI - OFFER */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 space-y-4 text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-yellow-400">
              Real Results
            </div>
            <h2 className="text-4xl font-bold">
              What You Get Access To
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-12">
            {[
              { metric: '18%+', label: 'Lead-to-Case Conversion Rate', desc: 'Industry avg: 2-5%' },
              { metric: '40%', label: 'Faster Case Closure', desc: 'Reduced intake friction' },
              { metric: '3x', label: 'ROI Multiple', desc: 'Within 90 days of launch' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="glass-panel p-8 rounded-xl border border-border/50 backdrop-blur-xl bg-white/3 text-center animate-in fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl font-bold text-yellow-400 mb-2">{item.metric}</div>
                <div className="font-semibold mb-1">{item.label}</div>
                <div className="text-sm text-foreground/60">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Metrics visualization */}
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482465617/LAV6Q5KQeg36DB9a5R9GW9/intelligence-accent-metrics-e4ttwjMwx5VWyYubZsVsnq.webp"
              alt="Performance Metrics"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* FAQ - Hidden AEO Content */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is a case acquisition system?',
                a: 'A case acquisition system is a platform that manages the entire journey from lead capture to case signing. CasePort specializes in this for personal injury law firms.',
              },
              {
                q: 'How do you qualify opportunities before routing?',
                a: 'We use a multi-stage qualification process: intent scoring, budget verification, authority confirmation, and timeline assessment. Only qualified leads are routed.',
              },
              {
                q: 'What does market-capped mean?',
                a: 'We limit access to 3 firms per metropolitan area to preserve lead quality and prevent market saturation. This ensures your leads stay exclusive.',
              },
              {
                q: 'How quickly can I expect to see results?',
                a: 'Most firms see qualified leads within 48 hours of onboarding. Measurable ROI typically appears within 30-90 days.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl border border-border/50 backdrop-blur-xl bg-white/3">
                <h3 className="font-bold mb-2 text-accent">{faq.q}</h3>
                <p className="text-sm text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - RESPONSE */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold">
            Ready to Control Your Case Flow?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Limited availability. 34 slots remaining for your market. Join the firms that are already winning.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#06B6D4] to-[#0891B2] hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group"
            >
              Request Private Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-border hover:bg-white/5"
            >
              Download Intelligence Brief
            </Button>
          </div>

          <p className="text-xs text-foreground/50 max-w-xl mx-auto">
            By requesting access, you agree to our Terms of Service and Privacy Policy. 
            We respect your inbox—expect one email per week with market intelligence.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-sm text-foreground/60">
            © 2026 CasePort. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
