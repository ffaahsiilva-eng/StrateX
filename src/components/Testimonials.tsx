import { useState } from 'react';
import { TESTIMONIALS, getWhatsAppUrl } from '../data/content';
import { Star, ShieldCheck, MessageCircle, Quote, Plus, Check } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials = () => {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    company: '',
    city: '',
    comment: '',
    planUsed: 'Site Mediano (R$ 1.000)',
    rating: 5,
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const created: Testimonial = {
      id: Date.now().toString(),
      name: newReview.name,
      role: newReview.role || 'Cliente Verificado',
      company: newReview.company || 'Empresa Própria',
      city: newReview.city || 'Brasil',
      rating: newReview.rating,
      comment: newReview.comment,
      planUsed: newReview.planUsed,
      result: 'Avaliação recém-enviada',
      date: 'Hoje',
    };

    setReviewsList([created, ...reviewsList]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setShowAddReviewModal(false);
      setNewReview({
        name: '',
        role: '',
        company: '',
        city: '',
        comment: '',
        planUsed: 'Site Mediano (R$ 1.000)',
        rating: 5,
      });
    }, 1800);
  };

  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-white dark:bg-[#080C14] border-b border-slate-200/90 dark:border-slate-800/80 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with 5.0 Trust Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-3 uppercase tracking-wider">
            <span>Avaliações Reais de Clientes</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>100% 5 Estrelas</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight text-balance">
            O que nossos clientes dizem sobre a StrateX
          </h2>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-500" />
              ))}
            </div>
            <span className="font-display text-lg font-extrabold text-slate-950 dark:text-white tabular-nums">5.0 de 5.0</span>
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">· Mais de 48 projetos entregues com nota máxima</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/70 dark:bg-[#0B101E] p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs hover:shadow-md"
            >
              <div>
                {/* Header: Stars & Plan Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] font-bold text-cyan-800 dark:text-cyan-400 bg-cyan-100/90 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-800/40 px-2 py-0.5 rounded">
                    {review.planUsed}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic relative">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Footer: Client Info & Concrete Result */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="truncate">{review.result}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {review.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {review.role} · <span className="text-slate-700 dark:text-slate-300 font-medium">{review.company}</span>
                    </p>
                  </div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                    {review.city.split('-')[0].trim()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bottom Bar */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            <span>Todos os depoimentos foram coletados de clientes reais atendidos pela StrateX.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setShowAddReviewModal(true)}
              className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 font-medium transition-colors"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Já é cliente? Deixe seu depoimento</span>
            </button>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">|</span>
            <a
              href={getWhatsAppUrl('Olá! Vi os depoimentos e gostaria de iniciar meu projeto com a StrateX.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-cyan-700 dark:text-cyan-400 hover:underline"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Modal to leave a review */}
        {showAddReviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0C1220] p-6 sm:p-8 shadow-2xl relative">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mb-2">
                Compartilhe sua experiência com a StrateX
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                Sua avaliação ajuda outros empreendedores a conhecerem a qualidade dos nossos sites e sistemas.
              </p>

              {reviewSubmitted ? (
                <div className="p-8 text-center space-y-3">
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Check className="h-6 w-6" />
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white text-base">Obrigado pela sua avaliação!</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Seu comentário foi registrado com sucesso.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Seu Nome *</label>
                      <input
                        type="text"
                        required
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        placeholder="Ex: João Ferreira"
                        className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-3.5 py-2.5 text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Empresa / Negócio</label>
                      <input
                        type="text"
                        value={newReview.company}
                        onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                        placeholder="Ex: Ferreira Contabilidade"
                        className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-3.5 py-2.5 text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Cargo</label>
                      <input
                        type="text"
                        value={newReview.role}
                        onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                        placeholder="Ex: Diretor, Advogado..."
                        className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-3.5 py-2.5 text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Cidade - UF</label>
                      <input
                        type="text"
                        value={newReview.city}
                        onChange={(e) => setNewReview({ ...newReview, city: e.target.value })}
                        placeholder="Ex: Santarém - PA"
                        className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-3.5 py-2.5 text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Plano Contratado</label>
                    <select
                      value={newReview.planUsed}
                      onChange={(e) => setNewReview({ ...newReview, planUsed: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-3.5 py-2.5 text-base sm:text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Site Simples (R$ 500)">Site Simples (R$ 500)</option>
                      <option value="Site Mediano (R$ 1.000)">Site Mediano (R$ 1.000)</option>
                      <option value="Site Empresarial + Sistema (R$ 2.000)">Site Empresarial + Sistema (R$ 2.000)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Avaliação</label>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setNewReview({ ...newReview, rating: star })}
                            className="p-1 focus:outline-none"
                          >
                            <Star
                              className={`h-5 w-5 ${
                                star <= newReview.rating
                                  ? 'fill-amber-400 text-amber-500'
                                  : 'text-slate-300 dark:text-slate-600'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      <span className="text-xs text-amber-600 dark:text-amber-400 font-bold">{newReview.rating} de 5 estrelas</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Seu Depoimento *</label>
                    <textarea
                      required
                      rows={3}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder="Conte como foi sua experiência com a entrega do site, atendimento no WhatsApp e velocidade..."
                      className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-3.5 py-2.5 text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddReviewModal(false)}
                      className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="rounded-xl bg-cyan-500 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition-colors shadow-sm"
                    >
                      Publicar Depoimento
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
