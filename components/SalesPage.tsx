
import React from 'react';
import { SPREADSHEETS } from '../constants';
import SpreadsheetDetail from './SpreadsheetDetail';

const SalesPage: React.FC = () => {
  const testimonials = [
    { name: "Mariana S.", role: "Arquiteta", text: "Eu sempre tentei planilhas, mas desistia porque eram travadas. O MY Finance é diferente, tudo se ajusta sozinho.", stars: 5 },
    { name: "Rodrigo & Carla", role: "Profissionais TI", text: "O sistema de cartões salvou meu orçamento. Vimos em 5 minutos que as assinaturas estavam sugando nossa renda.", stars: 5 },
    { name: "Felipe M.", role: "Empresário", text: "Simplesmente o melhor investimento do ano. A clareza de alocar meus gastos e ver o saldo real é libertador.", stars: 5 },
    { name: "Ana Clara", role: "Designer", text: "Finalmente entendi para onde vai cada centavo. O visual da planilha é impecável e não cansa a vista.", stars: 5 },
    { name: "Lucas P.", role: "Engenheiro", text: "A automação de faturas é mágica. Consigo antecipar pagamentos e nunca mais paguei juros por esquecimento.", stars: 5 },
    { name: "Beatriz G.", role: "Professora", text: "O melhor custo-benefício que já vi. O sistema de alocação de despesas realmente funciona na rotina.", stars: 5 },
    { name: "Gustavo R.", role: "Dev", text: "Simples e direto, sem enrolação. As fórmulas são robustas e a planilha não quebra por nada.", stars: 5 },
    { name: "Juliana T.", role: "Médica", text: "Tinha pavor de planilhas. Agora uso esse sistema todo domingo com prazer. Recomendo muito!", stars: 5 }
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Gestão Profissional MY Finance
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
            Domine seu dinheiro: A planilha completa para alocar <span className="text-emerald-600 italic">receitas e despesas com 1 clique.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Pare de lutar com fórmulas complexas. Tenha acesso ao sistema de <span className="font-bold text-slate-800">gestão financeira automática</span> feito para quem busca clareza absoluta e simplicidade.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
            <div className="flex -space-x-3 overflow-hidden">
              {[1, 2, 3, 4, 5].map((i) => (
                <img key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
              ))}
            </div>
            <div className="text-sm font-medium text-slate-600">
              <span className="text-emerald-600 font-bold">+20.000 usuários</span> já utilizam o MY Finance
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#oferta" className="bg-emerald-600 text-white px-8 py-5 rounded-2xl text-xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 hover:-translate-y-1">
              Quero minha planilha agora
            </a>
            <a href="#solucao" className="bg-white text-slate-600 border-2 border-slate-200 px-8 py-5 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-all">
              Ver o que está incluído
            </a>
          </div>
        </div>
      </section>

      {/* Dynamic Feedbacks Section (Horizontal Scroll) */}
      <section id="beneficios" className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">O que dizem nossos usuários</h2>
          <p className="text-slate-500">Prova real de que o controle financeiro por planilhas pode ser simples e elegante.</p>
        </div>

        {/* Horizontal Marquee Container */}
        <div className="relative flex overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap flex gap-8">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="inline-block w-[350px] bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm shrink-0 whitespace-normal">
                <div className="flex text-amber-400 mb-4">
                  {Array(t.stars).fill("★").join("")}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 leading-none">{t.name}</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold mt-1 tracking-wider">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Product focus section */}
      <section id="solucao" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Uma planilha que trabalha por você. Não o contrário.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Diferente de sistemas complexos ou aplicativos que cobram mensalidade, o <strong>MY Finance</strong> é uma ferramenta única e vitalícia. Você aloca seus gastos, e o sistema gera os gráficos e a visão consolidada mensal automaticamente.
            </p>
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3 items-start">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Alocação simplificada de receitas e despesas.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Fórmulas automáticas protegidas (você não precisa editar código).</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Visual profissional compatível com Google Sheets e Excel.</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                <div className="bg-slate-50 p-2 md:p-4">
                  <img 
                    src="https://i.ibb.co/LdxC08C/Captura-de-tela-2025-02-14-114251.png" 
                    alt="Dashboard MY Finance"
                    className="w-full h-auto rounded-xl shadow-md border border-slate-200"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spreadsheet List */}
      <section className="bg-slate-900 py-24 px-4 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">10 Abas Integradas para Controle Total</h2>
            <p className="text-slate-400 text-lg">Tudo o que você precisa em um único arquivo, pronto para uso.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPREADSHEETS.map((item) => (
              <SpreadsheetDetail key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-12">Bônus Premium Incluídos</h2>
           <div className="grid md:grid-cols-2 gap-8 text-left">
             <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50">
               <div className="text-emerald-600 font-black text-4xl mb-4">01</div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Guia de Alocação Rápida</h3>
               <p className="text-slate-600">Como preencher sua planilha em menos de 10 minutos por semana.</p>
             </div>
             <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50">
               <div className="text-emerald-600 font-black text-4xl mb-4">02</div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Treinamento de Uso</h3>
               <p className="text-slate-600">Vídeos curtos mostrando como tirar o máximo proveito das automações.</p>
             </div>
             <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50">
               <div className="text-emerald-600 font-black text-4xl mb-4">03</div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Checklist de Fechamento</h3>
               <p className="text-slate-600">Tudo o que você precisa conferir antes de virar o mês na planilha.</p>
             </div>
             <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50">
               <div className="text-emerald-600 font-black text-4xl mb-4">04</div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Dashboard de Metas</h3>
               <p className="text-slate-600">Visualize o progresso dos seus sonhos em tempo real.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-6">Esta planilha é para você:</h3>
            <ul className="space-y-3 text-slate-700">
              <li>• Se você quer saber onde cada centavo é gasto.</li>
              <li>• Se você precisa gerenciar vários cartões de crédito.</li>
              <li>• Se você busca uma ferramenta visual e limpa.</li>
              <li>• Se você é autônomo e tem renda variável.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-rose-700 mb-6">Não é para você:</h3>
            <ul className="space-y-3 text-slate-700">
              <li>• Se você espera que o dinheiro se organize sozinho.</li>
              <li>• Se você busca aconselhamento de investimentos (é uma ferramenta de controle).</li>
              <li>• Se você prefere sistemas manuais e desorganizados.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="oferta" className="py-24 px-4 bg-emerald-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Assuma o controle total hoje mesmo.
          </h2>
          <div className="bg-white text-slate-900 rounded-3xl p-10 shadow-2xl inline-block w-full max-w-lg mb-8">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">Oferta de Acesso Vitalício</p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-slate-300 line-through text-2xl">R$ 297</span>
              <span className="text-5xl font-black text-emerald-600 italic">R$ 97,00</span>
            </div>
            <p className="text-slate-600 mb-8">Pagamento único. Sem mensalidades.</p>
            <button className="w-full bg-slate-900 text-white py-5 rounded-2xl text-2xl font-bold hover:bg-slate-800 transition-all transform hover:scale-105">
               Garantir minha planilha MY Finance
            </button>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
               Garantia incondicional de 7 dias
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 text-center text-slate-400 text-sm border-t border-slate-100">
        <p>© 2024 MY Finance - Todos os direitos reservados.</p>
        <p className="mt-2 italic">A ferramenta profissional para quem valoriza seu dinheiro.</p>
      </footer>
    </div>
  );
};

export default SalesPage;
