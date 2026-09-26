import { useState } from 'react';
import { Calculator as CalcIcon, Check, ArrowRight, MessageSquare, Plus, RefreshCw } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';

interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
  monthly?: number;
  selected: boolean;
}

export const Calculator = () => {
  const [basePlan, setBasePlan] = useState<'simples' | 'mediano' | 'empresarial'>('mediano');
  const [userCount, setUserCount] = useState(1);
  const [addons, setAddons] = useState<Addon[]>([
    {
      id: 'domain_setup',
      name: 'Auxílio Registro & Configuração de Domínio .com.br',
      description: 'Cuidamos de todo o processo no Registro.br e DNS',
      price: 60,
      selected: true,
    },
    {
      id: 'pix_gateway',
      name: 'Integração de Pagamento Instantâneo Pix Automático',
      description: 'Gera QR Code Pix com baixa imediata e webhook',
      price: 200,
      selected: false,
    },
    {
      id: 'whatsapp_bot',
      name: 'Automação & Disparo de Notificações WhatsApp',
      description: 'Envio automático de confirmações para seus clientes',
      price: 250,
      selected: false,
    },
    {
      id: 'blog_module',
      name: 'Módulo de Artigos / Blog Otimizado para SEO',
      description: 'Painel simples para você publicar conteúdos e atrair público',
      price: 200,
      selected: false,
    },
    {
      id: 'express_delivery',
      name: 'Entrega Expressa Prioritária',
      description: 'Desenvolvimento em ritmo acelerado com prioridade máxima',
      price: 250,
      selected: false,
    },
  ]);

  const [includeOptionalMonthly, setIncludeOptionalMonthly] = useState(false);

  // Base plan costs
  const basePrices = {
    simples: 500,
    mediano: 1000,
    empresarial: 2000,
  };

  const planNames = {
    simples: 'Site Simples (R$ 500)',
    mediano: 'Site Mediano (R$ 1.000)',
    empresarial: 'Site Empresarial + Sistema (R$ 2.000)',
  };

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item))
    );
  };

  const selectedAddons = addons.filter((a) => a.selected);
  const addonsTotal = selectedAddons.reduce((acc, curr) => acc + curr.price, 0);
  const finalOneTimePrice = basePrices[basePlan] + addonsTotal;

  // Monthly logic:
  // For empresarial it's R$ 150/mês por usuário. For others, optional monthly is R$ 80.
  let calculatedMonthly = 0;
  if (basePlan === 'empresarial') {
    calculatedMonthly = userCount * 150;
  } else if (includeOptionalMonthly) {
    calculatedMonthly = 80;
  }

  // Pre-formatted message for WhatsApp
  const generateMessage = () => {
    const lines = [
      `*Olá StrateX! Montei uma simulação de projeto no site:*`,
      ``,
      `📌 *Plano Base:* ${planNames[basePlan]}`,
    ];

    if (basePlan === 'empresarial') {
      lines.push(`👥 *Usuários no Sistema:* ${userCount} (${userCount === 1 ? '1 usuário' : `${userCount} usuários`})`);
    }

    lines.push(`🔧 *Recursos Adicionais Escolhidos:*`);

    if (selectedAddons.length > 0) {
      selectedAddons.forEach((a) => {
        lines.push(`• ${a.name} (+R$ ${a.price})`);
      });
    } else {
      lines.push(`• Nenhum adicional selecionado`);
    }

    lines.push(``);
    lines.push(`💰 *Investimento Inicial:* R$ ${finalOneTimePrice.toLocaleString('pt-BR')}`);

    if (basePlan === 'empresarial') {
      lines.push(`🔄 *Mensalidade (Cloud/Suporte):* R$ 150/mês por usuário (Total: R$ ${calculatedMonthly}/mês para ${userCount} ${userCount === 1 ? 'usuário' : 'usuários'})`);
    } else if (calculatedMonthly > 0) {
      lines.push(`🔄 *Mensalidade (Suporte Opcional):* R$ ${calculatedMonthly}/mês`);
    } else {
      lines.push(`🔄 *Mensalidade:* Sem mensalidade obrigatória`);
    }

    lines.push(``);
    lines.push(`Gostaria de confirmar os detalhes e iniciar!`);

    return lines.join('\n');
  };

  return (
    <section id="calculadora" className="py-16 sm:py-24 bg-white dark:bg-[#0A0F1D] border-b border-slate-200/90 dark:border-slate-800/80 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-3 tracking-wider uppercase">
            <CalcIcon className="h-4 w-4" />
            <span>Simulador Interativo</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight text-balance">
            Calcule o orçamento exato do seu projeto agora
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 font-normal">
            Personalize o pacote ideal de acordo com sua necessidade e envie o orçamento direto para o WhatsApp sem burocracia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Left 7 Columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Base Plan Selection */}
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0C1222] p-5 sm:p-6 shadow-xs">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider block mb-3">
                1. Selecione o Plano Base
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Simples */}
                <button
                  type="button"
                  onClick={() => setBasePlan('simples')}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    basePlan === 'simples'
                      ? 'border-cyan-500 bg-cyan-50/70 dark:bg-cyan-950/40 text-slate-950 dark:text-white ring-2 ring-cyan-500/20 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm text-slate-900 dark:text-white">Site Simples</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Landing Page</div>
                  <div className="font-display text-xl font-extrabold text-cyan-700 dark:text-cyan-400 mt-2 tabular-nums">
                    R$ 500
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 font-medium">Pagamento único</div>
                </button>

                {/* Mediano */}
                <button
                  type="button"
                  onClick={() => setBasePlan('mediano')}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    basePlan === 'mediano'
                      ? 'border-cyan-500 bg-cyan-50/70 dark:bg-cyan-950/40 text-slate-950 dark:text-white ring-2 ring-cyan-500/20 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm flex items-center justify-between text-slate-900 dark:text-white">
                    <span>Site Mediano</span>
                    <span className="text-[9px] bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 px-1.5 py-0.5 rounded font-mono font-bold">Popular</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Até 5 páginas / SEO</div>
                  <div className="font-display text-xl font-extrabold text-cyan-700 dark:text-cyan-400 mt-2 tabular-nums">
                    R$ 1.000
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 font-medium">Pagamento único</div>
                </button>

                {/* Empresarial */}
                <button
                  type="button"
                  onClick={() => setBasePlan('empresarial')}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    basePlan === 'empresarial'
                      ? 'border-cyan-500 bg-cyan-50/70 dark:bg-cyan-950/40 text-slate-950 dark:text-white ring-2 ring-cyan-500/20 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm text-slate-900 dark:text-white">Empresarial</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Sistema + Dashboard</div>
                  <div className="font-display text-xl font-extrabold text-cyan-700 dark:text-cyan-400 mt-2 tabular-nums">
                    R$ 2.000
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 font-medium">a partir de R$ 150/mês por usuário</div>
                </button>
              </div>
            </div>

            {/* Step 2: Custom Add-ons */}
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0C1222] p-5 sm:p-6 shadow-xs">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider block mb-3">
                2. Recursos e Otimizações Opcionais
              </label>

              <div className="space-y-2.5">
                {addons.map((addon) => (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-start justify-between gap-4 p-3.5 rounded-xl border transition-all cursor-pointer ${
                      addon.selected
                        ? 'border-cyan-500/70 bg-cyan-50/40 dark:bg-cyan-950/20 text-slate-950 dark:text-white ring-1 ring-cyan-500/20'
                        : 'border-slate-200/90 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`h-5 w-5 rounded mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                          addon.selected
                            ? 'bg-cyan-500 text-slate-950'
                            : 'border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800'
                        }`}
                      >
                        {addon.selected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">{addon.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{addon.description}</div>
                      </div>
                    </div>
                    <div className="text-xs font-bold font-mono text-cyan-700 dark:text-cyan-400 whitespace-nowrap pt-0.5">
                      + R$ {addon.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: User quantity for Empresarial OR Optional Monthly Care (for Simples & Mediano) */}
            {basePlan === 'empresarial' ? (
              <div className="rounded-2xl border border-cyan-500/40 dark:border-cyan-800/60 bg-cyan-50/30 dark:bg-[#0B1528] p-5 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-cyan-800 dark:text-cyan-400 uppercase tracking-wider mb-1">
                      3. Mensalidade por Usuário
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      Quantos usuários terão acesso ao sistema?
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      R$ 150/mês por usuário ativo (inclui servidores dedicados, banco em nuvem, backups e suporte).
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 shrink-0 self-start sm:self-auto shadow-xs">
                    <button
                      type="button"
                      onClick={() => setUserCount((prev) => Math.max(1, prev - 1))}
                      disabled={userCount <= 1}
                      className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-base"
                      aria-label="Diminuir quantidade de usuários"
                    >
                      -
                    </button>
                    <span className="font-display text-base font-bold text-slate-900 dark:text-white min-w-[28px] text-center tabular-nums">
                      {userCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setUserCount((prev) => prev + 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-base"
                      aria-label="Aumentar quantidade de usuários"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0C1222] p-5 shadow-xs">
                <div
                  onClick={() => setIncludeOptionalMonthly(!includeOptionalMonthly)}
                  className="flex items-start justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`h-5 w-5 rounded mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                        includeOptionalMonthly
                          ? 'bg-cyan-500 text-slate-950'
                          : 'border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800'
                      }`}
                    >
                      {includeOptionalMonthly && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        Deseja suporte técnico contínuo e hospedagem gerenciada? (Opcional)
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Não é obrigatório. Inclui servidor de alta velocidade, certificado SSL, atualizações de texto/fotos e suporte via WhatsApp.
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-bold font-mono text-cyan-700 dark:text-cyan-400 whitespace-nowrap">
                    + R$ 80/mês
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Budget Summary: Right 5 Columns */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 w-full">
            <div className="rounded-2xl border-2 border-cyan-500 bg-white dark:bg-[#0C1425] p-6 shadow-xl shadow-cyan-500/10 dark:shadow-cyan-950/40">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  Resumo da Estimativa
                </h3>
                <span className="text-xs font-mono font-bold text-cyan-800 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-800/40">
                  StrateX Budget
                </span>
              </div>

              {/* Items Breakdown */}
              <div className="py-4 space-y-2.5 border-b border-slate-100 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between items-center">
                  <span>Plano Base: <strong className="text-slate-900 dark:text-white">{planNames[basePlan].split('(')[0]}</strong></span>
                  <span className="font-mono text-slate-900 dark:text-slate-100 font-bold tabular-nums">R$ {basePrices[basePlan]}</span>
                </div>

                {selectedAddons.map((addon) => (
                  <div key={addon.id} className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                    <span className="truncate pr-2">• {addon.name}</span>
                    <span className="font-mono text-cyan-700 dark:text-cyan-300 font-bold whitespace-nowrap tabular-nums">
                      + R$ {addon.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total Display */}
              <div className="py-5 space-y-3">
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">
                    Valor Total do Desenvolvimento
                  </div>
                  <div className="mt-1 font-display text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight tabular-nums">
                    R$ {finalOneTimePrice.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Pagamento seguro: 50% de entrada + 50% na aprovação final.
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">
                    Mensalidade de Manutenção / Servidores
                  </div>
                  <div className="mt-1 font-display text-xl font-bold text-cyan-700 dark:text-cyan-400 tabular-nums">
                    {calculatedMonthly > 0 ? (
                      `R$ ${calculatedMonthly}/mês`
                    ) : (
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">Sem mensalidade obrigatória (R$ 0)</span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {basePlan === 'empresarial'
                      ? `R$ 150/mês por usuário (${userCount} ${userCount === 1 ? 'usuário' : 'usuários'}). Cobre servidores dedicados, banco em nuvem, backup diário e suporte.`
                      : calculatedMonthly > 0
                      ? 'Suporte contínuo e atualizações mensais.'
                      : 'Hospedagem por sua conta ou configurada separadamente.'}
                  </div>
                </div>
              </div>

              {/* WhatsApp Trigger Button */}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(generateMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3.5 px-4 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-400 shadow-md shadow-cyan-500/20 active:scale-98"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Enviar Estimativa no WhatsApp</span>
                </a>

                <div className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Contato direto com o programador via WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
