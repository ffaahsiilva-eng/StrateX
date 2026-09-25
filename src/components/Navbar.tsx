import { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { Logo } from './Logo';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Planos', href: '#planos' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Projetos', href: '#portfolio' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'border-b border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#080C14]/95 shadow-md shadow-slate-900/5 dark:shadow-black/50 backdrop-blur-md'
            : 'border-b border-slate-200/80 dark:border-slate-800/70 bg-white/90 dark:bg-[#080C14]/85 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Main Brand Logo */}
          <a href="#" className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg">
            <Logo size="md" />
          </a>

          {/* Zone 2: 4–6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-slate-900 dark:hover:text-white hover:underline underline-offset-8 decoration-cyan-500/80 decoration-2 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 primary actions + theme switch */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Light / Dark Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/80 p-2 sm:px-2.5 sm:py-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all hover:bg-slate-200/80 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 active:scale-95"
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
              title={theme === 'dark' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-4 w-4 text-amber-400" />
                  <span className="hidden sm:inline text-xs font-semibold">Claro</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-slate-700" />
                  <span className="hidden sm:inline text-xs font-semibold">Escuro</span>
                </>
              )}
            </button>

            <a
              href={getWhatsAppUrl('Olá! Gostaria de conversar com a StrateX sobre um projeto de site ou sistema.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 transition-all hover:bg-cyan-400 active:scale-95 shadow-sm shadow-cyan-500/20 whitespace-nowrap"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Falar no WhatsApp</span>
            </a>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-[#0A0F1D] px-4 pt-3 pb-5 space-y-3 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-4 w-4 text-amber-400" />
                    <span>Alternar para Modo Claro</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 text-slate-700" />
                    <span>Alternar para Modo Escuro</span>
                  </>
                )}
              </button>
              <a
                href={getWhatsAppUrl('Olá! Gostaria de conversar sobre um projeto com a StrateX.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition-colors shadow-sm"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to preserve layout flow beneath fixed header */}
      <div className="h-16 w-full shrink-0" aria-hidden="true" />
    </>
  );
};
