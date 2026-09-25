import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, getWhatsAppUrl } from '../data/content';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 dark:bg-[#0A0F1D] border-b border-slate-200/90 dark:border-slate-800/80 transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-3 uppercase tracking-wider">
            <HelpCircle className="h-4 w-4" />
            <span>Dúvidas Frequentes</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight text-balance">
            Perguntas e Respostas
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal">
            Tudo o que você precisa saber sobre prazos, mensalidades, hospedagem e contratação.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0C1222] transition-colors overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-50/70 dark:hover:bg-slate-900/60"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help box */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0B101E] shadow-xs">
          <h3 className="font-display font-bold text-slate-950 dark:text-white text-base sm:text-lg">Ainda ficou com alguma dúvida?</h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 max-w-md mx-auto">
            Fale diretamente com o desenvolvedor responsável pelo WhatsApp e tire suas dúvidas técnicas em minutos.
          </p>
          <div className="mt-4">
            <a
              href={getWhatsAppUrl('Olá! Tenho uma dúvida sobre a criação do meu site com a StrateX.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:bg-cyan-400 transition-colors shadow-sm shadow-cyan-500/20 active:scale-98"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
