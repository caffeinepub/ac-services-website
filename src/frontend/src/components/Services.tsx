import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Installation',
    description: 'Professional installation of new AC systems with expert guidance on the best units for your space and budget.',
    icon: '/assets/generated/service-installation.dim_128x128.png',
  },
  {
    title: 'Repair',
    description: 'Fast and reliable repair services for all AC brands and models. We diagnose and fix issues quickly.',
    icon: '/assets/generated/service-repair.dim_128x128.png',
  },
  {
    title: 'Maintenance',
    description: 'Regular maintenance plans to keep your AC running efficiently and prevent costly breakdowns.',
    icon: '/assets/generated/service-maintenance.dim_128x128.png',
  },
  {
    title: 'Emergency Service',
    description: '24/7 emergency AC repair service. We respond quickly when you need us most, day or night.',
    icon: '/assets/generated/service-emergency.dim_128x128.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AC solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
