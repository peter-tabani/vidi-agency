"use client";

import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type PaymentBreakdownItem = {
  label: string;
  amount: number;
};

export default function PricingPage() {
  const [projectValue, setProjectValue] = useState(5000);
  const [selectedPlan, setSelectedPlan] = useState('fiftyFifty');

  const plans = {
    fiftyFifty: { 
      key: 'fiftyFifty',
      name: "50/50 Split", 
      upfrontPercent: 0.50,
      description: "Half upfront, half upon completion",
      paymentStructure: "Two payments total",
      color: "blue"
    },
    fullPayment: { 
      key: 'fullPayment',
      name: "Full Payment", 
      upfrontPercent: 1.00,
      description: "One-time payment upfront",
      paymentStructure: "Single payment",
      color: "green"
    },
    milestone: { 
      key: 'milestone',
      name: "Milestone Payments", 
      upfrontPercent: 0.33,
      description: "33% upfront, balance in milestones",
      paymentStructure: "4 milestone payments",
      color: "purple"
    },
  };

  const currentPlan = plans[selectedPlan as keyof typeof plans];
  const upfrontCost = Math.round(projectValue * currentPlan.upfrontPercent);
  const remainingCost = projectValue - upfrontCost;
  
  // Calculate payment breakdowns
  const paymentBreakdown: PaymentBreakdownItem[] = [];
  
  if (currentPlan.key === 'fiftyFifty') {
    paymentBreakdown.push(
      { label: "Initial Payment", amount: upfrontCost },
      { label: "Upon Completion", amount: remainingCost }
    );
  } else if (currentPlan.key === 'fullPayment') {
    paymentBreakdown.push(
      { label: "Full Payment", amount: upfrontCost }
    );
  } else if (currentPlan.key === 'milestone') {
    const milestonePayment = Math.round(remainingCost / 4);
    paymentBreakdown.push(
      { label: "Initial Payment", amount: upfrontCost },
      { label: "Milestone 1", amount: milestonePayment },
      { label: "Milestone 2", amount: milestonePayment },
      { label: "Milestone 3", amount: milestonePayment },
      { label: "Final Milestone", amount: milestonePayment }
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Payment Options
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Choose the payment structure that works for your project
          </p>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-8 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-2">
              Payment Terms
            </h2>
            <p className="text-gray-700">
              First payment is due after you review and approve the initial project milestone.
            </p>
          </div>
        </div>
      </section>

      {/* Three Payment Plans - No Links */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* 50/50 Split */}
            <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">50/50 Split</h3>
                <p className="text-blue-600 text-sm">Half upfront, half upon completion</p>
              </div>
              
              <div className="mb-6">
                <div className="text-xl font-bold text-blue-800 mb-1">50% <span className="text-base font-normal text-blue-600">Upfront</span></div>
                <div className="text-blue-600 text-sm">50% upon project completion</div>
              </div>

              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-blue-700">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Two payments total</span>
                </li>
                <li className="flex items-start gap-2 text-blue-700">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Final payment after approval</span>
                </li>
                <li className="flex items-start gap-2 text-blue-700">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Balanced cash flow</span>
                </li>
              </ul>
            </div>

            {/* Full Payment */}
            <div className="border border-green-200 rounded-lg p-6 bg-green-50">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-700 mb-2">Full Payment</h3>
                <p className="text-green-600 text-sm">One-time payment upfront</p>
              </div>
              
              <div className="mb-6">
                <div className="text-xl font-bold text-green-800 mb-1">100% <span className="text-base font-normal text-green-600">Upfront</span></div>
                <div className="text-green-600 text-sm">Complete payment at start</div>
              </div>

              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-green-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Simplified billing</span>
                </li>
                <li className="flex items-start gap-2 text-green-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority scheduling</span>
                </li>
                <li className="flex items-start gap-2 text-green-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">One transaction only</span>
                </li>
              </ul>
            </div>

            {/* Milestone Payments */}
            <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Milestone Payments</h3>
                <p className="text-purple-600 text-sm">33% upfront, balance in milestones</p>
              </div>
              
              <div className="mb-6">
                <div className="text-xl font-bold text-purple-800 mb-1">33% <span className="text-base font-normal text-purple-600">Upfront</span></div>
                <div className="text-purple-600 text-sm">4 milestone payments</div>
              </div>

              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-purple-700">
                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Pay as progress is made</span>
                </li>
                <li className="flex items-start gap-2 text-purple-700">
                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Aligns with project phases</span>
                </li>
                <li className="flex items-start gap-2 text-purple-700">
                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Regular progress reviews</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Estimate Your Payments
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Budget
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </div>
                <input 
                  type="number" 
                  value={projectValue}
                  onChange={(e) => setProjectValue(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded text-base font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Plan
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                {Object.values(plans).map((plan) => (
                  <button
                    key={plan.key}
                    onClick={() => setSelectedPlan(plan.key)}
                    className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                      selectedPlan === plan.key
                        ? `bg-${plan.color}-600 text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {plan.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Payment Breakdown
              </h3>
              <div className="space-y-2">
                {paymentBreakdown.map((payment, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600">{payment.label}</span>
                    <span className="font-medium">${payment.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Total Project Cost</span>
                  <span className="text-lg font-bold text-gray-900">${projectValue.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-600 text-xs">
                Note: First payment is due after approval of initial milestone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Only Link on Page */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Ready to Begin?
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-colors"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}