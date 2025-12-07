import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Card {
  icon: string;
  label: string;
  value: string;
  trend: string;
  color: string;
}

interface Transaction {
  id: number;
  description: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
}

interface ChartBar {
  height: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  chartBars: ChartBar[] = [
    { height: 65 },
    { height: 78 },
    { height: 52 },
    { height: 85 },
    { height: 72 },
    { height: 68 },
    { height: 81 },
    { height: 75 },
    { height: 88 },
    { height: 70 },
  ];

  cards: Card[] = [
    {
      icon: '💰',
      label: 'Today\'s Income',
      value: 'KSh 12,500',
      trend: '+12% from yesterday',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: '📉',
      label: 'Today\'s Expenses',
      value: 'KSh 3,200',
      trend: '-5% from yesterday',
      color: 'from-danger-500 to-danger-600',
    },
    {
      icon: '💵',
      label: 'Net Cash Flow',
      value: 'KSh 9,300',
      trend: '+18% from yesterday',
      color: 'from-success-500 to-success-600',
    },
    {
      icon: '📊',
      label: 'This Month',
      value: 'KSh 287,400',
      trend: '+23% from last month',
      color: 'from-warning-500 to-warning-600',
    },
  ];

  recentTransactions: Transaction[] = [
    {
      id: 1,
      description: 'Customer Payment - ABC Retail',
      category: 'Sales',
      amount: 5000,
      type: 'income',
      date: '2024-01-15 10:30 AM',
    },
    {
      id: 2,
      description: 'Supplier Payment - XYZ Wholesale',
      category: 'Inventory',
      amount: 2500,
      type: 'expense',
      date: '2024-01-15 09:15 AM',
    },
    {
      id: 3,
      description: 'Rent Payment',
      category: 'Rent',
      amount: 15000,
      type: 'expense',
      date: '2024-01-14 08:00 AM',
    },
    {
      id: 4,
      description: 'M-Pesa Transfer',
      category: 'Banking',
      amount: 3000,
      type: 'income',
      date: '2024-01-14 02:45 PM',
    },
    {
      id: 5,
      description: 'Utility Bill - KPLC',
      category: 'Utilities',
      amount: 800,
      type: 'expense',
      date: '2024-01-13 11:20 AM',
    },
  ];
}
