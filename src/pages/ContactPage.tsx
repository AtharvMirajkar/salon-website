import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
  
  const onSubmit = (data: FormValues) => {
    console.log(data);
    // In a real application, you would send this data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  useEffect(() => {
    document.title = 'Contact Us - Glow & Style Salon';
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <section className="pt-32 pb-16">
        <div className="container">
          <SectionTitle 
            title="Contact Us"
            subtitle="Get in touch with our team for appointments, inquiries, or feedback."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-soft p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`input ${errors.name ? 'border-error' : ''}`}
                    placeholder="Your name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`input ${errors.email ? 'border-error' : ''}`}
                      placeholder="Your email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`input ${errors.phone ? 'border-error' : ''}`}
                      placeholder="Your phone"
                      {...register('phone', { required: 'Phone number is required' })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-error">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className={`input ${errors.service ? 'border-error' : ''}`}
                    {...register('service')}
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut & Styling</option>
                    <option value="coloring">Coloring & Highlights</option>
                    <option value="treatment">Hair Treatment</option>
                    <option value="facial">Facial</option>
                    <option value="spa">Spa Package</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`input ${errors.message ? 'border-error' : ''}`}
                    placeholder="Your message"
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-error">{errors.message.message}</p>
                  )}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="bg-white rounded-xl shadow-soft p-6 md:p-8 mb-8">
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primary/10 text-primary rounded-full">
                        <Phone className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Phone</h4>
                      <p className="text-neutral-600">(123) 456-7890</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primary/10 text-primary rounded-full">
                        <Mail className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Email</h4>
                      <p className="text-neutral-600">info@glowandstyle.com</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primary/10 text-primary rounded-full">
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Address</h4>
                      <p className="text-neutral-600">123 Beauty Lane, Stylish City, SC 12345</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primary/10 text-primary rounded-full">
                        <Clock className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Working Hours</h4>
                      <p className="text-neutral-600">Monday-Friday: 9:00 AM - 8:00 PM</p>
                      <p className="text-neutral-600">Saturday: 10:00 AM - 6:00 PM</p>
                      <p className="text-neutral-600">Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-soft overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.2922926520728305!3d48.858370079186634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1689877148171!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salon Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;