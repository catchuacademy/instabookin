"use client"

import { Button } from "./ui/button";
import { Car } from "lucide-react";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Car className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">EC Auto</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('download')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Download
          </button>
          <a href='/ecauto/driver-policy' className="text-muted-foreground hover:text-foreground transition-colors">
            Driver Privacy
          </a>
          <a href='/ecauto/customer-policy' className="text-muted-foreground hover:text-foreground transition-colors">
            Customer Privacy
          </a>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>

        <Button onClick={() => scrollToSection('download')}>
          Get Started
        </Button>
      </div>
    </header>
  );
}