import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">YourName</h3>
            <p className="text-gray-400 mb-4">
              A passionate web developer focused on creating interactive and user-friendly applications.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/yourusername" icon={<BsGithub />} />
              <SocialLink href="https://linkedin.com/in/yourusername" icon={<BsLinkedin />} />
              <SocialLink href="https://twitter.com/yourusername" icon={<BsTwitter />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/project">Projects</FooterLink>
              <FooterLink href="/skills">Skills</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: your@email.com</li>
              <li>Location: Your City, Country</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} YourName. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with 
            <span className="text-blue-400"> Next.js</span> and
            <span className="text-blue-400"> Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
