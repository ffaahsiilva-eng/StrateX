import { useState } from 'react';
import { Check, MessageCircle, HelpCircle, Sparkles, Shield, Clock, Info } from 'lucide-react';
import { PLANS, getWhatsAppUrl } from '../data/content';

export const Plans = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<'simples' | 'mediano' | 'empresarial'>('mediano');

  return (
    <section id="planos" className="py-16 sm:py-24 bg-slate-50 dark:bg-[#080C14] border-b border-slate-200/90 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-3 tracking-wider uppercase">
            <span>Investimento Transparente</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>Sem Custos Ocultos</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight text-balance">
            Escolha o plano ideal para o tamanho do seu projeto
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            De uma página de alta conversão a um ecossistema completo de gestão web.
            Preços justos, entrega pontual e suporte direto com o desenvolvedor.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PLANS.map((plan) => {
            const isHighlight = plan.highlight;

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative flex flex-col rounded-2xl p-6 sm:p-8 transition-all duration-200 cursor-pointer ${
                  isHighlight
                    ? 'border-2 border-cyan-500 bg-white dark:bg-[#0B1222] shadow-xl shadow-cyan-500/10 dark:shadow-cyan-950/40 ring-4 ring-cyan-500/15 dark:ring-cyan-500/30 lg:-translate-y-2'
                    : 'border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0A0E1A] hover:border-slate-300 dark:hover:border-slate-700 shadow-sm shadow-slate-200/40 dark:shadow-none hover:bg-slate-50/50 dark:hover:bg-[#0D1322]'
                }`}
              >
                {/* Popular badge */}
                {plan.popularBadge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
                    {plan.popularBadge}
                  </div>
                )}

                {/* Plan Header */}
                <div className="border-b border-slate-100 dark:border-slate-800/80 pb-6">
                  <h3 className="font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 min-h-[36px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {plan.period}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Clock className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>Prazo de entrega: <strong className="text-slate-900 dark:text-slate-200 font-semibold">{plan.deliveryTime}</strong></span>
                  </div>
                </div>

                {/* Target Audience */}
                <div className="py-4 border-b border-slate-100 dark:border-slate-800/80 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 block font-medium mb-1">Para quem é recomendado:</span>
                  <span className="text-slate-850 dark:text-slate-200 font-semibold leading-relaxed">{plan.idealFor}</span>
                </div>

                {/* Features List */}
                <div className="py-6 flex-1">
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider mb-4">
                    O que está incluso:
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug text-xs sm:text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Monthly fee notice for Empresarial or note for Simples/Mediano */}
                {plan.monthlyNote && (
                  <div className="mb-6 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 p-3.5 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2.5">
                    <Info className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{plan.monthlyNote}</span>
                  </div>
                )}

                {/* CTA Action to WhatsApp */}
                <a
                  href={getWhatsAppUrl(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-sm font-bold transition-all ${
                    isHighlight
                      ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-md shadow-cyan-500/20 active:scale-98'
                      : 'border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-98'
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{plan.ctaText}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Mensalidade Clarification Banner */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-cyan-200/90 dark:border-cyan-900/50 bg-gradient-to-r from-cyan-50/80 via-white to-sky-50/70 dark:from-[#0C1527] dark:to-[#0A101D] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-cyan-800 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Shield className="h-4 w-4" />
                <span>Entenda como funciona a Mensalidade do Plano Empresarial</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                Infraestrutura em nuvem, segurança e suporte contínuo
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Nos planos de <strong>R$ 500</strong> e <strong>R$ 1.000</strong> você <strong>NÃO</strong> paga nenhuma mensalidade obrigatória (taxa única).
                No plano de <strong>R$ 1.500</strong>, por envolver banco de dados com autenticação, servidores dedicados e backups, oferecemos a mensalidade a partir de <strong>R$ 150/mês</strong> que cobre servidor veloz, certificado SSL, manutenção corretiva e suporte direto no WhatsApp.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <a
                href={getWhatsAppUrl('Olá! Quero tirar dúvidas sobre a mensalidade e contratação do Plano Empresarial da StrateX.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:bg-cyan-400 transition-colors text-center shadow-sm shadow-cyan-500/20"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Tirar Dúvida via WhatsApp</span>
              </a>
              <div className="text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
                Atendimento direto com o programador
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-12 sm:mt-16 overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0A0F1D] shadow-xs">
          <div className="p-5 sm:p-6 border-b border-slate-200/90 dark:border-slate-800">
            <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
              Tabela Comparativa Rápida
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Compare lado a lado o que cada plano inclui para tomar a melhor decisão.
            </p>
          </div>

          <div className="overflow-x-auto pb-2 -mx-4 sm:mx-0 px-4 sm:px-0 no-scrollbar">
            <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300 min-w-[620px]">
              <thead className="border-b border-slate-200/90 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Recurso / Benefício</th>
                  <th className="px-6 py-4 text-center">Simples (R$ 500)</th>
                  <th className="px-6 py-4 text-center text-cyan-800 dark:text-cyan-400 font-bold">Mediano (R$ 1.000)</th>
                  <th className="px-6 py-4 text-center">Empresarial (R$ 1.500)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                <tr>
                  <td className="px-6 py-3.5 font-medium text-slate-900 dark:text-white">Estrutura</td>
                  <td className="px-6 py-3.5 text-center text-xs">Página Única (Landing Page)</td>
                  <td className="px-6 py-3.5 text-center text-xs text-cyan-800 dark:text-cyan-300 font-bold">Multi-páginas (até 5 págs)</td>
                  <td className="px-6 py-3.5 text-center text-xs">Sistema Web + Dashboard</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-slate-900 dark:text-white">Banco de Dados em Nuvem</td>
                  <td className="px-6 py-3.5 text-center text-slate-400 dark:text-slate-500">—</td>
                  <td className="px-6 py-3.5 text-center text-slate-400 dark:text-slate-500">—</td>
                  <td className="px-6 py-3.5 text-center text-emerald-600 dark:text-emerald-400 font-semibold">Incluso (Seguro & Backups)</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-slate-900 dark:text-white">Painel Administrativo / Login</td>
                  <td className="px-6 py-3.5 text-center text-slate-400 dark:text-slate-500">—</td>
                  <td className="px-6 py-3.5 text-center text-slate-400 dark:text-slate-500">—</td>
                  <td className="px-6 py-3.5 text-center text-emerald-600 dark:text-emerald-400 font-semibold">Incluso com Níveis de Acesso</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-slate-900 dark:text-white">Integração WhatsApp</td>
                  <td className="px-6 py-3.5 text-center text-emerald-600 dark:text-emerald-400 font-medium">Botão Flutuante</td>
                  <td className="px-6 py-3.5 text-center text-emerald-600 dark:text-emerald-400 font-medium">Formulário + Botão</td>
                  <td className="px-6 py-3.5 text-center text-emerald-600 dark:text-emerald-400 font-medium">Formulário + Notificações</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-slate-900 dark:text-white">Otimização SEO para Google</td>
                  <td className="px-6 py-3.5 text-center text-xs">Básico</td>
                  <td className="px-6 py-3.5 text-center text-xs text-cyan-800 dark:text-cyan-300 font-bold">Avançado Regional</td>
                  <td className="px-6 py-3.5 text-center text-xs">Completo + Analytics</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-slate-900 dark:text-white">Mensalidade</td>
                  <td className="px-6 py-3.5 text-center text-xs text-emerald-700 dark:text-emerald-400 font-bold">R$ 0 (Sem mensalidade)</td>
                  <td className="px-6 py-3.5 text-center text-xs text-emerald-700 dark:text-emerald-400 font-bold">R$ 0 (Sem mensalidade)</td>
                  <td className="px-6 py-3.5 text-center text-xs text-cyan-800 dark:text-cyan-300 font-bold">A partir de R$ 150/mês</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-slate-900 dark:text-white">Prazo de Entrega</td>
                  <td className="px-6 py-3.5 text-center text-xs font-mono font-medium">3 a 5 dias</td>
                  <td className="px-6 py-3.5 text-center text-xs font-mono text-cyan-800 dark:text-cyan-300 font-bold">7 a 10 dias</td>
                  <td className="px-6 py-3.5 text-center text-xs font-mono font-medium">15 a 25 dias</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
