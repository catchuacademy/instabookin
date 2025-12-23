"use client"

import { Button } from "./ui/button";
import logo from '../../public/logo.png';
import Image from "next/image";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="EC Auto Logo" width={40} height={40} />
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
          <a href='/driver-policy' className="text-muted-foreground hover:text-foreground transition-colors">
            Driver Privacy
          </a>
          <a href='/driver-rules' className="text-muted-foreground hover:text-foreground transition-colors">
            Driver Rules
          </a>
          <a href='/customer-policy' className="text-muted-foreground hover:text-foreground transition-colors">
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