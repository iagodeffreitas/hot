import { 
  Flame, 
  Gamepad2, 
  Wrench, 
  MessageSquare, 
  LayoutTemplate, 
  Globe2, 
  Code2, 
  Users, 
  Palette, 
  Lightbulb, 
  BookOpen, 
  Filter, 
  Video, 
  TableProperties, 
  Type, 
  TrendingUp,
  Bot,
  ChevronRight,
  ShieldAlert,
  Unlock,
  Zap
} from "lucide-react";
import { ReactNode } from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col p-4 md:p-10 justify-between max-w-[1400px] mx-auto selection:bg-rose-600 selection:text-white">
      <header className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-black tracking-tighter italic">
          ACERVO <span className="text-rose-600">PRO</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-[10px] sm:text-xs text-gray-400 font-mono tracking-widest uppercase hidden sm:block">V.2.4.0 Live</span>
          <div className="w-12 h-[1px] bg-gray-700 hidden sm:block"></div>
          <span className="text-[10px] sm:text-xs text-white bg-white/10 px-3 py-1 rounded-full whitespace-nowrap">Acesso Vitalício</span>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mt-8 mb-12 flex-1 items-center">
        <section className="lg:col-span-5 flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="text-center sm:text-left">
            <h1 className="text-[3.25rem] sm:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter uppercase mb-4 sm:mb-6">
              TUDO EM<br />
              <span className="text-gradient">UM SÓ LUGAR.</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-[300px] sm:max-w-sm leading-relaxed mx-auto sm:mx-0">
              A maior biblioteca de recursos digitais do mercado brasileiro. Ferramentas, automações e conteúdos prontos para escalar qualquer operação.
            </p>
          </div>

          <div className="hot-card p-5 md:p-8 rounded-2xl shadow-2xl shadow-rose-900/20 relative overflow-hidden text-center sm:text-left">
            <div className="absolute -right-4 -top-8 opacity-10 font-black text-8xl sm:text-9xl italic pointer-events-none">+18</div>
            <div className="relative z-10 text-rose-200 tag mb-2 sm:mb-3 inline-block">Área Premium</div>
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-2 relative z-10 text-white">NICHE HOT</h2>
            <p className="text-rose-100 text-xs sm:text-sm font-bold relative z-10">111 ITENS DE CONTEÚDO ADULTO</p>
            <p className="text-rose-200/60 text-[9px] sm:text-[10px] mt-2 sm:mt-3 uppercase tracking-wide relative z-10">
              Organizado e sinalizado para maiores de 18 anos
            </p>
          </div>

          <button className="w-full bg-white text-black font-black py-4 sm:py-5 rounded-xl text-base sm:text-lg uppercase tracking-tighter hover:bg-gray-200 transition-colors shadow-lg active:scale-95">
            Garantir Acesso Imediato
          </button>
        </section>

        <section className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 self-center">
          <GridItem count="196" title="Ferramentas" />
          <GridItem count="114" title="WhatsApp CRM" countColor="text-rose-500" titleColor="text-rose-300" className="border-rose-900/50 bg-rose-950/20" />
          <GridItem count="69" title="Páginas / LPs" />
          <GridItem count="57" title="iGaming/IPTV" countColor="text-blue-500" titleColor="text-blue-300" className="border-blue-900/50 bg-blue-950/20" />
          <GridItem count="50" title="Templates" />
          <GridItem count="48" title="WordPress" />
          <GridItem count="46" title="Sistemas SaaS" />
          <GridItem count="34" title="Leads/Extração" />
          <GridItem count="31" title="Social Media" />
          <GridItem count="17" title="Criativos" />
          <GridItem count="11" title="PLR Digital" />
          <GridItem count="7" title="Funis VSL" />
          
          <div className="grid-item p-3 md:p-5 rounded-xl bg-white/5 border-white/20 flex flex-col justify-center">
            <div className="text-[9px] sm:text-[10px] text-white/50 uppercase font-mono mb-1 tracking-wider">Destaque</div>
            <div className="text-sm sm:text-base font-black uppercase tracking-tighter">CHATTECH AI</div>
            <div className="tag text-gray-400 mt-1" style={{fontSize: '9px'}}>Automações</div>
          </div>

          <div className="grid-item p-3 sm:p-4 rounded-xl flex items-center justify-center border-dashed opacity-50">
            <div className="tag text-[9px] sm:text-[10px]">+65 Itens Extra</div>
          </div>

          <div className="grid-item p-3 sm:p-4 rounded-xl flex items-center justify-center bg-green-500/10 border-green-500/30">
            <div className="text-green-400 font-bold text-[9px] sm:text-[10px] uppercase italic tracking-wider text-center">
              Atualizações<br className="hidden sm:block"/> Diárias
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 pt-6 sm:pt-8 pb-4 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        <div className="flex gap-6 sm:gap-8 justify-center">
          <div className="flex flex-col">
            <span className="tag text-gray-600 mb-1">Total de Ativos</span>
            <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter">800+ RECURSOS</span>
          </div>
          <div className="flex flex-col">
            <span className="tag text-gray-600 mb-1">Entrega</span>
            <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter">IMEDIATA</span>
          </div>
        </div>
        <div className="text-[9px] sm:text-[10px] text-gray-700 uppercase tracking-[0.2em] font-mono">
          Propriedade de Acervo Pro © 2026<br className="sm:hidden" /> Direitos Reservados
        </div>
      </footer>
    </div>
  );
}

interface GridItemProps {
  count: string;
  title: string;
  countColor?: string;
  titleColor?: string;
  className?: string;
}

function GridItem({ 
  count, 
  title, 
  countColor = "text-white", 
  titleColor = "text-gray-500", 
  className = "" 
}: GridItemProps) {
  return (
    <div className={`grid-item p-3 md:p-5 rounded-xl flex flex-col justify-center cursor-default ${className}`}>
      <div className={`text-2xl sm:text-4xl font-black mb-1 ${countColor}`}>{count}</div>
      <div className={`tag ${titleColor}`} style={{fontSize: '9px'}}>{title}</div>
    </div>
  );
}
