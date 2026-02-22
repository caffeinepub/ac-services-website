import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useBookingForm } from '../hooks/useBookingForm';
import { Loader2, Calendar as CalendarIcon, X } from 'lucide-react';
import { format } from 'date-fns';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    preferredDate: undefined as Date | undefined,
    preferredTimeSlot: '',
  });

  const { submitBooking, isSubmitting } = useBookingForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.preferredDate) {
      return;
    }
    const success = await submitBooking({
      ...formData,
      preferredDate: formData.preferredDate,
    });
    if (success) {
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        preferredDate: undefined,
        preferredTimeSlot: '',
      });
    }
  };

  const handleChange = (field: string, value: string | Date) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Book Your Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule your AC service appointment online. Choose your preferred date and time, and we'll confirm your booking.
            </p>
          </div>

          <Card className="border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Schedule an Appointment</CardTitle>
              <CardDescription>
                Fill in your details and select your preferred date and time slot
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="booking-name">Full Name *</Label>
                    <Input
                      id="booking-name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="booking-phone">Phone Number *</Label>
                    <Input
                      id="booking-phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="booking-email">Email Address *</Label>
                  <div className="relative">
                    <X className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="booking-email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="h-12 pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="booking-serviceType">Service Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => handleChange('serviceType', value)}
                    required
                    disabled={isSubmitting}
                  >
                    <SelectTrigger id="booking-serviceType" className="h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="installation">Installation</SelectItem>
                      <SelectItem value="repair">Repair</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="emergency">Emergency Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full h-12 justify-start text-left font-normal"
                          disabled={isSubmitting}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.preferredDate ? (
                            format(formData.preferredDate, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.preferredDate}
                          onSelect={(date) => date && handleChange('preferredDate', date)}
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="booking-timeSlot">Preferred Time Slot *</Label>
                    <Select
                      value={formData.preferredTimeSlot}
                      onValueChange={(value) => handleChange('preferredTimeSlot', value)}
                      required
                      disabled={isSubmitting}
                    >
                      <SelectTrigger id="booking-timeSlot" className="h-12">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (4:00 PM - 8:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !formData.preferredDate}
                  className="w-full h-12 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    'Book Appointment'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
