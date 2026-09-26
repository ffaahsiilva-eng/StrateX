import { useState } from 'react';
import { MessageCircle, Phone, Mail, Clock, Send, Shield } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState('Site Mediano (R$ 1.000)');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = [
      `*Olá StrateX! Vim pelo formulário de contato do site:*`,
      ``,
      `👤 *Nome:* ${name || 'Não informado'}`,
      `📱 *WhatsApp do Cliente:* ${phone || 'Não informado'}`,
      `📦 *Plano de Interesse:* ${plan}`,
      `📝 *Detalhes do Projeto:* ${message || 'Gostaria de mais informações.'}`,
    ].join('\n');

    window.open(getWhatsAppUrl(formattedText), '_blank');
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-white dark:bg-[#080C14] border-b border-slate-200/90 dark:border-slate-800/80 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
              <span>Atendimento Direto</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span>Sem Intermediários</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight text-balance">
              Vamos tirar seu projeto do papel hoje mesmo?
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              Você fala diretamente comigo, desenvolvedor de sistemas da StrateX. Sem atendentes virtuais ou demora para ter uma resposta técnica clara.
            </p>

            {/* Direct Contact Card */}
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0C1222] p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Canal de Atendimento</div>
                    <div className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      WhatsApp Oficial StrateX
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/40 px-2.5 py-1 rounded-full font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={getWhatsAppUrl('Olá! Gostaria de falar com o desenvolvedor da StrateX sobre um orçamento.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:bg-cyan-400 transition-colors shadow-sm shadow-cyan-500/20 active:scale-98"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Iniciar Conversa no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Response time info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="rounded-xl border border-slate-200/90 dark:border-slate-800/80 bg-slate-50/70 dark:bg-[#0A0F1D] p-3.5 shadow-xs">
                <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-300 font-bold mb-1">
                  <Clock className="h-3.5 w-3.5 text-cyan-700 dark:text-cyan-400" />
                  <span>Tempo de Resposta</span>
                </div>
                <span>Geralmente em menos de 15 minutos em horário comercial.</span>
              </div>

              <div className="rounded-xl border border-slate-200/90 dark:border-slate-800/80 bg-slate-50/70 dark:bg-[#0A0F1D] p-3.5 shadow-xs">
                <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-300 font-bold mb-1">
                  <Shield className="h-3.5 w-3.5 text-cyan-700 dark:text-cyan-400" />
                  <span>Atendimento Brasil</span>
                </div>
                <span>Clientes atendidos em todos os estados com suporte online.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Briefing Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0A0F1D] p-5 sm:p-8 shadow-xs">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mb-2">
                Envie um resumo do que você precisa
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Ao preencher, a mensagem será montada automaticamente para você enviar no WhatsApp com 1 clique.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Seu Nome ou Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Mendes"
                      className="w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 px-4 py-3 text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Seu WhatsApp para contato
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(93) 99999-9999"
                      className="w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 px-4 py-3 text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Qual plano melhor atende seu objetivo?
                  </label>
                  <select
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 px-4 py-3 text-base sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="Site Simples (R$ 500)">Site Simples — R$ 500 (Landing Page rápida)</option>
                    <option value="Site Mediano (R$ 1.000)">Site Mediano — R$ 1.000 (Até 5 páginas / SEO)</option>
                    <option value="Site Empresarial + Sistema (R$ 2.000)">Site Empresarial + Sistema — R$ 2.000 + mensalidade (a partir de R$ 150/mês por usuário)</option>
                    <option value="Ainda não tenho certeza / Preciso de orientação">Ainda não tenho certeza / Preciso de orientação</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Conte um pouco sobre o projeto
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ex: Tenho uma empresa e preciso de uma landing page para receber mais contatos no WhatsApp..."
                    className="w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 px-4 py-3 text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3.5 px-4 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition-colors shadow-md shadow-cyan-500/20 active:scale-98"
                >
                  <Send className="h-4 w-4" />
                  <span>Enviar Briefing Direto no WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
