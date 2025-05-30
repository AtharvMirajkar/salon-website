import { useState, useEffect } from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { Scissors, User, Sparkles, Clock, Droplet, Heart } from 'lucide-react';

const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'haircuts', label: 'Haircuts & Styling' },
  { id: 'coloring', label: 'Coloring' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'spa', label: 'Spa & Facial' },
];

const services = [
  {
    id: 1,
    name: "Women's Haircut",
    description: "Expert haircut tailored to your face shape and preferences.",
    price: "$45+",
    duration: "45-60 min",
    category: "haircuts",
    icon: <Scissors className="w-5 h-5" />,
    image: "https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Men's Haircut",
    description: "Precision cut and styling for all hair types.",
    price: "$30+",
    duration: "30-45 min",
    category: "haircuts",
    icon: <Scissors className="w-5 h-5" />,
    image: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Color & Highlights",
    description: "Full color, highlights, balayage, or ombré techniques.",
    price: "$85+",
    duration: "90-120 min",
    category: "coloring",
    icon: <Droplet className="w-5 h-5" />,
    image: "https://images.pexels.com/photos/3993310/pexels-photo-3993310.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "Hair Treatment",
    description: "Hydrating and repairing treatments for damaged hair.",
    price: "$50+",
    duration: "45-60 min",
    category: "treatments",
    icon: <Heart className="w-5 h-5" />,
    image: "https://images.pexels.com/photos/3993128/pexels-photo-3993128.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    name: "Facial",
    description: "Customized facial treatments to rejuvenate your skin.",
    price: "$70+",
    duration: "60 min",
    category: "spa",
    icon: <User className="w-5 h-5" />,
    image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    name: "Blowout & Styling",
    description: "Professional blowout and styling for any occasion.",
    price: "$40+",
    duration: "45 min",
    category: "haircuts",
    icon: <Sparkles className="w-5 h-5" />,
    image: "https://images.pexels.com/photos/3993099/pexels-photo-3993099.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    name: "Root Touch-Up",
    description: "Quick root color refresh to maintain your look.",
    price: "$60+",
    duration: "60 min",
    category: "coloring",
    icon: <Droplet className="w-5 h-5" />,
    image: "https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 8,
    name: "Deep Conditioning",
    description: "Intensive conditioning treatment for dry or damaged hair.",
    price: "$35+",
    duration: "30 min",
    category: "treatments",
    icon: <Heart className="w-5 h-5" />,
    image: "https://images.pexels.com/photos/3993319/pexels-photo-3993319.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 9,
    name: "Spa Package",
    description: "Complete spa experience with facial, massage, and more.",
    price: "$150+",
    duration: "120 min",
    category: "spa",
    icon: <Sparkles className="w-5 h-5" />,
    image: "https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=800",
  },
];

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  useEffect(() => {
    document.title = 'Our Services - Glow & Style Salon';
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container">
          <SectionTitle 
            title="Our Services"
            subtitle="Discover our comprehensive range of hair and beauty services designed to help you look and feel your best."
          />
          
          <div className="flex justify-center mb-10 overflow-x-auto py-4">
            <div className="inline-flex p-1 bg-neutral-100 rounded-lg">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 text-sm md:text-base font-medium rounded-md whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? 'bg-white text-primary shadow-soft'
                      : 'text-neutral-600 hover:text-primary'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-soft group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <div className="p-2 bg-primary/10 text-primary rounded-md mr-3">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold">{service.name}</h3>
                    </div>
                    <span className="font-bold text-lg text-primary">{service.price}</span>
                  </div>
                  <p className="text-neutral-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-neutral-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book Your Appointment?</h2>
            <p className="text-neutral-700 mb-8">
              Contact us today to schedule your appointment with one of our expert stylists.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="btn btn-primary inline-block"
            >
              Book Now
            </motion.a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServicesPage;