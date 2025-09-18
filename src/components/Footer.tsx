"use client"

import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">EC Auto</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Smart auto booking made simple. Connecting drivers and passengers 
              for safe, reliable, and convenient transportation.
            </p>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Download Apps
              </button>
              <button 
                onClick={() => scrollToSection('privacy')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Privacy Policy
              </button>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </a>
            </nav>
          </div>

          {/* For Users */}
          <div className="space-y-4">
            <h4 className="font-semibold">For Users</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                How to Book a Ride
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Payment Methods
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Safety Features
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Lost Items
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>support@ecauto.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span>
                  123 Innovation Drive<br />
                  Tech City, TC 12345<br />
                  United States
                </span>
              </div>
            </div>
            
            <div className="pt-4">
              <h5 className="text-sm font-medium mb-2">Business Hours</h5>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                <div>Sat - Sun: 10:00 AM - 4:00 PM</div>
                <div className="text-xs pt-1">24/7 Emergency Support Available</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 EC Auto. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <button 
                onClick={() => scrollToSection('privacy')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </button>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}