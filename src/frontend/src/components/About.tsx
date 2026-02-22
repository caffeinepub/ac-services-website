import { Award, Clock, Shield, ThumbsUp } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: '2+',
    label: 'Years Experience',
  },
  {
    icon: ThumbsUp,
    value: '500+',
    label: 'Happy Customers',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Certified Technicians',
  },
  {
    icon: Shield,
    value: '24/7',
    label: 'Emergency Support',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience in the HVAC industry, we've built our reputation 
              on quality workmanship, honest pricing, and exceptional customer service. Our team 
              of certified technicians is committed to keeping your home comfortable year-round.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-card border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-accent/5 border-2 border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Our Commitment
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              We stand behind our work with comprehensive warranties and a satisfaction guarantee. 
              Every technician is EPA certified and undergoes continuous training to stay current 
              with the latest HVAC technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
