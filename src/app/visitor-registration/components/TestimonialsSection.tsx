import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
  {
    name: 'Amara Okonkwo',
    position: 'CEO',
    company: 'TechVentures Nigeria',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16326238c-1763296602542.png",
    alt: 'Professional African woman with natural hair in navy blazer smiling confidently',
    quote: "The Madagascar-Africa Business Expo transformed our business trajectory. We secured three major partnerships and gained invaluable market insights that accelerated our expansion across East Africa.",
    rating: 5
  },
  {
    name: 'Jean-Pierre Dubois',
    position: 'Investment Director',
    company: 'Mauritius Capital Partners',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_124ddf771-1765167525499.png",
    alt: 'Professional man in gray suit with short dark hair in modern office setting',
    quote: "An exceptional platform for identifying high-potential investment opportunities. The quality of exhibitors and the organization's attention to facilitating meaningful connections exceeded our expectations.",
    rating: 5
  },
  {
    name: 'Fatima Al-Rashid',
    position: 'Founder & Managing Director',
    company: 'Sahara Innovations',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16f75db9c-1763294765624.png",
    alt: 'Professional woman wearing elegant hijab in burgundy blazer with warm smile',
    quote: "The B2B matchmaking service was incredibly efficient. Within two days, we met with 15 potential partners perfectly aligned with our business goals. This expo is a must-attend for serious entrepreneurs.",
    rating: 5
  }];


  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Success Stories from Past Attendees
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from business leaders who transformed their ventures through connections made at our expo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) =>
          <div
            key={index}
            className="bg-card p-6 rounded-lg shadow-warm hover:shadow-warm-lg transition-smooth">

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) =>
              <Icon key={i} name="StarIcon" size={16} variant="solid" className="text-accent" />
              )}
              </div>

              <p className="text-foreground mb-6 italic font-accent">"{testimonial.quote}"</p>

              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover" />

                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;