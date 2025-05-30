import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const benefits = [
  'Experienced professional stylists',
  'Premium quality products',
  'Relaxing atmosphere',
  'Personalized consultations',
  'Transparent pricing',
  'Satisfaction guarantee',
];

const AboutSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3992871/pexels-photo-3992871.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Salon interior"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-2/3 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3993466/pexels-photo-3993466.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Styling session"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute top-8 -left-8 bg-white p-4 rounded-lg shadow-soft">
              <div className="bg-primary/10 text-primary font-bold text-xl p-3 rounded-lg">
                Since 2012
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              title="About Glow & Style"
              subtitle="Where beauty meets expertise and relaxation."
              align="left"
              className="mb-6"
            />
            
            <p className="text-neutral-700 mb-6">
              At Glow & Style, we believe that everyone deserves to look and feel their best. Founded in 2012, our salon has grown to become a premier destination for those seeking quality hair and beauty services in a relaxing environment.
            </p>
            
            <p className="text-neutral-700 mb-8">
              Our team of passionate professionals is committed to staying at the forefront of beauty trends and techniques, ensuring that our clients receive the highest level of service and attention.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="p-1 bg-success/20 text-success rounded-full">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-neutral-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;