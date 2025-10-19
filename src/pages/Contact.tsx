import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Twitter, Music } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";
import consultationMeeting from "@/assets/consultation-meeting.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="h-screen flex items-center relative overflow-hidden">
          {/* Background Image */}
          <img 
            src={contactHero}
            alt="Contact Jane Alabo Jewelry"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <h1 className="nb-medium text-white mb-6 sm:mb-8 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg max-w-md text-white/80">
              Begin your journey to exceptional jewelry
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              <div>
                <div className="mb-6 md:mb-8">
                  <span className="nb-mono text-2xl sm:text-3xl md:text-[32px] leading-tight md:leading-[32px]">01</span>
                </div>
                <h2 className="nb-medium mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Start Your Commission
                </h2>
                <p className="text-base md:text-lg mb-6 md:mb-8 text-muted-foreground max-w-lg">
                  Ready to create something extraordinary? Share your vision with us and let's begin crafting your perfect piece.
                </p>
                
                <form className="space-y-4 md:space-y-6 max-w-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                  <Input placeholder="Phone Number" />
                  <div>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option>Select Jewelry Type</option>
                      <option>Custom Rings</option>
                      <option>Luxury Bracelets</option>
                      <option>Designer Necklaces</option>
                      <option>Custom Earrings</option>
                      <option>Luxury Cufflinks</option>
                    </select>
                  </div>
                  <Textarea 
                    placeholder="Tell us about your vision, budget, and timeline..."
                    rows={4}
                  />
                  <Button size="lg" className="w-full">
                    Send Inquiry
                  </Button>
                </form>
              </div>
              <div className="w-full">
                <img 
                  src={consultationMeeting}
                  alt="Jewelry consultation meeting"
                  className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              <div>
                <div className="mb-6 md:mb-8">
                  <span className="nb-mono text-2xl sm:text-3xl md:text-[32px] leading-tight md:leading-[32px]">02</span>
                </div>
                <h2 className="nb-medium mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Visit Our Atelier
                </h2>
                <div className="space-y-6 md:space-y-8 max-w-lg">
                  <div>
                    <h3 className="text-lg font-medium mb-2">New York Flagship</h3>
                    <p className="text-muted-foreground mb-2">
                      Madison Avenue, Suite 1200<br />
                      New York, NY 10021
                    </p>
                    <p className="text-sm text-muted-foreground">
                      By appointment only<br />
                      Monday - Saturday: 10AM - 6PM
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Beverly Hills</h3>
                    <p className="text-muted-foreground mb-2">
                      Rodeo Drive, Suite 400<br />
                      Beverly Hills, CA 90210
                    </p>
                    <p className="text-sm text-muted-foreground">
                      By appointment only<br />
                      Tuesday - Saturday: 11AM - 7PM
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Contact Details</h3>
                    <p className="text-muted-foreground">
                      Phone: +1 (555) 123-4567<br />
                      Email: hello@janealabo.com<br />
                      Private Line: +1 (555) 987-6543
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] bg-muted rounded-sm flex items-center justify-center">
                <p className="text-muted-foreground">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-6 md:mb-8">
                <span className="nb-mono text-2xl sm:text-3xl md:text-[32px] leading-tight md:leading-[32px]">03</span>
              </div>
              <h2 className="nb-medium mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Follow Our Journey
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
                Stay connected with Jane Alabo for behind-the-scenes content, new collections, and exclusive previews of our latest creations.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
                <a 
                  href="https://instagram.com/janealabo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg hover:bg-accent transition-colors w-full max-w-xs sm:w-auto"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram size={24} className="sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium mb-1">Instagram</h3>
                    <p className="text-sm text-muted-foreground">@janealabo</p>
                  </div>
                </a>
                
                <a 
                  href="https://x.com/janealabo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg hover:bg-accent transition-colors w-full max-w-xs sm:w-auto"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Twitter size={24} className="sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium mb-1">X (Twitter)</h3>
                    <p className="text-sm text-muted-foreground">@janealabo</p>
                  </div>
                </a>
                
                <a 
                  href="https://tiktok.com/@janealabo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg hover:bg-accent transition-colors w-full max-w-xs sm:w-auto"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Music size={24} className="sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium mb-1">TikTok</h3>
                    <p className="text-sm text-muted-foreground">@janealabo</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2025 Jane Alabo Jewelry</div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-8">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="https://instagram.com/janealabo" className="hover:text-foreground transition-colors">Instagram</a>
              <a href="https://x.com/janealabo" className="hover:text-foreground transition-colors">X</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;