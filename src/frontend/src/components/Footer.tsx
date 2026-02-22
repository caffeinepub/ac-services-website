import { SiFacebook, SiX, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Phone, Mail, Clock, MapPin, QrCode } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'ac-services'
  );

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Friends AC Services</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for all air conditioning needs. Professional, reliable, and available 24/7.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919786258507"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    +91 97862 58507
                  </a>
                  <a
                    href="tel:+917094656515"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    +91 70946 56515
                  </a>
                </div>
              </div>
              <a
                href="mailto:friendsacservices@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>friendsacservices@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                <span>Madurai</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: Emergency Only</p>
                  <p className="mt-2 font-semibold text-accent-foreground">24/7 Emergency Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & QR Code */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
            </div>

            {/* QR Code Section */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <QrCode className="w-5 h-5" />
                <h5 className="text-sm font-semibold">Scan to Visit</h5>
              </div>
              <div className="inline-block p-3 bg-white rounded-lg">
                <img
                  src="/assets/generated/qr-code.dim_400x400.png"
                  alt="QR code to visit Friends AC Services website"
                  className="w-32 h-32"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <p className="text-xs text-primary-foreground/60 mt-2">
                Scan to visit our website
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/70">
          <p>
            © {currentYear} Friends AC Services. All rights reserved. | Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent-foreground transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
