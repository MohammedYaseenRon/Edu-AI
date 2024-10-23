import Image from "next/image";
import { ArrowRight, CheckCircle, Github, Twitter } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Built on Next.js 14 with server components and streaming for optimal performance"
    },
    {
      title: "Type Safe",
      description: "Fully typed APIs and components using TypeScript for better development experience"
    },
    {
      title: "Beautiful UI",
      description: "Crafted with Tailwind CSS and modern design principles for a polished look"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      content: "This template saved me hours of setup time. Highly recommended!"
    },
    {
      name: "Mike Chen",
      role: "Tech Lead",
      content: "The best starting point for any Next.js project. Clean and well-structured."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Image
                src="/next.svg"
                alt="Logo"
                width={120}
                height={30}
                className="dark:invert"
              />
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Build faster with<br />
              <span className="text-blue-600 dark:text-blue-400">Next.js 14</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Start your next project with this modern template. Includes everything you need to build amazing products.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <a
                href="#"
                className="rounded-full bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 transition-colors"
              >
                Get Started <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-100 dark:bg-gray-800 px-8 py-3 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
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

      {/* Testimonials Section */}
      <div className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Loved by developers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
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
              <Image
                src="/next.svg"
                alt="Logo"
                width={100}
                height={24}
                className="dark:invert"
              />
              <div className="text-sm text-gray-600 dark:text-gray-300">
                © 2024 Your Company. All rights reserved.
              </div>
            </div>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Blog
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Careers
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}