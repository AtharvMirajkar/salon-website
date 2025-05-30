import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-secondary/10 z-0"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Salon interior"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/95"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              <span className="block">Discover Your</span>
              <span className="text-primary">Perfect Style</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Premium unisex salon offering exceptional hair and beauty services tailored to enhance your natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/services" className="btn btn-primary">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Book Appointment
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3993133/pexels-photo-3993133.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Salon stylist working"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 md:p-6 rounded-lg shadow-soft">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 rounded-full p-3">
                  <span className="text-primary font-bold text-lg md:text-xl">10+</span>
                </div>
                <p className="text-sm md:text-base font-medium">Years of Excellence</p>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 md:-right-12 bg-white p-4 md:p-6 rounded-lg shadow-soft">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/20 rounded-full p-3">
                  <span className="text-secondary font-bold text-lg md:text-xl">5⭐</span>
                </div>
                <p className="text-sm md:text-base font-medium">Rated Services</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;