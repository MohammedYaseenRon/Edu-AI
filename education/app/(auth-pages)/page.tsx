import Image from "next/image";
import { ArrowRight, BookOpen, Brain, Users, BarChart, Bot, Sparkles } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "Personalized Learning",
      description: "AI-powered system adapts to each student's learning style and pace"
    },
    {
      icon: BookOpen,
      title: "Interactive Classes",
      description: "Live and recorded sessions with smart summaries and key checkpoints"
    },
    {
      icon: Bot,
      title: "AI Guidance",
      description: "Intelligent chatbot provides 24/7 support and personalized recommendations"
    },
    {
      icon: BarChart,
      title: "Smart Analytics",
      description: "Detailed insights into student progress and performance"
    },
    {
      icon: Sparkles,
      title: "AI-Generated Content",
      description: "Automated quiz generation and content summarization"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Interactive classroom environment with real-time engagement"
    }
  ];

  const benefits = [
    {
      title: "For Students",
      features: [
        "Personalized study recommendations",
        "Smart class summaries",
        "AI-powered study guidance",
        "24/7 learning assistant"
      ]
    },
    {
      title: "For Teachers",
      features: [
        "Automated quiz generation",
        "Performance analytics",
        "Content management tools",
        "Student progress tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Personalized Learning<br />
              <span className="text-blue-600 dark:text-blue-400">Powered by AI</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Bridge the gap between teaching at scale and individual needs with our AI-powered learning platform
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Benefits for Everyone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <ul className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-8">
              <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">EduAI</h2>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                © 2024 EduAI. All rights reserved.
              </div>
            </div>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <button className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                About
              </button>
              <button className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                Contact
              </button>
              <button className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                Privacy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
