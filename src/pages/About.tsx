import { Header } from "@/components/Header";


const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="h-screen flex items-center relative overflow-hidden">
          {/* Image Background */}
          <img 
            src="/jane.webp"
            alt="Jane Alabo Luxury Jewelry Atelier"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <h1 className="nb-medium text-white mb-6 sm:mb-8 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Jane Alabo
            </h1>
            <p className="text-base sm:text-lg max-w-md text-white/80">
              Where artistry meets timeless elegance
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              <div>
                <div className="mb-6 md:mb-8">
                  <span className="nb-mono text-2xl sm:text-3xl md:text-[32px] leading-tight md:leading-[32px]">01</span>
                </div>
                <h2 className="nb-medium mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  The Beginning & Heritage
                </h2>
                <p className="text-base md:text-lg mb-6 md:mb-8 text-muted-foreground max-w-lg">
                  Jane Alabo’s love affair with fine jewelry began over two decades ago, inspired by the treasures in her grandmother’s vintage collection — pieces that whispered stories of generations past. Those heirlooms were more than adornments; they were history, legacy, and love cast in gold and gems. Founded on the principle that exceptional jewelry should tell a story, Jane has been creating heirloom pieces for discerning collectors worldwide for over two decades.
                </p>
                <p className="text-base md:text-lg text-muted-foreground max-w-lg">
                  We believe that true luxury lies not just in precious materials, but in the masterful artistry that transforms them into timeless works of art. Guided by early inspiration, Jane mastered the art of traditional metalworking and gemology, blending old-world craftsmanship with contemporary design vision.
                </p>
              </div>
              <div className="w-full">
                <img 
                  src="/jane1.webp"
                  alt="Master craftsman at work in Jane Alabo atelier"
                  className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:flex lg:flex-row-reverse lg:grid-cols-none">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8">
                  <span className="nb-mono text-2xl sm:text-3xl md:text-[32px] leading-tight md:leading-[32px]">02</span>
                </div>
                <h2 className="nb-medium mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  The Philosophy
                </h2>
                <p className="text-base md:text-lg mb-6 md:mb-8 text-muted-foreground max-w-lg">
                  For Jane, jewelry is never just an accessory. It is a storyteller, a keeper of memories, and a mark of life’s most cherished moments. Every creation reflects her belief that what you wear should carry meaning — celebrating milestones, love stories, and the individuality of the person who wears it.
                </p>
                <p className="text-base md:text-lg text-muted-foreground max-w-lg">
                  Our commitment extends beyond mere creation – we build lasting relationships founded on trust, artistry, and the shared appreciation for exceptional beauty.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <img 
                  src="/jane2.webp"
                  alt="Exquisite jewelry pieces showcasing Jane Alabo's philosophy"
                  className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Master Craftsmanship Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              <div>
                <div className="mb-6 md:mb-8">
                  <span className="nb-mono text-2xl sm:text-3xl md:text-[32px] leading-tight md:leading-[32px]">03</span>
                </div>
                <h2 className="nb-medium mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Craft & Vision
                </h2>
                <p className="text-base md:text-lg mb-6 md:mb-8 text-muted-foreground max-w-lg">
                  Guided by this early inspiration, Jane mastered the art of traditional metalworking and gemology, blending old-world craftsmanship with contemporary design vision. The result is jewelry that transcends trends — pieces that are timeless yet modern, luxurious yet deeply personal.
                </p>
                <p className="text-base md:text-lg text-muted-foreground max-w-lg">
                  Each piece is meticulously handcrafted using time-honored techniques combined with modern precision, ensuring that every creation meets our exacting standards.
                </p>
              </div>
              <div className="w-full">
                <img 
                  src="/jewel1.webp"
                  alt="Jane Alabo receiving recognition for her craft"
                  className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Clientele Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:flex lg:flex-row-reverse lg:grid-cols-none">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8">
                  <span className="nb-mono text-2xl sm:text-3xl md:text-[32px] leading-tight md:leading-[32px]">04</span>
                </div>
                <h2 className="nb-medium mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Education & Recognition
                </h2>
                <p className="text-base md:text-lg mb-6 md:mb-8 text-muted-foreground max-w-lg">
                  Jane’s artistry and dedication were recently recognized when she graduated with Distinction from the Birmingham City University (BCU) School of Jewellery — a testament to years of passion, discipline, and pursuit of excellence. This milestone was built upon the foundation laid at the Lagos Jewelry School, where her journey began, and fueled by the unwavering love and support of family, friends, and mentors.
                </p>
                <p className="text-base md:text-lg text-muted-foreground max-w-lg">
                  From royal commissions to intimate engagement rings, our global reach ensures that exceptional craftsmanship knows no geographical limits.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <img 
                  src="/jane3.webp"
                  alt="Master jeweler crafting luxury jewelry with precision"
                  className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              <div>
                <div className="mb-6 md:mb-8">
                  <span className="nb-mono text-2xl sm:text-3xl md:text-[32px] leading-tight md:leading-[32px]">05</span>
                </div>
                <h2 className="nb-medium mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  The Brand Today
                </h2>
                <div className="space-y-6 md:space-y-8 max-w-lg">
                  <p className="text-base md:text-lg text-muted-foreground mb-6">Today, the Jane Alabo brand celebrates heritage, craftsmanship, and personal storytelling through jewelry. From bespoke engagement rings to heirloom redesigns, every piece is crafted to sparkle with both beauty and meaning — made not just for today, but to be treasured for generations.</p>
                </div>
              </div>
              <div className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] bg-muted overflow-hidden rounded-lg">
                <img 
                  src="/jewel2.webp"
                  alt="Jane Alabo brand storytelling through jewelry"
                  className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:flex lg:flex-row-reverse lg:grid-cols-none">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8">
                  <span className="nb-mono text-2xl sm:text-3xl md:text-[32px] leading-tight md:leading-[32px]">06</span>
                </div>
                <h2 className="nb-medium mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Ethical Practices
                </h2>
                <p className="text-base md:text-lg mb-6 md:mb-8 text-muted-foreground max-w-lg">
                  We are committed to responsible sourcing and sustainable practices throughout our supply chain, ensuring that beauty never comes at the cost of ethics.
                </p>
                <p className="text-base md:text-lg text-muted-foreground max-w-lg">
                  Our partnerships with certified suppliers guarantee that every diamond and precious metal meets the highest standards of ethical procurement.
                </p>
              </div>
              <div className="w-full lg:w-1/2 h-64 sm:h-96 md:h-[500px] lg:h-[600px] bg-muted overflow-hidden rounded-lg">
                <img 
                  src="/jewel3.webp"
                  alt="Ethical jewelry practices at Jane Alabo"
                  className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="nb-mono">© 2024 Jane Alabo</div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-8">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
      {/* Closing Note Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-border bg-white/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl md:text-2xl italic text-muted-foreground">“Here’s to new beginnings, timeless beauty, and jewelry that tells your story.”</blockquote>
        </div>
      </section>
export default About;