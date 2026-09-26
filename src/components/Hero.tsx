import { ArrowRight, CheckCircle2, Star, Zap, ShieldCheck, Code2, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-slate-200/90 dark:border-slate-800/60 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#080C14] dark:via-[#0A101D] dark:to-[#080C14] transition-colors duration-200">
      {/* Subtle background ambient light */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 dark:opacity-20">
        <div className="h-[400px] w-[550px] rounded-full bg-cyan-500/15 dark:bg-cyan-600/10 blur-[130px]" />
        <div className="h-[300px] w-[400px] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] ml-40 mt-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Trust line with unboxed metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-400 font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Programador Full Stack & Sistemas Web
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
                5.0 Avaliação Máxima
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-600 dark:text-slate-400 font-medium">Entrega Rápida</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.12] text-balance">
              Sites e sistemas que colocam sua empresa na frente da concorrência.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Desenvolvimento sob medida com foco em velocidade, design profissional e conversão de clientes.
              Desde uma landing page de alta conversão até sistemas corporativos com banco de dados e automações.
            </p>

            {/* Pricing highlights summary card - responsive across all devices */}
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0C1222]/90 backdrop-blur-md p-4 sm:p-5 shadow-sm shadow-slate-200/50 dark:shadow-none">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x divide-slate-200 dark:divide-slate-800/80">
                {/* Plan 1 */}
                <div className="flex flex-col justify-between sm:pr-4">
                  <div className="flex items-center justify-between sm:justify-start gap-1.5">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-300">Site Simples</span>
                    <span className="text-[10px] uppercase font-mono font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Rápido</span>
                  </div>
                  <div className="my-1.5 font-display text-2xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight tabular-nums">
                    R$ 500
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Pagamento único
                  </div>
                </div>

                {/* Plan 2 */}
                <div className="flex flex-col justify-between pt-3 sm:pt-0 sm:px-4 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/60">
                  <div className="flex items-center justify-between sm:justify-start gap-1.5">
                    <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400">Site Mediano</span>
                    <span className="text-[10px] uppercase font-mono font-bold text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800/50 px-1.5 py-0.5 rounded">Popular</span>
                  </div>
                  <div className="my-1.5 font-display text-2xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight tabular-nums">
                    R$ 1.000
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Multi-páginas & SEO
                  </div>
                </div>

                {/* Plan 3 */}
                <div className="flex flex-col justify-between pt-3 sm:pt-0 sm:pl-4 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/60">
                  <div className="flex items-center justify-between sm:justify-start gap-1.5">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-300">Empresarial</span>
                    <span className="text-[10px] uppercase font-mono font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">Sistema</span>
                  </div>
                  <div className="my-1.5 font-display text-2xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight tabular-nums">
                    R$ 2.000
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    + a partir de R$ 150/mês por usuário
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl('Olá! Vim pelo site da StrateX e quero solicitar um orçamento para meu projeto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 active:scale-98"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/60 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white shadow-xs"
              >
                <span>Ver Detalhes dos Planos</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </a>
            </div>

            {/* Bullet guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Código 100% Próprio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Mobile First & Veloz</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Sem Custos Ocultos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean developer window */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl border border-slate-800 bg-[#0C1220] p-4 sm:p-5 shadow-xl shadow-slate-300/30 dark:shadow-black/50 overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80 shrink-0" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80 shrink-0" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80 shrink-0" />
                  <span className="ml-2 font-mono text-xs text-slate-400 truncate">stratex.config.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/50 px-2 py-0.5 rounded shrink-0">
                  <Zap className="h-3 w-3" />
                  <span>Build 100% OK</span>
                </div>
              </div>

              {/* Code snippet display */}
              <div className="font-mono text-xs space-y-1 text-slate-300 bg-[#080C14] p-3.5 rounded-xl border border-slate-800/80 overflow-x-auto no-scrollbar">
                <div className="text-slate-500">// Configuração de Entrega StrateX</div>
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-yellow-300">projeto</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">cliente:</span>{' '}
                  <span className="text-emerald-400">&quot;Seu Negócio&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">planos:</span>{' '}
                  <span className="text-slate-200">[</span>
                  <span className="text-cyan-300">&quot;Simples R$500&quot;</span>,{' '}
                  <span className="text-cyan-300">&quot;Mediano R$1.000&quot;</span>,{' '}
                  <span className="text-cyan-300">&quot;Empresarial R$2.000&quot;</span>
                  <span className="text-slate-200">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">performance:</span>{' '}
                  <span className="text-amber-400">99</span>{' '}
                  <span className="text-slate-500">/* PageSpeed */</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">whatsapp:</span>{' '}
                  <span className="text-emerald-400">&quot;online&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">responsivo:</span>{' '}
                  <span className="text-purple-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">satisfacao:</span>{' '}
                  <span className="text-amber-400">5.0</span>{' '}
                  <span className="text-slate-500">/* 5 Estrelas */</span>
                </div>
                <div>{'}'};</div>
              </div>

              {/* Live Metric Cards Grid inside mockup */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>PageSpeed Score</span>
                    <Zap className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <div className="mt-1 font-display text-2xl font-extrabold text-emerald-400 tabular-nums">
                    99<span className="text-xs font-normal text-slate-400">/100</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Carregamento em &lt; 0.9s</div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Avaliação Clientes</span>
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="mt-1 font-display text-2xl font-extrabold text-amber-400 tabular-nums">
                    5.0<span className="text-xs font-normal text-slate-400">/5.0</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">100% 5 Estrelas</div>
                </div>
              </div>

              {/* Programmer Direct Badge */}
              <div className="mt-3 flex items-center justify-between rounded-xl bg-cyan-950/40 border border-cyan-900/50 px-3 py-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300 font-medium">Canal Direto:</span>
                  <span className="font-mono text-cyan-300">WhatsApp Oficial</span>
                </div>
                <a
                  href={getWhatsAppUrl('Olá! Vi o código na página inicial da StrateX e gostaria de tirar uma dúvida.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-medium hover:underline text-[11px]"
                >
                  Chamar agora →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
