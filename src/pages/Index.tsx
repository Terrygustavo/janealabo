import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import OrderModal from "@/components/OrderModal";
import { useInView } from "@/hooks/useInView";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
// import heroJewelry from "@/assets/hero-jewelry.jpg";
import KenBurnsHeroBg from "@/components/KenBurnsHeroBg";
import jewelryRings from "@/assets/jewelry-rings.jpg";
import jewelryBracelets from "@/assets/jewelry-bracelets.jpg";
import jewelryNecklaces from "@/assets/jewelry-necklaces.jpg";
import jewelryEarrings from "@/assets/jewelry-earrings.jpg";
import jewelryCufflinks from "@/assets/jewelry-cufflinks.jpg";
import membershipConsultation from "@/assets/membership-consultation.jpg";
import consultationMeeting from "@/assets/consultation-meeting.jpg";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const { ref: membershipRef, isInView: membershipInView } = useInView({ threshold: 0.2 });
  const { ref: consultationRef, isInView: consultationInView } = useInView({ threshold: 0.2 });
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  
  // Scroll animation refs
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  
  // Hero scroll animations
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Services scroll animations
  const { scrollYProgress: servicesScrollProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values for scale animations
  const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  
  const servicesScale = useTransform(servicesScrollProgress, [0, 0.5, 1], [0.95, 1, 1.05]);
  
  const services = [
    {
      title: "Custom Rings",
      subtitle: "Exquisite handcrafted rings designed to perfection, featuring the finest diamonds and precious metals for your special moments.",
      image: jewelryRings,
      price: "From $200",
      exploreLink: "/custom-rings",
      additionalServices: ["Diamond Rings", "Wedding Bands", "Engagement Rings", "Statement Rings"]
    },
    {
      title: "Luxury Bracelets", 
      subtitle: "Elegant bracelets crafted with precision, showcasing stunning gemstones and precious metals for the discerning collector.",
      image: jewelryBracelets,
      price: "From $200",
      exploreLink: "/luxury-bracelets",
      additionalServices: ["Tennis Bracelets", "Chain Bracelets", "Charm Bracelets"]
    },
    {
      title: "Designer Necklaces",
      subtitle: "Breathtaking necklaces that embody luxury and sophistication, perfect for making an unforgettable impression.",
      image: jewelryNecklaces,
      price: "From $300",
      exploreLink: "/designer-necklaces",
      additionalServices: ["Pendant Necklaces", "Chokers", "Statement Pieces"]
    },
    {
      title: "Custom Earrings",
      subtitle: "Stunning earrings designed to complement your unique style, featuring exceptional craftsmanship and premium materials.",
      image: jewelryEarrings,
      price: "From $200",
      exploreLink: "/custom-earrings",
      additionalServices: ["Diamond Studs", "Drop Earrings", "Hoop Earrings", "Chandelier Earrings"]
    },
    {
      title: "Luxury Cufflinks",
      subtitle: "Distinguished cufflinks for the modern gentleman, combining traditional craftsmanship with contemporary design.",
      image: jewelryCufflinks,
      price: "From $200",
      exploreLink: "/luxury-cufflinks",
      additionalServices: ["Gold Cufflinks", "Diamond Cufflinks", "Custom Engravings"]
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden relative w-full">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16 overflow-x-hidden w-full">
        {/* Hero Section - 100vh */}
        <motion.section 
          ref={heroRef}
          className="min-h-screen flex items-center relative overflow-hidden w-full"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          {/* Animated Ken Burns Background */}
          <KenBurnsHeroBg />
          
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"></div>
          
          {/* Content */}
          <motion.div 
            className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full relative z-10 py-20 sm:py-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Center-top CTA pill button */}
            <div className="w-full flex justify-start mb-5">
              <button
                className="rounded-full border border-white/60 bg-transparent px-6 py-2.5 text-base font-medium text-left cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/90 backdrop-blur-sm flex items-center gap-3"
                aria-label="Introducing Jane Alabo"
              >
                <span className="bg-gradient-to-r from-[#ff007a] to-[#ff9900] bg-clip-text text-transparent">
                  <span className="font-bold">Jane Alabo</span>
                </span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/60 bg-white/5 transition-all duration-300 hover:border-white/90">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>
            </div>
            <motion.h1 
              className="nb-medium text-white mb-4 sm:mb-6 md:mb-8 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              Luxury Custom Jewelry
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg max-w-md text-white/80 mb-6 sm:mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              Rings · Bracelets · Necklaces · Earrings · Cufflinks
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 backdrop-blur-sm px-6 sm:px-8 py-3 h-auto text-sm sm:text-base"
                onClick={() => {
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Collection
              </Button>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base"
                onClick={() => setIsOrderModalOpen(true)}
              >
                Order Now
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          id="services"
          ref={servicesRef}
          className="py-8 sm:py-12 md:py-16 lg:py-20"
          style={{ scale: servicesScale }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`${index === 4 ? 'pb-8 sm:pb-12 md:pb-16 lg:pb-20' : ''}`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProductCard {...service} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Text Section with Parallax Background */}
        <motion.section 
          className="min-h-screen flex items-center justify-center relative z-10 py-16 sm:py-20"
          style={{
            backgroundImage: `url(/lovable-uploads/86f013b4-8134-40be-a647-c1a3bbfe2b50.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              className="nb-medium mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Crafted with Passion, 
              <br className="hidden sm:block" />
              Worn with Pride
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-white/80 max-w-2xl mx-auto px-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Every piece tells a story of dedication, artistry, and timeless elegance. 
              Experience the difference of true craftsmanship.
            </motion.p>
          </div>
        </motion.section>

        {/* Membership Section */}
        <motion.section 
          className="py-10 sm:py-12 md:py-16 lg:py-20 border-t border-border bg-background relative z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={membershipRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-start">
              <motion.div 
                className={`${membershipInView ? 'animate-slide-in-left' : 'opacity-0'} order-2 lg:order-1`}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <span className="nb-mono text-xl sm:text-2xl md:text-3xl leading-tight">06</span>
                </div>
                <h2 className="nb-medium mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                  Membership
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-muted-foreground max-w-lg">
                  Join our exclusive membership program for priority access to limited collections and personalized jewelry services.
                </p>
                <motion.button 
                  className="border border-foreground px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-foreground hover:text-background transition-colors mb-6 md:mb-8 w-full sm:w-auto text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Apply Now
                </motion.button>
                
                {/* Membership Options */}
                <div className="space-y-3">
                  {["Monthly", "Annually"].map((option, index) => (
                    <motion.button
                      key={index}
                      className="w-full sm:max-w-xs text-left border border-muted-foreground/30 px-4 py-3 hover:bg-muted hover:border-muted-foreground/50 transition-colors text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg order-1 lg:order-2"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img 
                  src={membershipConsultation}
                  alt="Luxury membership consultation room with elegant interior design"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="py-10 sm:py-12 md:py-16 lg:py-20 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={consultationRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-start">
              <motion.div 
                className={`${consultationInView ? 'animate-slide-in-left' : 'opacity-0'} order-2 lg:order-1`}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <span className="nb-mono text-xl sm:text-2xl md:text-3xl leading-tight">07</span>
                </div>
                <h2 className="nb-medium mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                  Consultation
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-muted-foreground max-w-lg">
                  Schedule a private consultation to discuss your custom jewelry requirements and bring your vision to life.
                </p>
                <motion.button 
                  className="border border-foreground px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-foreground hover:text-background transition-colors w-full sm:w-auto text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Book Consultation
                </motion.button>
              </motion.div>
              <motion.div 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg order-1 lg:order-2"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img 
                  src="/consultation.webp"
                  alt="Jewelry consultation at Jane Alabo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

      </main>
      
      {/* Order Modal */}
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
      
      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="nb-medium text-lg sm:text-xl mb-3 sm:mb-4">Jane Alabo</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 max-w-xs">
                Luxury custom jewelry crafted with precision and passion for those who appreciate timeless elegance.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                  aria-label="Pinterest"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.372 0 12.017 0 16.4 2.331 20.027 5.706 21.852c-.074-.924-.005-2.030.422-3.015.450-1.04 2.857-12.118 2.857-12.118s-.74-1.478-.74-3.666c0-3.435 1.993-6.002 4.47-6.002 2.106 0 3.123 1.583 3.123 3.482 0 2.124-1.352 5.292-2.052 8.244-.584 2.471.99 4.485 2.931 4.485 3.523 0 5.906-4.53 5.906-9.894 0-4.065-2.749-7.11-7.327-7.11-5.393 0-8.775 3.993-8.775 8.701 0 1.58.479 2.678 1.225 3.515.27.317.308.445.21.808-.071.26-.23.928-.296 1.188-.097.374-.404.506-.74.369-2.636-1.073-3.775-3.851-3.775-6.976 0-5.218 4.187-11.18 12.458-11.18C17.944 1.268 22.8 5.843 22.8 12.019c0 8.344-4.666 14.633-11.59 14.633-2.339 0-4.537-1.297-5.29-2.789 0 0-1.257 5.074-1.498 5.927-.456 1.716-1.341 3.874-2.119 5.392 1.594.491 3.28.744 5.022.744C18.626 24.034 24 18.662 24 12.017 24 5.372 18.626.001 12.001.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Collections Section */}
            <div>
              <h4 className="nb-medium text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">Collections</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="/custom-rings" className="text-muted-foreground hover:text-foreground transition-colors">Custom Rings</a></li>
                <li><a href="/luxury-bracelets" className="text-muted-foreground hover:text-foreground transition-colors">Luxury Bracelets</a></li>
                <li><a href="/designer-necklaces" className="text-muted-foreground hover:text-foreground transition-colors">Designer Necklaces</a></li>
                <li><a href="/custom-earrings" className="text-muted-foreground hover:text-foreground transition-colors">Custom Earrings</a></li>
                <li><a href="/luxury-cufflinks" className="text-muted-foreground hover:text-foreground transition-colors">Luxury Cufflinks</a></li>
              </ul>
            </div>
            
            {/* Company Section */}
            <div>
              <h4 className="nb-medium text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">Company</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Consultation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Care Guide</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Warranty</a></li>
              </ul>
            </div>
            
            {/* Support Section */}
            <div>
              <h4 className="nb-medium text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">Support</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Shipping</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Returns</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Border */}
          <div className="border-t border-border mt-10 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="nb-mono text-xs sm:text-sm text-muted-foreground text-center md:text-left">
                © 2024 Jane Alabo. All rights reserved.
              </div>
              <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6 text-xs text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors whitespace-nowrap">Terms of Service</a>
                <a href="#" className="hover:text-foreground transition-colors whitespace-nowrap">Cookie Policy</a>
                <a href="#" className="hover:text-foreground transition-colors whitespace-nowrap">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;