import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useContactForm } from '../hooks/useContactForm';
import { Loader2, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: '',
  });

  const { submitForm, isSubmitting } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitForm(formData);
    if (success) {
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        message: '',
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Request a Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base space-y-1">
                    <a href="tel:+919786258507" className="hover:text-accent transition-colors block">
                      +91 97862 58507
                    </a>
                    <a href="tel:+917094656515" className="hover:text-accent transition-colors block">
                      +91 70946 56515
                    </a>
                  </CardDescription>
                  <CardDescription className="text-sm mt-2">
                    Available 24/7 for emergencies
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <a href="mailto:friendsacservices@gmail.com" className="hover:text-accent transition-colors break-all">
                      friendsacservices@gmail.com
                    </a>
                  </CardDescription>
                  <CardDescription className="text-sm mt-2">
                    We'll respond within 24 hours
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Madurai
                  </CardDescription>
                  <CardDescription className="text-sm mt-2">
                    Mon-Fri: 8AM-6PM
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Tell us about your AC needs and we'll provide a free quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        disabled={isSubmitting}
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 97862 58507"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                        disabled={isSubmitting}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => handleChange('serviceType', value)}
                      required
                      disabled={isSubmitting}
                    >
                      <SelectTrigger id="serviceType" className="h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="installation">Installation</SelectItem>
                        <SelectItem value="repair">Repair</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="emergency">Emergency Service</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your AC needs..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-12 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
