import { ExternalLink, Github, MessageSquare, Radio, FileAudio, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

const FypSection = () => {
  return (
    <section id="fyp" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-primary text-sm tracking-widest mb-2">
            {"// FINAL YEAR PROJECT - ONGOING"}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Meshtastic Network for <span className="text-gradient">Disaster Management</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Evaluation and adaptation of Meshtastic Network for disaster management scenarios
          </p>
        </div>

        {/* Main Project Overview */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Network className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Meshtastic Network for Disaster Management</h4>
                <p className="text-muted-foreground font-mono text-sm">
                  Research & Development Project - 2024 - Present
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              An ongoing Final Year Project focused on evaluating and adapting the Meshtastic Network platform 
              for disaster management scenarios. Meshtastic is an open-source, off-grid mesh communication system 
              that enables long-range, low-power communication without traditional infrastructure, making it ideal 
              for disaster response situations where conventional networks fail.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h5 className="font-semibold">Voice Communication Integration</h5>
                </div>
                <p className="text-sm text-muted-foreground">
                  Implementing voice communication capabilities over Meshtastic using Android and iOS applications. 
                  Developing solutions for recording, compressing, and transmitting voice messages efficiently 
                  over resource-constrained mesh networks.
                </p>
              </div>

              <div className="p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Radio className="h-5 w-5 text-primary" />
                  <h5 className="font-semibold">Analytics Dashboard</h5>
                </div>
                <p className="text-sm text-muted-foreground">
                  Developing analytics dashboard for network monitoring using React.js and Node Package Manager. 
                  Real-time visualization of network topology, message flow, and system health metrics.
                </p>
              </div>

              <div className="p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileAudio className="h-5 w-5 text-primary" />
                  <h5 className="font-semibold">Research & Verification</h5>
                </div>
                <p className="text-sm text-muted-foreground">
                  Conducting related research on semantic communication and voice codec optimization (Opus, Codec2). 
                  Verifying system performance through simulations and field testing for disaster scenarios.
                </p>
              </div>

              <div className="p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Network className="h-5 w-5 text-primary" />
                  <h5 className="font-semibold">Network Evaluation</h5>
                </div>
                <p className="text-sm text-muted-foreground">
                  Evaluating Meshtastic's effectiveness for disaster management through comprehensive testing. 
                  Analyzing network resilience, coverage, latency, and reliability under various conditions.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary rounded">
                Kotlin
              </span>
              <span className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary rounded">
                React.js
              </span>
              <span className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary rounded">
                Node Package Manager
              </span>
              <span className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary rounded">
                Python
              </span>
              <span className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary rounded">
                Swift
              </span>
              <span className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary rounded">
                Meshtastic Framework
              </span>
            </div>
          </div>
        </div>

        {/* Key Contributions */}
        <div className="max-w-5xl mx-auto mb-16">
          <h4 className="text-2xl font-bold mb-8 text-center">Individual Contributions</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h5 className="font-semibold">Voice Communication</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Implementing voice communication over Meshtastic using Android and iOS apps. 
                Working on efficient audio transmission over Meshtastic protocol, ensuring suitability for 
                low-bandwidth mesh networks.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <Radio className="h-6 w-6 text-primary" />
                <h5 className="font-semibold">Network Monitoring</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Developing analytics dashboard for real-time network monitoring and visualization. 
                Creating intuitive interfaces to track mesh network health, node connectivity, and 
                message routing.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <FileAudio className="h-6 w-6 text-primary" />
                <h5 className="font-semibold">Research & Testing</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Conducting research on voice codecs and semantic communication. 
                Verifying system performance through simulations and real-world testing scenarios 
                for disaster management applications.
              </p>
            </div>
          </div>
        </div>

        {/* Related Repositories */}
        <div className="max-w-5xl mx-auto">
          <h4 className="text-xl font-bold mb-6 text-center">Related Repositories</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://github.com/Meshtastic-DM/Meshtastic-Android" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-5 card-hover group flex items-start gap-4"
            >
              <Github className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <h5 className="font-semibold group-hover:text-primary transition-colors mb-1">
                  Meshtastic-Android
                </h5>
                <p className="text-sm text-muted-foreground">
                  Android application with voice message capability integration
                </p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </a>

            <a 
              href="https://github.com/Meshtastic-DM/meshtastic-voice-messenger" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-5 card-hover group flex items-start gap-4"
            >
              <Github className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <h5 className="font-semibold group-hover:text-primary transition-colors mb-1">
                  Voice Messenger
                </h5>
                <p className="text-sm text-muted-foreground">
                  Python application for compressed audio transmission research
                </p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </a>

            <a 
              href="https://github.com/Meshtastic-DM/SDN_Dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-5 card-hover group flex items-start gap-4"
            >
              <Github className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <h5 className="font-semibold group-hover:text-primary transition-colors mb-1">
                  Analytics Dashboard
                </h5>
                <p className="text-sm text-muted-foreground">
                  Network monitoring dashboard for Meshtastic mesh networks
                </p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/Meshtastic-DM" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-outline" size="lg">
              View Organization on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FypSection;
