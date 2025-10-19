import { Header } from "@/components/Header";
import { ArrowRight, Users, MapPin, Star, Shield } from "lucide-react";
import braceletsHero from "@/assets/bracelets-hero.jpg";
import braceletCraftsmanship from "@/assets/bracelet-craftsmanship.jpg";
import braceletGemstones from "@/assets/bracelet-gemstones.jpg";
import braceletFitting from "@/assets/bracelet-fitting.jpg";
import braceletEngraving from "@/assets/bracelet-engraving.jpg";
import braceletMaintenance from "@/assets/bracelet-maintenance.jpg";
import braceletsGallery from "@/assets/bracelets-gallery-1.jpg";

const Bracelets = () => {
  const braceletData = [
    {
      name: "Diamond Line Bracelet",
      category: "Tennis Bracelets",
      material: "18K White Gold",
      stones: "Round Brilliant Diamonds",
      carat: "4.5 CT",
      image: "diamond-tennis"
    },
    {
      name: "Twisted Silver Bracelet",
      category: "Designer Bracelets", 
      material: "Sterling Silver",
      stones: "None",
      carat: "N/A",
      image: "emerald-chain"
    },
    {
      name: "Modern Link Bracelet",
      category: "Chain Bracelets",
      material: "Sterling Silver",
      stones: "None",
      carat: "N/A",
      image: "ruby-link"
    },
    {
      name: "Contemporary Cuff",
      category: "Statement Bracelets",
      material: "Sterling Silver",
      stones: "None",
      carat: "N/A",
      image: "sapphire-charm"
    }
  ];

  const imageMap: Record<string, string> = {
    "diamond-tennis": "/diamond%20bracelets.png",
    "emerald-chain": "/bracelet-twisted.jpg",
    "ruby-link": "/bracelet-silver.webp",
    "sapphire-charm": "/bracelets.webp",
  };

  const occasions = [
    "Anniversaries", "Birthdays", "Graduations", "Weddings", "Galas", "Corporate Events", 
    "Holidays", "Celebrations", "Red Carpet", "Special Occasions", "Investment Pieces", "Heirlooms"
  ];

  const galleryImages = [
    "/bracelets.webp",
    "/bracelet-silver.webp",
    "/bracelet-twisted.jpg",
    "/bracelet-tourmaline.heic",
    "/diamond%20bracelets.png"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="h-screen flex items-center relative overflow-hidden">
          {/* Image Background */}
          <img 
            src={braceletsHero}
            alt="Luxury Custom Bracelets Collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
            <h1 className="nb-medium text-white mb-8 max-w-4xl">
              Luxury Bracelets
            </h1>
            <p className="text-lg max-w-md text-white/80 mb-8">
              Elegant bracelets crafted with precision and adorned with the finest gemstones
            </p>
            <button className="border border-white px-6 py-3 text-white hover:bg-white hover:text-black transition-colors">
              Browse Collection
            </button>
          </div>
        </section>

        {/* Collection Overview Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="mb-8">
                  <span className="nb-mono text-[32px] leading-[32px]">01</span>
                </div>
                <h2 className="nb-medium mb-12">
                  Our Collection
                </h2>
                <p className="text-lg mb-8 text-muted-foreground max-w-lg">
                  Discover our exquisite collection of luxury bracelets, each piece meticulously crafted to showcase exceptional artistry and the finest materials.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 border border-border">
                    <div className="nb-mono text-2xl mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Designs</div>
                  </div>
                  <div className="text-center p-6 border border-border">
                    <div className="nb-mono text-2xl mb-2">25+</div>
                    <div className="text-sm text-muted-foreground">Gemstone Varieties</div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <img 
                  src="/jane1.webp"
                  alt="Master craftsman creating luxury bracelet with precision tools"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bracelet Styles Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <div className="mb-8">
                <span className="nb-mono text-[32px] leading-[32px]">02</span>
              </div>
              <h2 className="nb-medium mb-8">
                Bracelet Styles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Choose from our diverse selection of bracelet styles, each offering unique aesthetics and craftsmanship excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {braceletData.map((bracelet, index) => (
                <div key={index} className="border border-border p-8">
                  <img
                    src={imageMap[bracelet.image]}
                    alt={`${bracelet.name} bracelet`}
                    className="w-full h-96 object-cover mb-4"
                  />
                  <h3 className="text-lg font-medium mb-1">{bracelet.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{bracelet.category}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">Material:</span>
                      <div className="font-medium">{bracelet.material}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Stones:</span>
                      <div className="font-medium">{bracelet.stones}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Total Carat:</span>
                      <div className="font-medium">{bracelet.carat}</div>
                    </div>
                    <div className="flex items-center">
                      <button className="text-sm hover:text-muted-foreground transition-colors flex items-center">
                        View Details <ArrowRight className="ml-1 h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gemstone Selection Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:flex lg:flex-row-reverse lg:grid-cols-none">
              <div className="lg:w-1/2">
                <div className="mb-8">
                  <span className="nb-mono text-[32px] leading-[32px]">03</span>
                </div>
                <h2 className="nb-medium mb-12">
                  Premium Gemstones
                </h2>
                <p className="text-lg mb-8 text-muted-foreground max-w-lg">
                  We source only the finest gemstones from around the world, each selected for its exceptional quality, brilliance, and rarity.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 mt-1 mr-3 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium mb-1">Certified Diamonds</h4>
                      <p className="text-sm text-muted-foreground">GIA certified diamonds with exceptional clarity and cut</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Star className="h-5 w-5 mt-1 mr-3 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium mb-1">Precious Gemstones</h4>
                      <p className="text-sm text-muted-foreground">Emeralds, rubies, and sapphires of the highest grade</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 mt-1 mr-3 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium mb-1">Expert Selection</h4>
                      <p className="text-sm text-muted-foreground">Hand-selected by our master gemologists</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img 
                  src={braceletGemstones}
                  alt="Collection of premium gemstones for luxury bracelet creation"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Custom Fitting Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="mb-8">
                  <span className="nb-mono text-[32px] leading-[32px]">04</span>
                </div>
                <h2 className="nb-medium mb-12">
                  Perfect Fit
                </h2>
                <p className="text-lg mb-8 text-muted-foreground max-w-lg">
                  Our expert jewelers ensure every bracelet fits perfectly with personalized sizing and comfort considerations for daily wear.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Precision Sizing</h4>
                    <p className="text-sm text-muted-foreground">Accurate measurements for optimal comfort and security</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Comfort Design</h4>
                    <p className="text-sm text-muted-foreground">Ergonomic considerations for all-day wearability</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Adjustable Options</h4>
                    <p className="text-sm text-muted-foreground">Flexible sizing options for changing preferences</p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <img 
                  src={braceletFitting}
                  alt="Professional bracelet fitting session with precision measurements"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Occasions Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:flex lg:flex-row-reverse lg:grid-cols-none">
              <div className="lg:w-1/2">
                <div className="mb-8">
                  <span className="nb-mono text-[32px] leading-[32px]">05</span>
                </div>
                <h2 className="nb-medium mb-12">
                  Perfect Occasions
                </h2>
                <p className="text-lg mb-8 text-muted-foreground max-w-lg">
                  Our luxury bracelets are perfect for life's most important moments and everyday elegance alike.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {occasions.map((occasion, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <MapPin className="h-3 w-3 mr-2 text-muted-foreground" />
                      {occasion}
                    </div>
                  ))}
                </div>
                <button className="border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors">
                  View Occasion Guide
                </button>
              </div>
              <div className="w-full lg:w-1/2">
                <img 
                  src="/diamond%20bracelets.png"
                  alt="Elegant bracelet for special occasions"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tennis Bracelets Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="mb-8">
                  <span className="nb-mono text-[32px] leading-[32px]">06</span>
                </div>
                <h2 className="nb-medium mb-12">
                  Tennis Bracelets
                </h2>
                <p className="text-lg mb-8 text-muted-foreground max-w-lg">
                  The epitome of elegance, our tennis bracelets feature perfectly matched diamonds or gemstones in continuous, flexible settings.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Classic Designs</h4>
                    <p className="text-sm text-muted-foreground">Timeless tennis bracelet styles in various metals</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Premium Diamonds</h4>
                    <p className="text-sm text-muted-foreground">Perfectly matched diamonds for maximum brilliance</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Secure Clasps</h4>
                    <p className="text-sm text-muted-foreground">Advanced safety mechanisms for peace of mind</p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <img 
                  src="/bracelets.webp"
                  alt="Luxury tennis bracelet collection"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Engraving Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:flex lg:flex-row-reverse lg:grid-cols-none">
              <div className="lg:w-1/2">
                <div className="mb-8">
                  <span className="nb-mono text-[32px] leading-[32px]">07</span>
                </div>
                <h2 className="nb-medium mb-12">
                  Custom Engraving
                </h2>
                <p className="text-lg mb-8 text-muted-foreground max-w-lg">
                  Add a personal touch with our precision engraving services, creating meaningful inscriptions that last a lifetime.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Laser Precision</h4>
                    <p className="text-sm text-muted-foreground">Advanced laser engraving for crisp, detailed inscriptions</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Multiple Fonts</h4>
                    <p className="text-sm text-muted-foreground">Wide selection of elegant fonts and script styles</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Symbol Options</h4>
                    <p className="text-sm text-muted-foreground">Custom symbols, dates, and meaningful designs</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img 
                  src={braceletEngraving}
                  alt="Precision laser engraving process on luxury bracelet"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Chain Bracelets Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="mb-8">
                  <span className="nb-mono text-[32px] leading-[32px]">08</span>
                </div>
                <h2 className="nb-medium mb-12">
                  Chain Bracelets
                </h2>
                <p className="text-lg mb-8 text-muted-foreground max-w-lg">
                  Sophisticated chain bracelets featuring intricate link patterns and premium metal construction for versatile everyday luxury.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Link Variety</h4>
                    <p className="text-sm text-muted-foreground">Cuban, Figaro, Byzantine, and custom link patterns</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Metal Options</h4>
                    <p className="text-sm text-muted-foreground">18K gold, platinum, and sterling silver choices</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Weight Options</h4>
                    <p className="text-sm text-muted-foreground">Various weights from delicate to substantial presence</p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <img 
                  src="/bracelet-silver.webp"
                  alt="Elegant chain bracelet designs"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Charm Bracelets Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:flex lg:flex-row-reverse lg:grid-cols-none">
              <div className="lg:w-1/2">
                <div className="mb-8">
                  <span className="nb-mono text-[32px] leading-[32px]">09</span>
                </div>
                <h2 className="nb-medium mb-12">
                  Charm Bracelets
                </h2>
                <p className="text-lg mb-8 text-muted-foreground max-w-lg">
                  Tell your story with our elegant charm bracelets, featuring exquisite charms that represent your most treasured moments.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Custom Charms</h4>
                    <p className="text-sm text-muted-foreground">Personalized charms designed to your specifications</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Meaningful Symbols</h4>
                    <p className="text-sm text-muted-foreground">Hearts, stars, initials, and milestone markers</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Expandable Design</h4>
                    <p className="text-sm text-muted-foreground">Add new charms over time to grow your collection</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img 
                  src="/bracelet-twisted.jpg"
                  alt="Elegant charm bracelet collection"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="mb-8">
                  <span className="nb-mono text-[32px] leading-[32px]">10</span>
                </div>
                <h2 className="nb-medium mb-12">
                  Care & Maintenance
                </h2>
                <p className="text-lg mb-8 text-muted-foreground max-w-lg">
                  Keep your luxury bracelet in pristine condition with our comprehensive care and maintenance services.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Professional Cleaning</h4>
                    <p className="text-sm text-muted-foreground">Ultrasonic cleaning and polishing services</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Inspection Services</h4>
                    <p className="text-sm text-muted-foreground">Regular check-ups for stone security and wear</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Repair Services</h4>
                    <p className="text-sm text-muted-foreground">Expert repairs and restoration by master jewelers</p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <img 
                  src={braceletMaintenance}
                  alt="Professional jewelry maintenance and cleaning equipment"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <div className="mb-8">
                <span className="nb-mono text-[32px] leading-[32px]">11</span>
              </div>
              <h2 className="nb-medium mb-8">
                Gallery
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore our collection of stunning bracelets, showcasing the artistry and craftsmanship that defines our luxury pieces.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt={`Bracelet gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="mb-8">
                  <span className="nb-mono text-[32px] leading-[32px]">12</span>
                </div>
                <h2 className="nb-medium mb-12">
                  Design Consultation
                </h2>
                <p className="text-lg mb-8 text-muted-foreground max-w-lg">
                  Begin your journey to owning a magnificent custom bracelet with a personalized consultation with our design experts.
                </p>
                <div className="space-y-4">
                  <button className="w-full border border-foreground px-6 py-4 hover:bg-foreground hover:text-background transition-colors text-left">
                    Schedule Consultation
                  </button>
                  <button className="w-full border border-foreground px-6 py-4 hover:bg-foreground hover:text-background transition-colors text-left">
                    Request Catalog
                  </button>
                  <button className="w-full border border-foreground px-6 py-4 hover:bg-foreground hover:text-background transition-colors text-left">
                    Custom Design Service
                  </button>
                </div>
              </div>
              <div className="w-full h-[600px] flex items-center justify-center">
                <img 
                  src="/consultation.webp"
                  alt="Bracelet design consultation"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      
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

export default Bracelets;