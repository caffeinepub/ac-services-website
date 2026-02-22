import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function ServiceAreaMap() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Service Area
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We proudly serve the greater metropolitan area and surrounding communities. 
              Check if we service your location below.
            </p>
          </div>

          <Card className="border-2 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src="/assets/generated/service-area-map.dim_800x600.png"
                  alt="Service Area Coverage Map"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border-2 border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-foreground">Coverage Areas</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Downtown & City Center</li>
                    <li>• Suburban Communities</li>
                    <li>• Industrial Districts</li>
                    <li>• Residential Neighborhoods</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Don't see your area? <a href="#contact" className="text-accent hover:underline font-semibold">Contact us</a> to check if we can service your location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
