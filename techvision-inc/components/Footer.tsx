import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "GitHub", href: "https://github.com" },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-white rounded-sm" />
              <span className="text-sm font-medium">TechVision Inc.</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Pioneering minimalist technology solutions
              <br />
              for the modern digital age.
            </p>
          </div>

          {/* Social Links */}
          <div className="md:text-center">
            <h3 className="text-sm font-medium mb-4">Connect</h3>
            <div className="flex md:justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="md:text-right">
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <Link
              href="/privacy"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            © {currentYear} TechVision Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;