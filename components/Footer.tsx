
import React from 'react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socials = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/anita-wambui-a01512203' },
    { name: 'Github', url: 'https://github.com/MWANGIANITAWAMBUI' },
    { name: 'Email', url: 'mailto:anitawambui101@gmail.com' }
  ];

  return (
    <footer className="py-24 md:py-32 px-4 md:px-8 xl:px-24 bg-[#ff4d00] border-none text-white overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 max-w-[1920px] mx-auto">
        <div className="space-y-8 md:space-y-12">
          <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-black">Navigation</h4>
          <ul className="space-y-3 md:space-y-4">
            {['Home', 'About', 'Experience', 'Work', 'Skills', 'Contact'].map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
                  className="text-3xl md:text-6xl font-black uppercase tracking-tighter hover:text-black transition-all duration-500 block leading-none"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:text-right space-y-8 md:space-y-12">
          <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-black">Digital Echoes</h4>
          <div className="flex flex-wrap md:justify-end gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-black uppercase tracking-tighter hover:text-black transition-all border-b-2 border-black/10 hover:border-black pb-2"
              >
                {social.name}
              </a>
            ))}
          </div>
          <div className="pt-8 md:pt-24">
             <div className="text-[10px] font-black uppercase tracking-[0.4em] text-black mb-4">Current Status</div>
             <div className="text-lg md:text-2xl font-black uppercase tracking-tight">Available for new opportunities</div>
          </div>
        </div>
      </div>
      
      <div className="mt-24 md:mt-48 pt-8 md:pt-16 border-t border-black/20 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-black text-center md:text-left">
          © 2026 Anita Wambui Mwangi — Software Engineer
        </div>
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white text-center md:text-right">
          FinTech, Web3 & AI-Powered Products
        </div>
      </div>
    </footer>
  );
};

export default Footer;
