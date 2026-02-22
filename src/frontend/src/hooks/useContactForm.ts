import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

export function useContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (formData: ContactFormData) => {
      if (!actor) {
        throw new Error('Backend connection not available');
      }

      const timestamp = BigInt(Date.now() * 1000000); // Convert to nanoseconds

      await actor.submitMessage(
        formData.name,
        formData.phone,
        formData.email,
        formData.serviceType,
        formData.message,
        timestamp
      );
    },
    onSuccess: () => {
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you as soon as possible.',
        duration: 5000,
      });
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
    onError: (error: Error) => {
      toast.error('Failed to send message', {
        description: error.message || 'Please try again later.',
        duration: 5000,
      });
    },
  });

  return {
    submitForm: async (formData: ContactFormData) => {
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
