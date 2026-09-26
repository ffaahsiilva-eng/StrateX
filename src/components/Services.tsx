import { Smartphone, Layout, Database, Cpu, Zap, Lock, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';

export const Services = () => {
  return (
    <section id="servicos" className="py-16 sm:py-24 bg-white dark:bg-[#080C14] border-b border-slate-200/90 dark:border-slate-800/80 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-3 tracking-wider uppercase">
            <span>Especialidades Técnicas</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>Programação Web Moderna</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight text-balance">
            Soluções completas de desenvolvimento para o seu negócio
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Eliminamos modelos prontos e lentos. Cada projeto da StrateX é construído com código limpo, velocidade de carregamento imediata e arquitetura pensada para gerar conversões.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: Sites Simples & Landing Pages (col-span-7) */}
          <div className="md:col-span-7 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0A0F1D] p-5 sm:p-7 flex flex-col justify-between hover:border-cyan-400/60 dark:hover:border-slate-700 transition-all shadow-xs hover:shadow-md hover:shadow-slate-200/50 dark:shadow-none">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span className="font-mono text-cyan-700 dark:text-cyan-400 font-bold text-xs sm:text-sm">01. Landing Pages & Sites Simples</span>
                <span className="font-bold text-slate-900 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">R$ 500</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Páginas diretas ao ponto projetadas para transformar visitantes em contatos
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Ideal para profissionais autônomos, clínicas, advogados e pequenos comércios. O foco é uma página única extremamente rápida, com botão de WhatsApp com mensagem personalizada, mapa de localização e depoimentos de clientes.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                  Carregamento em &lt; 1s
                </span>
                <span className="flex items-center gap-1.5">
                  <Smartphone className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                  Totalmente Mobile
                </span>
              </div>
              <a
                href="#planos"
                className="text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 inline-flex items-center gap-1"
              >
                <span>Ver Plano de R$ 500</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Portais & Multi-Páginas (col-span-5) */}
          <div className="md:col-span-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0A0F1D] p-5 sm:p-7 flex flex-col justify-between hover:border-cyan-400/60 dark:hover:border-slate-700 transition-all shadow-xs hover:shadow-md hover:shadow-slate-200/50 dark:shadow-none">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span className="font-mono text-cyan-700 dark:text-cyan-400 font-bold text-xs sm:text-sm">02. Sites Medianos</span>
                <span className="font-bold text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800/50 px-2 py-0.5 rounded">R$ 1.000</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Presença institucional e autoridade de marca
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Estrutura de até 5 páginas ou catálogo completo com SEO local trabalhado no Google. Passa solidez para empresas que querem fechar contratos corporativos.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">SEO Avançado + Blog</span>
              <a
                href="#planos"
                className="text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 inline-flex items-center gap-1"
              >
                <span>Ver Plano R$ 1.000</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Sistemas Web & Dashboards (col-span-6) */}
          <div className="md:col-span-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0A0F1D] p-5 sm:p-7 flex flex-col justify-between hover:border-cyan-400/60 dark:hover:border-slate-700 transition-all shadow-xs hover:shadow-md hover:shadow-slate-200/50 dark:shadow-none">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span className="font-mono text-cyan-700 dark:text-cyan-400 font-bold text-xs sm:text-sm">03. Sistemas Web & Dashboards</span>
                <span className="font-bold text-slate-900 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">R$ 2.000</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Gestão automatizada e painel interno com login
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Desenvolvemos o software interno que a sua empresa precisa: controle de clientes, ordens de serviço, emissão de comprovantes, controle financeiro e dashboards operacionais em tempo real.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <span className="flex items-center gap-1">
                  <Database className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                  Banco em Nuvem
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                  Login Seguro
                </span>
              </div>
              <a
                href="#planos"
                className="text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 inline-flex items-center gap-1"
              >
                <span>Ver Plano R$ 2.000</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: Automações & APIs (col-span-6) */}
          <div className="md:col-span-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0A0F1D] p-5 sm:p-7 flex flex-col justify-between hover:border-cyan-400/60 dark:hover:border-slate-700 transition-all shadow-xs hover:shadow-md hover:shadow-slate-200/50 dark:shadow-none">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span className="font-mono text-cyan-700 dark:text-cyan-400 font-bold text-xs sm:text-sm">04. Integrações de APIs & Pix</span>
                <span className="font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">Sob Demanda</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Conecte seu site ao WhatsApp, Meios de Pagamento e CRMs
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Automação para receber pedidos com cálculo automático, envio de recibos no WhatsApp do cliente e integração instantânea com gateways de pagamento Pix e cartão.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Pix Instantâneo & Notificações</span>
              <a
                href={getWhatsAppUrl('Olá! Quero conversar sobre automação e integração de APIs para meu sistema com a StrateX.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 inline-flex items-center gap-1"
              >
                <span>Consultar Integração</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
