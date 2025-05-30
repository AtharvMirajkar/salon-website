import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Emma Thompson',
    role: 'Regular Client',
    image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: "I've been coming to Glow & Style for over a year now, and I'm always impressed with the quality of service. The staff is professional, friendly, and truly skilled at what they do. My hair has never looked better!",
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'First-time Client',
    image: 'https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: "As someone who's always been hesitant about trying new salons, I was blown away by my experience at Glow & Style. The stylist took the time to understand exactly what I wanted and delivered beyond my expectations.",
  },
  {
    id: 3,
    name: 'Sophia Garcia',
    role: 'Monthly Subscriber',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: "The facial treatments at Glow & Style are absolutely amazing! My skin has transformed since I started their monthly treatment plan. The ambiance is relaxing, and the staff makes me feel pampered every visit.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  return (
    <section className="section bg-gradient-radial from-primary/5 to-white">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Hear from our satisfied clients about their experiences at Glow & Style."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden rounded-xl bg-white shadow-soft p-6 md:p-10">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, type: 'tween' }}
                className="flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 mx-auto border-4 border-primary/20">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-neutral-700 italic mb-4">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-neutral-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-6 gap-2">
              <button 
                onClick={goToPrev}
                className="p-2 rounded-full bg-neutral-100 hover:bg-primary/10 text-neutral-700 hover:text-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex ? 'bg-primary scale-125' : 'bg-neutral-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={goToNext}
                className="p-2 rounded-full bg-neutral-100 hover:bg-primary/10 text-neutral-700 hover:text-primary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;