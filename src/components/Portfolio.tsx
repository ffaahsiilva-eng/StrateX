import { useState } from 'react';
import { PORTFOLIO_ITEMS, getWhatsAppUrl } from '../data/content';
import { PortfolioItem } from '../types';
import { ExternalLink, Check, Sparkles, MessageCircle, Monitor, X, Eye } from 'lucide-react';

export const Portfolio = () => {
  const [filter, setFilter] = useState<'all' | 'simples' | 'mediano' | 'empresarial'>('all');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioItem | null>(null);

  const filteredItems = filter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-slate-50 dark:bg-[#0A0F1D] border-b border-slate-200/90 dark:border-slate-800/80 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-2 uppercase tracking-wider">
              <span>Cases e Demonstrações Reais</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span>Portfólio de Produção</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight text-balance">
              Projetos entregues com resultados comprovados
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl font-normal">
              Confira como desenvolvemos soluções sob medida em cada um dos nossos 3 planos de investimento.
            </p>
          </div>

          {/* Interactive filter control */}
          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto max-w-full shrink-0 shadow-xs no-scrollbar">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Todos ({PORTFOLIO_ITEMS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('simples')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'simples'
                  ? 'bg-cyan-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Simples (R$ 500)
            </button>
            <button
              type="button"
              onClick={() => setFilter('mediano')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'mediano'
                  ? 'bg-cyan-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Mediano (R$ 1.000)
            </button>
            <button
              type="button"
              onClick={() => setFilter('empresarial')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'empresarial'
                  ? 'bg-cyan-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Empresarial (R$ 1.500)
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredItems.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#080D18] overflow-hidden flex flex-col hover:border-slate-300 dark:hover:border-slate-700 transition-all group shadow-sm hover:shadow-md"
            >
              {/* Interactive Mockup Container */}
              <div className="relative bg-slate-900 border-b border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 min-h-[220px] flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between text-xs text-slate-400 z-10">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="font-mono text-slate-300 ml-1 text-[11px] truncate max-w-[140px] sm:max-w-[180px]">
                      {project.id}.stratex.app
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-300 bg-cyan-950/90 px-2 py-0.5 rounded border border-cyan-800/40">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Simulated UI layout in card header */}
                <div className="my-5 rounded-xl border border-slate-800 bg-slate-950/80 p-4 shadow-inner">
                  <div className="text-[11px] text-cyan-400 uppercase tracking-wider font-mono font-semibold">
                    {project.client}
                  </div>
                  <div className="font-display text-base sm:text-lg font-bold text-white mt-1">
                    {project.desktopPreview.heroTitle}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 line-clamp-1">
                    {project.desktopPreview.heroSubtitle}
                  </div>
                </div>

                <div className="flex items-center justify-between z-10 gap-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2.5 py-1 rounded-md">
                    <span>Resultado:</span>
                    <span>{project.metrics}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-cyan-400 transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Ver detalhes do projeto</span>
                    <span className="sm:hidden">Detalhes</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Clean unboxed tags */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="flex items-center gap-2">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{tag}</span>
                        {idx < project.tags.length - 1 && <span className="text-slate-300 dark:text-slate-600">·</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors"
                  >
                    Especificações técnicas →
                  </button>

                  <a
                    href={getWhatsAppUrl(`Olá! Vi o case do ${project.title} na StrateX e quero um projeto com proposta semelhante.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Quero um assim</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed project view */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0C1220] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Fechar modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-cyan-700 dark:text-cyan-400 font-mono font-bold">
                  <span>{activeModalProject.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeModalProject.client}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                  {activeModalProject.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {activeModalProject.description}
                </p>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                    Métrica de Impacto Alcançada:
                  </div>
                  <div className="font-display text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    {activeModalProject.metrics}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider mb-3">
                    Funcionalidades Implementadas:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {activeModalProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left font-medium">
                    Precisa de uma solução para o seu negócio?
                  </div>
                  <a
                    href={getWhatsAppUrl(`Olá! Gostei do projeto ${activeModalProject.title} da StrateX e quero solicitar orçamento para meu negócio.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition-colors shadow-sm"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Solicitar Orçamento Deste Formato</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
