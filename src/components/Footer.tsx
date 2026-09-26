import { getWhatsAppUrl } from '../data/content';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-[#05080F] text-slate-600 dark:text-slate-400 py-12 sm:py-16 border-t border-slate-200/90 dark:border-slate-900 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-200 dark:border-slate-800/60">
          {/* Brand info */}
          <div className="space-y-3">
            <a href="#" className="inline-block">
              <Logo size="md" showTagline={true} />
            </a>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Desenvolvimento profissional de sites e sistemas web de alta performance. Código limpo, rápido e focado em gerar vendas para o seu negócio.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-bold">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>Garantia de entrega & suporte</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#servicos" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Planos & Preços
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Simulador de Orçamento
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Avaliações 5 Estrelas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Plans Summary */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Nossos Planos
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#planos" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors flex justify-between pr-4">
                  <span>Site Simples</span>
                  <strong className="text-slate-900 dark:text-white tabular-nums">R$ 500</strong>
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors flex justify-between pr-4">
                  <span>Site Mediano</span>
                  <strong className="text-cyan-700 dark:text-cyan-400 tabular-nums">R$ 1.000</strong>
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors flex justify-between pr-4">
                  <span>Site Empresarial</span>
                  <strong className="text-slate-900 dark:text-white tabular-nums">R$ 2.000</strong>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Contato Direto
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Atendimento Online:
            </p>
            <div className="text-xs text-slate-900 dark:text-white font-bold flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>WhatsApp Oficial StrateX</span>
            </div>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de falar com o desenvolvedor da StrateX.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-2 text-xs font-bold text-cyan-800 dark:text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
          <div>
            © {new Date().getFullYear()} StrateX — Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-3 font-medium">
            <span>Desenvolvimento de Sistemas & Web</span>
            <span aria-hidden="true">·</span>
            <span>Atendimento via WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
