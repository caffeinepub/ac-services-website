import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import ServiceAreaMap from './components/ServiceAreaMap';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main className="flex-1">
        <Services />
        <About />
        <Booking />
        <ServiceAreaMap />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
