import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  features: Feature[] = [
    {
      icon: '📊',
      title: 'Expense Tracking',
      description: 'Automatically categorize and track all business expenses with AI-powered classification.',
    },
    {
      icon: '🔮',
      title: 'Cash Flow Forecasting',
      description: 'Predict your cash flow up to 90 days ahead with machine learning models.',
    },
    {
      icon: '💡',
      title: 'AI Insights',
      description: 'Get actionable financial recommendations tailored to your business.',
    },
    {
      icon: '📱',
      title: 'M-Pesa Integration',
      description: 'Real-time transaction sync from M-Pesa for instant expense tracking.',
    },
    {
      icon: '📈',
      title: 'Financial Reports',
      description: 'Generate professional P&L, cash flow, and expense reports automatically.',
    },
    {
      icon: '🌍',
      title: 'Multi-Language',
      description: 'Available in English and Swahili for better accessibility.',
    },
  ];

  stats = [
    { label: 'Active Businesses', value: '5,000+' },
    { label: 'Transactions Tracked', value: '500K+' },
    { label: 'Average Time Saved', value: '10hrs/month' },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Jane Mwangi',
      role: 'Retail Shop Owner, Nairobi',
      content: 'Finwise helped me understand my cash flow better. I can now plan my inventory purchases more strategically.',
      avatar: '👩‍💼',
    },
    {
      name: 'David Kipchoge',
      role: 'Restaurant Owner, Kisumu',
      content: 'The expense categorization is spot on. It saves me hours every month on bookkeeping.',
      avatar: '👨‍💼',
    },
    {
      name: 'Rose Kariuki',
      role: 'Beauty Salon Owner, Mombasa',
      content: 'The financial insights help me make better decisions for my business growth.',
      avatar: '👩‍🦱',
    },
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
