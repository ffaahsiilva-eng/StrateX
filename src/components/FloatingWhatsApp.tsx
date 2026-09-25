import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { getWhatsAppUrl } from '../data/content';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end flex-col gap-2">
      {/* Tooltip callout */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 rounded-xl border border-slate-200/90 dark:border-slate-700 bg-white dark:bg-[#0C1220] px-3.5 py-2 text-xs text-slate-800 dark:text-white shadow-xl shadow-slate-300/30 dark:shadow-black/50 animate-bounce">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Fale direto com o desenvolvedor no <strong>WhatsApp</strong></span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-0.5 ml-1"
            aria-label="Fechar aviso"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl('Olá! Estou navegando no site da StrateX e gostaria de tirar uma dúvida sobre criação de site/sistema.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com o desenvolvedor"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-950/30 transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
      >
        {/* Pulse effect */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-25" />
        <MessageCircle className="relative h-7 w-7 fill-white stroke-none" />
      </a>
    </div>
  );
};
