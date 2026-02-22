import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { toast } from 'sonner';

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredDate: Date;
  preferredTimeSlot: string;
}

export function useBookingForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (formData: BookingFormData) => {
      if (!actor) {
        throw new Error('Backend connection not available');
      }

      const timestamp = BigInt(Date.now() * 1000000); // Convert to nanoseconds
      const preferredDateNano = BigInt(formData.preferredDate.getTime() * 1000000); // Convert to nanoseconds

      await actor.submitBooking(
        formData.name,
        formData.phone,
        formData.email,
        formData.serviceType,
        preferredDateNano,
        formData.preferredTimeSlot,
        timestamp
      );
    },
    onSuccess: () => {
      toast.success('Booking confirmed!', {
        description: 'We\'ll contact you shortly to confirm your appointment.',
        duration: 5000,
      });
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
    onError: (error: Error) => {
      toast.error('Failed to book appointment', {
        description: error.message || 'Please try again later.',
        duration: 5000,
      });
    },
  });

  return {
    submitBooking: async (formData: BookingFormData) => {
      try {
        await mutation.mutateAsync(formData);
        return true;
      } catch {
        return false;
      }
    },
    isSubmitting: mutation.isPending,
  };
}
