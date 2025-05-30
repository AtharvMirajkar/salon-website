import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scissors, Sparkles, User } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const services = [
  {
    id: 1,
    title: 'Haircut & Styling',
    description: 'Expert cuts and styling for all hair types, customized to enhance your unique features.',
    icon: <Scissors className="w-6 h-6" />,
    image: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'all',
  },
  {
    id: 2,
    title: 'Coloring & Highlights',
    description: 'Transform your look with vibrant colors, subtle highlights, or complete color makeovers.',
    icon: <Sparkles className="w-6 h-6" />,
    image: 'https://images.pexels.com/photos/3993310/pexels-photo-3993310.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'all',
  },
  {
    id: 3,
    title: 'Facial Treatments',
    description: 'Rejuvenate your skin with our premium facial treatments tailored to your skin type.',
    icon: <User className="w-6 h-6" />,
    image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'all',
  },
];

const ServiceHighlights = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair' },
    { id: 'facial', label: 'Facial & Spa' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <SectionTitle 
          title="Our Premium Services"
          subtitle="Discover our range of professional services designed to make you look and feel your best."
        />

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-neutral-100 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 text-sm md:text-base font-medium rounded-md transition-all ${
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-soft group"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-md">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-primary font-medium hover:underline">
                  Learn more
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;