'use client';

import Link from 'next/link';
import { Gamepad2, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Little Leeroy Games
              </span>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#games"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Games
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:contact@littleleeroygames.com"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                <Mail size={16} />
                contact@littleleeroygames.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} Little Leeroy Games. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
