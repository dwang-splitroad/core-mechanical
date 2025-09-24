import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative text-background"
      style={{
        backgroundColor: '#232323',
      }}
    >
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image src="/core-logo-white-green.png" alt="Core Mechanical" width={180} height={60} />
            </div>
            {/* Removed tagline per request */}
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/services/hvac" className="hover:text-background transition-colors">HVAC Systems</Link></li>
              <li><Link href="/services/chillers" className="hover:text-background transition-colors">Chillers & Refrigeration</Link></li>
              <li><Link href="/services/boilers" className="hover:text-background transition-colors">Boilers</Link></li>
              <li><Link href="/services/piping" className="hover:text-background transition-colors">Industrial Piping</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/solutions" className="hover:text-background transition-colors">Preventive Maintenance</Link></li>
              <li><Link href="/emergency" className="hover:text-background transition-colors">Emergency Service</Link></li>
              <li><Link href="/solutions" className="hover:text-background transition-colors">Design-Build</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-background/70">
              <a href="tel:574-555-0123" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="w-4 h-4" /> (574) 555-0123
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Northern Indiana
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 24/7 Emergency Service
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
          <p>&copy; {new Date().getFullYear()} Core Mechanical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}