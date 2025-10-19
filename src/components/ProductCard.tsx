import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  subtitle: string;
  image: string;
  price: string;
  exploreLink: string;
  additionalServices: string[];
  index: number;
}

export const ProductCard = ({ 
  title, 
  subtitle, 
  image, 
  price, 
  exploreLink, 
  additionalServices, 
  index 
}: ProductCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20 items-center">
      {/* Content */}
      <motion.div 
        className={`${isEven ? 'lg:order-1 order-2' : 'lg:order-2 order-2'}`}
        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 1.5, 
          ease: "easeOut" 
        }}
        viewport={{ 
          once: false, 
          amount: 0.3 
        }}
      >
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <span className="nb-mono text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h2 className="nb-medium mb-4 sm:mb-6 md:mb-10 lg:mb-12 xl:mb-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-muted-foreground max-w-xl leading-relaxed">
          {subtitle}
        </p>
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-1 sm:mb-2 md:mb-3">Starting from</p>
          <p className="nb-mono text-lg sm:text-xl md:text-2xl">{price}</p>
        </div>
        
        <motion.button 
          className="border border-foreground px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 hover:bg-foreground hover:text-background transition-colors mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-sm sm:text-base md:text-lg w-full sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => window.location.href = exploreLink}
        >
          Explore
        </motion.button>
        
        {/* Additional Services */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {additionalServices.map((service, serviceIndex) => (
            <motion.button
              key={serviceIndex}
              className="w-full sm:max-w-sm text-left border border-muted-foreground/30 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 hover:bg-muted hover:border-muted-foreground/50 transition-colors text-xs sm:text-sm md:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {service}
            </motion.button>
          ))}
        </div>
      </motion.div>
      
      {/* Image */}
      <div
        className={`relative ${isEven ? 'lg:order-2 order-1' : 'lg:order-1 order-1'} w-full h-56 sm:h-72 md:h-96 lg:h-[600px] xl:h-[700px] overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl`}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};