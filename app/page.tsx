import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LightningIcon } from "@/components/lightning-icon"
import {
  Github,
  Instagram,
  Facebook,
  ArrowRight,
  Cpu,
  Shield,
  Zap,
  BookOpen,
  Users,
  Target,
  Eye,
  Lightbulb,
  MapPin,
  GraduationCap,
  Heart,
  Code,
  Layers,
  Globe,
  Rocket,
  Award,
  CheckCircle,
  TrendingUp,
  Building,
  Sparkles,
  Brain,
  Workflow,
  Database,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 z-50 bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="#inicio" className="flex items-center gap-2 text-xl font-semibold">
              <LightningIcon className="h-6 w-6 text-primary" />
              LZRSoft
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="#sobre" className="text-sm text-white/80 hover:text-white transition-colors">
                Sobre Nós
              </Link>
              <Link href="#produtos" className="text-sm text-white/80 hover:text-white transition-colors">
                Produtos
              </Link>
              <Link href="#tecnologia" className="text-sm text-white/80 hover:text-white transition-colors">
                Tecnologia
              </Link>
              <Link href="#futuro" className="text-sm text-white/80 hover:text-white transition-colors">
                Visão de Futuro
              </Link>
              <Link href="#diferenciais" className="text-sm text-white/80 hover:text-white transition-colors">
                Por que LZRSoft
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="https://github.com/lzrsoft" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-white/60 hover:text-white transition-colors" />
              </Link>
              <Link href="/em-construcao">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black"
                >
                  Contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-32 lg:py-48">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-sm text-primary mb-8 border border-primary/20">
              <Sparkles className="h-4 w-4" />
              Revolucionando a Educação Tecnológica Brasileira
              <Rocket className="h-4 w-4" />
            </div>

            <h1 className="text-5xl lg:text-8xl font-bold mb-8 leading-tight">
              O Futuro da
              <br />
              <span className="text-primary">Simulação Educacional</span>
              <br />
              Começa Aqui
            </h1>

            <p className="text-xl lg:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
              Fundada por Emanuel Lázaro em Mucambo, Ceará, a LZRSoft é uma iniciativa visionária que busca transformar
              a educação tecnológica brasileira através do poder da colaboração open source. Nossa missão é criar um
              ecossistema de ferramentas educacionais inovadoras, desenvolvidas pela comunidade, para a comunidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg">
                <Link href="#sobre" className="flex items-center">
                  Descobrir Nossa Visão
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black px-10 py-6 text-lg"
              >
                <Link
                  href="https://github.com/lzrsoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Explorar Código
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-white/60">Open Source</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">🇧🇷</div>
                <div className="text-white/60">Inovação Brasileira</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-white/60">Potencial Ilimitado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us / Mission Section */}
      <section id="sobre" className="py-32 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Nossa Missão é Transformar</h2>
            <p className="text-xl text-white/70 leading-relaxed">
              A LZRSoft nasceu da convicção de que a tecnologia deve ser um catalisador para a educação e inovação. Não
              somos apenas uma empresa de software - somos arquitetos do futuro educacional brasileiro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">A Visão que Nos Move</h3>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                A LZRSoft nasceu da percepção de que o Brasil possui um potencial imenso para liderar a inovação em
                tecnologia educacional. Fundada por Emanuel Lázaro, nossa empresa busca unir desenvolvedores, educadores
                e visionários em torno de um objetivo comum: democratizar o acesso a ferramentas tecnológicas de ponta.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Acreditamos que através da colaboração open source e do desenvolvimento comunitário, podemos criar
                soluções que não apenas competem com as melhores do mundo, mas que também refletem as necessidades
                específicas da educação brasileira.
              </p>
            </div>
            <div className="dark-card rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Target className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Missão</h4>
                    <p className="text-sm text-white/60">Democratizar tecnologia educacional avançada</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Eye className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Visão</h4>
                    <p className="text-sm text-white/60">Ser referência global em inovação educacional</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Valores</h4>
                    <p className="text-sm text-white/60">Transparência, colaboração e excelência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="dark-card rounded-xl p-8 text-center">
              <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Inovação Constante</h4>
              <p className="text-white/70">
                Desenvolvemos soluções que antecipam as necessidades futuras da educação tecnológica.
              </p>
            </div>
            <div className="dark-card rounded-xl p-8 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Comunidade Ativa</h4>
              <p className="text-white/70">
                Construímos um ecossistema colaborativo onde desenvolvedores e educadores crescem juntos.
              </p>
            </div>
            <div className="dark-card rounded-xl p-8 text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Impacto Global</h4>
              <p className="text-white/70">
                Nossa tecnologia brasileira tem potencial para transformar a educação mundialmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products/Services Section */}
      <section id="produtos" className="py-32 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Nossos Produtos Revolucionários</h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Cada produto da LZRSoft é meticulosamente desenvolvido para resolver desafios reais da educação e
              engenharia, combinando performance excepcional com usabilidade intuitiva.
            </p>
          </div>

          {/* LibrePhy - Main Product */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400 mb-6">
                  <Lightbulb className="h-4 w-4" />
                  Projeto Principal - Arquitetura Revolucionária
                </div>

                <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                  LibrePhy: <span className="text-primary">Plataforma Colossal de Simulação Física</span>
                </h3>

                <p className="text-xl text-white/70 mb-8 leading-relaxed">
                  O LibrePhy será uma plataforma de simulação física extremamente modular, abrangente em todas as áreas
                  da física com matemática avançada e de grande escala. Uma arquitetura revolucionária que redefine os
                  limites da simulação educacional e científica.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">🏗️ Arquitetura Baseada em Microsserviços</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">Microsserviços Dedicados por Domínio</h5>
                          <p className="text-white/60 text-sm">
                            Cada área da física (mecânica, eletromagnetismo, quântica, relatividade) como microsserviços
                            independentes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">APIs Robustas e Bem Documentadas</h5>
                          <p className="text-white/60 text-sm">
                            Interfaces padronizadas para comunicação entre serviços e desenvolvimento de extensões
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">LibrePhy Engine - Kernel Otimizado</h5>
                          <p className="text-white/60 text-sm">
                            Núcleo em Rust para cálculos fundamentais e orquestração de microsserviços
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">Sistema de Plugins Avançado</h5>
                          <p className="text-white/60 text-sm">
                            Extensibilidade total para a comunidade adicionar modelos e algoritmos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">🔬 Abrangência Científica Completa</h4>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-white/80">Física Clássica & Lagrangiana</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-white/80">Eletromagnetismo Avançado</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-white/80">Termodinâmica & Mecânica Estatística</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-white/80">Relatividade Especial & Geral</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-white/80">Física Quântica & Campos</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-white/80">Matéria Condensada</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-white/80">Astrofísica & Cosmologia</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-white/80">Biofísica & Física Médica</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">🚀 Escalabilidade Colossal</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">Computação Distribuída em Nuvem</h5>
                          <p className="text-white/60 text-sm">
                            LibrePhy Cloud para processamento massivo e acesso sob demanda
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">Aceleração por Hardware Especializado</h5>
                          <p className="text-white/60 text-sm">
                            Suporte nativo para GPUs e TPUs para cálculos paralelizáveis
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">Matemática Avançada Integrada</h5>
                          <p className="text-white/60 text-sm">
                            Cálculo tensorial, EDPs, álgebra linear, computação simbólica
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    <Link
                      href="https://github.com/lzrsoft"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Acompanhar Desenvolvimento
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black"
                  >
                    <Link href="/em-construcao" className="flex items-center">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Documentação Técnica
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="dark-card rounded-3xl p-8 text-center">
                  <Cpu className="h-24 w-24 text-primary mx-auto mb-6" />
                  <h4 className="text-2xl font-bold mb-4">LibrePhy Engine</h4>
                  <p className="text-white/60 mb-6">Motor de simulação de próxima geração</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Arquitetura</span>
                      <span className="text-primary font-semibold">Microsserviços</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Performance</span>
                      <span className="text-primary font-semibold">Rust + GPU</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Escalabilidade</span>
                      <span className="text-primary font-semibold">Distribuída</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Licença</span>
                      <span className="text-primary font-semibold">Open Source</span>
                    </div>
                  </div>
                </div>

                <div className="dark-card rounded-2xl p-6">
                  <h4 className="font-semibold mb-4">🌐 Ecossistema Integrado</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Brain className="h-4 w-4 text-primary" />
                      <span className="text-white/80">IA Educacional Adaptativa</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Workflow className="h-4 w-4 text-primary" />
                      <span className="text-white/80">Interoperabilidade CAD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-white/80">Colaboração Comunitária</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Database className="h-4 w-4 text-primary" />
                      <span className="text-white/80">Big Data Científico</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Ecosystem */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-6">Ecossistema de Produtos</h3>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              O LibrePhy é apenas o início. Estamos construindo um ecossistema completo de ferramentas educacionais
              interconectadas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="dark-card rounded-xl p-8">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold mb-4">LibrePhy Core</h4>
              <p className="text-white/70 mb-4">
                Fundação open source com módulos essenciais para simulação física educacional e científica.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Microsserviços para física clássica e eletromagnetismo</li>
                <li>• API aberta para extensões da comunidade</li>
                <li>• Interface gráfica responsiva e intuitiva</li>
                <li>• Documentação técnica completa</li>
                <li>• Suporte para computação local e em nuvem básica</li>
              </ul>
            </div>

            <div className="dark-card rounded-xl p-8 border border-primary/20">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-4">LibrePhy Pro</h4>
              <p className="text-white/70 mb-4">
                Versão avançada com microsserviços especializados para pesquisa científica e educação superior.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Módulos completos de física quântica e relatividade</li>
                <li>• Simulações avançadas de fluidos e estruturas</li>
                <li>• Aceleração por GPU e processamento paralelo</li>
                <li>• Ferramentas de análise matemática avançada</li>
                <li>• Integração com sistemas CAD e visualização 3D</li>
              </ul>
            </div>

            <div className="dark-card rounded-xl p-8">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold mb-4">LibrePhy Cloud</h4>
              <p className="text-white/70 mb-4">
                Plataforma distribuída para simulações de grande escala e colaboração científica global.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Computação distribuída para simulações massivas</li>
                <li>• Colaboração em tempo real entre pesquisadores</li>
                <li>• Armazenamento e análise de big data científico</li>
                <li>• IA adaptativa para otimização de simulações</li>
                <li>• APIs para integração com sistemas externos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-32 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Stack Tecnológica Moderna</h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Nossa abordagem tecnológica é diversificada e moderna, combinando as melhores ferramentas de cada
              ecossistema para criar soluções robustas, escaláveis e inovadoras.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Filosofia Multi-Tecnologia</h3>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                Acreditamos em escolher a ferramenta certa para cada desafio. Nossa stack combina linguagens de alta
                performance como Rust e C++ para computação intensiva, Python para ciência de dados e IA, e tecnologias
                web modernas para interfaces intuitivas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-primary" />
                  <span className="text-white/80">Performance nativa com Rust e C++</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-primary" />
                  <span className="text-white/80">IA e ciência de dados com Python</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-primary" />
                  <span className="text-white/80">Interfaces modernas com React/Next.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="h-6 w-6 text-primary" />
                  <span className="text-white/80">Arquitetura escalável e modular</span>
                </div>
              </div>
            </div>
            <div className="dark-card rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-6">Nossa Stack Completa</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-orange-400" />
                    <span>Rust</span>
                  </div>
                  <span className="text-sm text-white/60">Performance & Segurança</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-blue-400" />
                    <span>Python</span>
                  </div>
                  <span className="text-sm text-white/60">IA & Ciência de Dados</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-yellow-400" />
                    <span>TypeScript/React</span>
                  </div>
                  <span className="text-sm text-white/60">Frontend Moderno</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Layers className="h-5 w-5 text-green-400" />
                    <span>WebAssembly</span>
                  </div>
                  <span className="text-sm text-white/60">Performance Web</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-purple-400" />
                    <span>PostgreSQL</span>
                  </div>
                  <span className="text-sm text-white/60">Banco de Dados</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Workflow className="h-5 w-5 text-primary" />
                    <span>Docker/K8s</span>
                  </div>
                  <span className="text-sm text-white/60">DevOps</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="dark-card rounded-xl p-8 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Performance Híbrida</h4>
              <p className="text-white/70">
                Combinamos linguagens compiladas para performance crítica com linguagens interpretadas para
                flexibilidade.
              </p>
            </div>
            <div className="dark-card rounded-xl p-8 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Segurança Multicamada</h4>
              <p className="text-white/70">
                Cada tecnologia contribui com suas forças de segurança para criar um ecossistema robusto e confiável.
              </p>
            </div>
            <div className="dark-card rounded-xl p-8 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Comunidade Diversa</h4>
              <p className="text-white/70">
                Nossa stack permite que desenvolvedores de diferentes backgrounds contribuam com suas especialidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision/Roadmap Section */}
      <section id="futuro" className="py-32 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Visão de Futuro</h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Não estamos apenas construindo software - estamos moldando o futuro da educação tecnológica. Nossa visão é
              ambiciosa, mas nosso plano é meticuloso e realizável.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Nossa Trajetória de Crescimento</h3>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Começamos com o LibrePhy, mas nossa ambição vai muito além. Visualizamos um ecossistema completo de
                ferramentas educacionais que transformará como o conhecimento é transmitido e absorvido no século XXI.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Fase Fundação: Construindo a Base</h5>
                    <p className="text-white/60 text-sm">
                      Desenvolvimento do LibrePhy e estabelecimento da comunidade open source colaborativa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/60 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Fase Expansão: Diversificando o Portfólio</h5>
                    <p className="text-white/60 text-sm">
                      Lançamento de ferramentas CAD educacionais e plataformas de aprendizado adaptativo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/40 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Fase Ecossistema: Plataforma Completa</h5>
                    <p className="text-white/60 text-sm">
                      Integração completa com IA educacional, robótica e ferramentas de análise científica
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark-card rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-6">Métricas de Impacto Projetadas</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/60">Usuários Ativos</span>
                    <span className="text-primary font-semibold">100K+</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/60">Instituições Parceiras</span>
                    <span className="text-primary font-semibold">500+</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-1/2"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/60">Contribuidores Open Source</span>
                    <span className="text-primary font-semibold">1K+</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="dark-card rounded-xl p-6 text-center">
              <Building className="h-10 w-10 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm">Ferramentas CAD</h4>
              <p className="text-xs text-white/60 mt-1">Modelagem 3D educacional</p>
            </div>
            <div className="dark-card rounded-xl p-6 text-center">
              <Brain className="h-10 w-10 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm">IA Educacional</h4>
              <p className="text-xs text-white/60 mt-1">Aprendizado personalizado</p>
            </div>
            <div className="dark-card rounded-xl p-6 text-center">
              <Cpu className="h-10 w-10 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm">Simuladores Robótica</h4>
              <p className="text-xs text-white/60 mt-1">Programação robótica virtual</p>
            </div>
            <div className="dark-card rounded-xl p-6 text-center">
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm">Análise Científica</h4>
              <p className="text-xs text-white/60 mt-1">Visualização de dados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LZRSoft Section */}
      <section id="diferenciais" className="py-32 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Por que Escolher a LZRSoft?</h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Em um mercado saturado de soluções genéricas, oferecemos algo único: tecnologia brasileira de classe
              mundial, desenvolvida com paixão e precisão para resolver problemas reais.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Nossos Diferenciais Únicos</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-2">Excelência Técnica Comprovada</h5>
                    <p className="text-white/60">
                      Nossa escolha por Rust e arquitetura moderna garante software robusto, seguro e performático.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-2">Compromisso com Open Source</h5>
                    <p className="text-white/60">
                      Transparência total, comunidade ativa e desenvolvimento colaborativo que beneficia a todos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <TrendingUp className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-2">Inovação Contínua</h5>
                    <p className="text-white/60">
                      Sempre na vanguarda tecnológica, antecipando tendências e necessidades futuras.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-2">Suporte Excepcional</h5>
                    <p className="text-white/60">
                      Equipe dedicada e comunidade engajada para garantir seu sucesso com nossas ferramentas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark-card rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-6">O Valor que Entregamos</h4>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold mb-1">Redução de Custos</h5>
                  <p className="text-white/60 text-sm">
                    Elimine licenças caras de software proprietário sem comprometer qualidade
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold mb-1">Aumento de Produtividade</h5>
                  <p className="text-white/60 text-sm">
                    Ferramentas intuitivas que aceleram o aprendizado e a execução de projetos
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold mb-1">Flexibilidade Total</h5>
                  <p className="text-white/60 text-sm">
                    Customize e adapte nossas soluções para suas necessidades específicas
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold mb-1">Futuro Garantido</h5>
                  <p className="text-white/60 text-sm">
                    Tecnologia moderna que evolui com suas necessidades e o mercado
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="dark-card rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Junte-se à Revolução Educacional</h3>
              <p className="text-lg text-white/70 mb-8">
                Não somos apenas uma empresa de software - somos parceiros na transformação da educação brasileira.
                Quando você escolhe a LZRSoft, está investindo no futuro da tecnologia educacional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/em-construcao" className="flex items-center">
                    Falar com Nossa Equipe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black"
                >
                  <Link
                    href="https://github.com/lzrsoft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Explorar Código
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-32 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">A Mente por Trás da Visão</h2>
              <p className="text-xl text-white/70">
                Conheça Emanuel Lázaro, o visionário que está redefinindo o futuro da educação tecnológica brasileira
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Emanuel Lázaro</h3>
                  <p className="text-primary text-lg mb-4">Fundador & Desenvolvedor</p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Aos 19 anos, Emanuel é um desenvolvedor full stack apaixonado por tecnologia e educação. Nascido em
                    Sobral e criado em Mucambo, Ceará, ele combina sua experiência técnica com uma visão clara sobre os
                    desafios educacionais brasileiros.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Uma Jornada de Aprendizado e Propósito</h4>
                  <p className="text-white/70 leading-relaxed">
                    Estudante de Engenharia de Software na UNESA, Emanuel entende que grandes projetos nascem da
                    colaboração. Sua experiência em desenvolvimento full stack, combinada com sua paixão pelo open
                    source, o motivou a fundar a LZRSoft em sua cidade natal, Mucambo, com o objetivo de reunir uma
                    comunidade de desenvolvedores dedicados a transformar a educação.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Buscando Colaboradores Visionários</h4>
                  <p className="text-white/70 leading-relaxed">
                    Emanuel acredita que os melhores projetos são construídos em equipe. Ele está ativamente buscando
                    desenvolvedores, designers e educadores que compartilhem sua visão de democratizar a tecnologia
                    educacional através do código aberto.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <GraduationCap className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-xs text-white/60 uppercase tracking-wider">Formação</div>
                    <div className="text-sm font-medium">Eng. Software - UNESA</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-xs text-white/60 uppercase tracking-wider">Sede</div>
                    <div className="text-sm font-medium">Mucambo, Ceará</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-xs text-white/60 uppercase tracking-wider">Foco</div>
                    <div className="text-sm font-medium">Comunidade Open Source</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="dark-card rounded-2xl p-8 text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6 border border-primary/20">
                    <Code className="h-16 w-16 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-4">Especialidades & Interesses</h4>
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Desenvolvimento Full Stack</div>
                    <div>• Arquitetura de Software</div>
                    <div>• Tecnologias Open Source</div>
                    <div>• Educação & Inovação</div>
                    <div>• Liderança Comunitária</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Pronto para Construir o Futuro Juntos?</h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              A LZRSoft é mais que uma empresa - é uma comunidade de visionários trabalhando para democratizar a
              educação tecnológica. Se você compartilha nossa paixão por inovação e impacto social, queremos conhecê-lo.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg">
                <Link href="/em-construcao" className="flex items-center">
                  Iniciar Conversa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black px-10 py-6 text-lg"
              >
                <Link
                  href="https://github.com/lzrsoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Contribuir Agora
                </Link>
              </Button>
            </div>

            <p className="text-sm text-white/50">
              Junte-se a centenas de desenvolvedores, educadores e visionários que já estão construindo o futuro
              conosco.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LightningIcon className="h-6 w-6 text-primary" />
                <span className="text-xl font-semibold">LZRSoft</span>
              </div>
              <p className="text-white/60 text-sm mb-6">
                Revolucionando a educação tecnológica através de soluções open source inovadoras. O futuro da simulação
                educacional começa aqui.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/lzrsoft" },
                  { icon: Instagram, href: "https://instagram.com/lzrsoft" },
                  { icon: Facebook, href: "https://facebook.com/lzrsoft" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="#produtos" className="hover:text-white transition-colors">
                    LibrePhy Core
                  </Link>
                </li>
                <li>
                  <Link href="#produtos" className="hover:text-white transition-colors">
                    LibrePhy Pro
                  </Link>
                </li>
                <li>
                  <Link href="#produtos" className="hover:text-white transition-colors">
                    LibrePhy Cloud
                  </Link>
                </li>
                <li>
                  <Link href="/em-construcao" className="hover:text-white transition-colors">
                    Documentação
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="#sobre" className="hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#futuro" className="hover:text-white transition-colors">
                    Visão de Futuro
                  </Link>
                </li>
                <li>
                  <Link href="/em-construcao" className="hover:text-white transition-colors">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="/em-construcao" className="hover:text-white transition-colors">
                    Imprensa
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="/em-construcao" className="hover:text-white transition-colors">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="/em-construcao" className="hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/lzrsoft" className="hover:text-white transition-colors">
                    Comunidade
                  </Link>
                </li>
                <li>
                  <Link href="/em-construcao" className="hover:text-white transition-colors">
                    Status do Sistema
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} LZRSoft. Todos os direitos reservados. Feito com ❤️ no Brasil.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <Link href="/em-construcao" className="hover:text-white transition-colors">
                Privacidade
              </Link>
              <Link href="/em-construcao" className="hover:text-white transition-colors">
                Termos
              </Link>
              <Link href="/em-construcao" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
