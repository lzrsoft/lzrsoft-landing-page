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
                Nossa Estratégia
              </Link>
              <Link href="#produtos" className="text-sm text-white/80 hover:text-white transition-colors">
                Soluções
              </Link>
              <Link href="#tecnologia" className="text-sm text-white/80 hover:text-white transition-colors">
                Tecnologia Core
              </Link>
              <Link href="#futuro" className="text-sm text-white/80 hover:text-white transition-colors">
                Visão de Impacto
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
                  Contato Estratégico
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
              Engenharia de Software para a Vanguarda Educacional Brasileira
              <Rocket className="h-4 w-4" />
            </div>

            <h1 className="text-5xl lg:text-8xl font-bold mb-8 leading-tight">
              O Futuro da Simulação
              <br />
              Educacional Avançada,
              <br />
              <span className="text-primary">Impulsionado por Rust.</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
              Fundada por Emanuel Lázaro em Mucambo, Ceará, a LZRSoft é uma organização visionária dedicada a redefinir
              a educação tecnológica no Brasil. Nossa estratégia se baseia no poder da colaboração open source e na
              engenharia de software de precisão para construir um ecossistema de ferramentas educacionais seguras,
              performáticas e inovadoras, com um núcleo robusto em Rust.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg">
                <Link href="#sobre" className="flex items-center">
                  Descobrir Nossa Estratégia
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
                  Explorar Código Fonte
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-white/60">Open Source Estratégico</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">🇧🇷</div>
                <div className="text-white/60">Inovação Brasileira Visionária</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">🚀</div>
                <div className="text-white/60">Performance & Segurança com Rust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us / Mission Section */}
      <section id="sobre" className="py-32 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Nossa Missão: Arquitetar o Futuro Educacional</h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Na LZRSoft, encaramos a tecnologia como o alicerce para a transformação educacional e a inovação
              sustentada. Somos mais que desenvolvedores de software; somos engenheiros de um futuro educacional
              brasileiro mais robusto, acessível e tecnologicamente avançado.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">A Estratégia que Impulsiona Nossa Visão</h3>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                A LZRSoft emerge da convicção de que o Brasil possui um vasto potencial para liderar a inovação em
                tecnologia educacional. Fundada por Emanuel Lázaro, nossa organização se propõe a unificar
                desenvolvedores, educadores e estrategistas em torno de um objetivo comum: democratizar o acesso a
                ferramentas de simulação e aprendizado de alta performance, com um forte compromisso com a governança
                transparente de projetos open source.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Acreditamos que a colaboração estratégica em código aberto, alicerçada em uma engenharia de software
                disciplinada e na escolha de tecnologias de ponta como Rust, nos permitirá criar soluções que não apenas
                competem globalmente, mas que são intrinsecamente adaptadas às necessidades da educação brasileira.
              </p>
            </div>
            <div className="dark-card rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Target className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Missão Estratégica</h4>
                    <p className="text-sm text-white/60">Democratizar tecnologia educacional avançada com soluções robustas e performáticas.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Eye className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Visão de Futuro</h4>
                    <p className="text-sm text-white/60">Ser referência global em inovação educacional, impulsionada pela excelência técnica e colaboração estratégica.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Valores Fundamentais</h4>
                    <p className="text-sm text-white/60">Transparência, colaboração profissional, excelência técnica e impacto sustentável.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="dark-card rounded-xl p-8 text-center">
              <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Inovação Estratégica</h4>
              <p className="text-white/70">
                Desenvolvemos soluções que antecipam e moldam as futuras necessidades da educação tecnológica, com base em P&D contínuo.
              </p>
            </div>
            <div className="dark-card rounded-xl p-8 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Comunidade Profissional</h4>
              <p className="text-white/70">
                Fomentamos um ecossistema colaborativo, bem governado, onde desenvolvedores e educadores co-criam soluções de impacto.
              </p>
            </div>
            <div className="dark-card rounded-xl p-8 text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Impacto Global Estruturado</h4>
              <p className="text-white/70">
                Nossa tecnologia brasileira, construída com rigor, tem o potencial de transformar a educação em escala mundial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products/Services Section */}
      <section id="produtos" className="py-32 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Engenharia de Software para o Futuro da Educação</h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Cada solução da LZRSoft é um produto de engenharia meticulosa, projetada para resolver desafios complexos
              na educação e pesquisa, combinando performance de nível de sistema com usabilidade intuitiva e segurança robusta.
            </p>
          </div>

          {/* LibrePhy - Main Product */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400 mb-6">
                  <Cpu className="h-4 w-4" />
                  Projeto Estratégico - Arquitetura de Alta Performance
                </div>

                <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                  LibrePhy: <span className="text-primary">Plataforma de Simulação Física de Próxima Geração</span>
                </h3>

                <p className="text-xl text-white/70 mb-8 leading-relaxed">
                  O LibrePhy é concebido como uma plataforma de simulação física de altíssima modularidade e performance,
                  abrangendo domínios físicos complexos com matemática avançada e capacidade de processamento em larga escala.
                  Sua arquitetura, centrada em microsserviços e com um motor em Rust, visa redefinir os paradigmas da
                  simulação educacional e científica.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">🏗️ Arquitetura Baseada em Microsserviços com Núcleo em Rust</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">Microsserviços Especializados por Domínio Físico</h5>
                          <p className="text-white/60 text-sm">
                            Isolamento e otimização de cada ramo da física (mecânica, eletromagnetismo, quântica, etc.)
                            em serviços independentes, facilitando a manutenção, evolução e escalabilidade granular.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">LibrePhy Engine: Kernel em Rust para Performance e Segurança Críticas</h5>
                          <p className="text-white/60 text-sm">
                            O coração do LibrePhy é um motor de simulação desenvolvido em Rust, garantindo segurança de memória
                            sem garbage collector, concorrência eficiente ("fearless concurrency"), e performance excepcional
                            para cálculos numéricos intensivos e orquestração de microsserviços.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">APIs Robustas, Versionadas e Bem Documentadas</h5>
                          <p className="text-white/60 text-sm">
                            Interfaces padronizadas (gRPC, REST) para comunicação inter-serviços e integração com
                            ferramentas externas, assegurando interoperabilidade e desenvolvimento de extensões pela comunidade.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">Sistema de Plugins Extensível e Seguro</h5>
                          <p className="text-white/60 text-sm">
                            Permite à comunidade adicionar novos modelos físicos, algoritmos de simulação e visualizadores,
                            com mecanismos de sandboxing e validação para manter a integridade da plataforma.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">🔬 Abrangência Científica Detalhada</h4>
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
                    <h4 className="text-lg font-semibold mb-3 text-primary">🚀 Escalabilidade e Performance Excepcionais</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">Computação Distribuída e Cloud-Native</h5>
                          <p className="text-white/60 text-sm">
                            Arquitetura projetada para LibrePhy Cloud, permitindo processamento massivo paralelo,
                            gerenciamento elástico de recursos e acesso global sob demanda.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">Aceleração por Hardware Heterogêneo</h5>
                          <p className="text-white/60 text-sm">
                            Suporte otimizado para GPUs (via CUDA/OpenCL) e TPUs, aproveitando o paralelismo massivo
                            para cálculos complexos, orquestrado pelo núcleo em Rust.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium mb-1">Matemática Avançada de Alta Precisão</h5>
                          <p className="text-white/60 text-sm">
                            Integração de bibliotecas numéricas de alta performance para cálculo tensorial, resolução de EDPs,
                            álgebra linear e computação simbólica, fundamentais para simulações precisas.
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
                      Acompanhar Desenvolvimento no GitHub
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black"
                  >
                    <Link href="/em-construcao" className="flex items-center">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Consultar Documentação Técnica
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="dark-card rounded-3xl p-8 text-center">
                  <Code className="h-24 w-24 text-primary mx-auto mb-6" />
                  <h4 className="text-2xl font-bold mb-4">LibrePhy Engine (Rust Core)</h4>
                  <p className="text-white/60 mb-6">Motor de simulação de próxima geração, seguro e ultra-performático.</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Arquitetura</span>
                      <span className="text-primary font-semibold">Microsserviços</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Performance Core</span>
                      <span className="text-primary font-semibold">Rust + GPU/TPU</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Segurança</span>
                      <span className="text-primary font-semibold">Memory-Safe by Design (Rust)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Licença</span>
                      <span className="text-primary font-semibold">Open Source (MIT/Apache 2.0)</span>
                    </div>
                  </div>
                </div>

                <div className="dark-card rounded-2xl p-6">
                  <h4 className="font-semibold mb-4">🌐 Ecossistema Integrado e Sinergético</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Brain className="h-4 w-4 text-primary" />
                      <span className="text-white/80">IA Educacional Adaptativa (Python & Rust)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Workflow className="h-4 w-4 text-primary" />
                      <span className="text-white/80">Interoperabilidade CAD/CAE Avançada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-white/80">Colaboração Comunitária Estruturada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Database className="h-4 w-4 text-primary" />
                      <span className="text-white/80">Gestão de Big Data Científico (PostgreSQL)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Ecosystem */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-6">Ecossistema de Soluções LZRSoft</h3>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              O LibrePhy é a pedra angular de um ecossistema integrado, projetado para prover um conjunto completo de
              ferramentas educacionais e científicas de alta tecnologia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="dark-card rounded-xl p-8">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold mb-4">LibrePhy Core</h4>
              <p className="text-white/70 mb-4">
                A fundação open source, com o motor em Rust e módulos essenciais para simulação física educacional e científica inicial.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Motor de simulação em Rust</li>
                <li>• Microsserviços para física clássica e eletromagnetismo</li>
                <li>• APIs abertas para extensões comunitárias</li>
                <li>• Interface gráfica responsiva e intuitiva (React/TS)</li>
                <li>• Documentação técnica detalhada e governança clara</li>
              </ul>
            </div>

            <div className="dark-card rounded-xl p-8 border border-primary/20">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-4">LibrePhy Pro</h4>
              <p className="text-white/70 mb-4">
                Versão avançada com microsserviços especializados, otimizações de performance e ferramentas analíticas para pesquisa e educação superior.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Módulos completos de física quântica e relatividade</li>
                <li>• Simulações avançadas de fluidos e estruturas complexas</li>
                <li>• Aceleração por GPU/TPU e processamento paralelo otimizado</li>
                <li>• Ferramentas de análise matemática e visualização de dados avançada</li>
                <li>• Integração profunda com sistemas CAD/CAE e workflows científicos</li>
              </ul>
            </div>

            <div className="dark-card rounded-xl p-8">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold mb-4">LibrePhy Cloud</h4>
              <p className="text-white/70 mb-4">
                Plataforma SaaS distribuída para simulações de grande escala, colaboração científica global e gestão de dados massivos.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Computação distribuída para simulações em superescala</li>
                <li>• Ambientes colaborativos em tempo real para pesquisadores</li>
                <li>• Armazenamento seguro e análise de Big Data científico</li>
                <li>• Modelos de IA adaptativa para otimização de simulações e insights</li>
                <li>• APIs robustas para integração com ecossistemas de pesquisa globais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-32 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Nossa Stack Tecnológica: Moderna, Robusta e Estratégica</h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Adotamos uma filosofia multi-tecnologia estratégica, selecionando as ferramentas mais adequadas para cada
              desafio. Nosso stack é um conjunto coeso, projetado para performance, segurança, escalabilidade e
              inovação contínua, com Rust como pilar para sistemas críticos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Filosofia Tecnológica Orientada à Excelência</h3>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                Acreditamos firmemente que a escolha da tecnologia é um ato estratégico. Nosso stack é uma sinergia poderosa:
                Rust para o motor de simulação e backend crítico, oferecendo performance de nível de sistema com segurança
                de memória incomparável; Python para a agilidade da IA, ciência de dados e prototipagem rápida;
                TypeScript/React para interfaces de usuário ricas e responsivas; WebAssembly para portar a performance de
                Rust para o navegador; PostgreSQL para persistência de dados confiável; e Docker/Kubernetes para uma cultura
                DevOps eficiente e escalabilidade horizontal.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-primary" /> {/* Rust */}
                  <span className="text-white/80">Performance nativa e segurança robusta com Rust.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-primary" /> {/* Python */}
                  <span className="text-white/80">IA, Machine Learning e Ciência de Dados com Python.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-primary" /> {/* React/TS */}
                  <span className="text-white/80">Interfaces web modernas e interativas com React/Next.js (TypeScript).</span>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="h-6 w-6 text-primary" /> {/* WASM */}
                  <span className="text-white/80">Performance de Rust no navegador via WebAssembly.</span>
                </div>
              </div>
            </div>
            <div className="dark-card rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-6">Componentes Chave da Nossa Stack</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-orange-400" /> {/* Rust Icon */}
                    <span>Rust</span>
                  </div>
                  <span className="text-sm text-white/60">Motor de Simulação, Backend Crítico, Segurança</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Brain className="h-5 w-5 text-blue-400" /> {/* Python Icon */}
                    <span>Python</span>
                  </div>
                  <span className="text-sm text-white/60">IA, Ciência de Dados, Prototipagem</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-yellow-400" /> {/* TS/React Icon */}
                    <span>TypeScript/React</span>
                  </div>
                  <span className="text-sm text-white/60">Frontend Moderno, UI/UX Interativo</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Layers className="h-5 w-5 text-green-400" /> {/* WASM Icon */}
                    <span>WebAssembly</span>
                  </div>
                  <span className="text-sm text-white/60">Computação de Alta Performance na Web</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-purple-400" /> {/* PostgreSQL Icon */}
                    <span>PostgreSQL</span>
                  </div>
                  <span className="text-sm text-white/60">Banco de Dados Relacional Robusto</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Workflow className="h-5 w-5 text-primary" /> {/* Docker/K8s Icon */}
                    <span>Docker/Kubernetes</span>
                  </div>
                  <span className="text-sm text-white/60">DevOps, Escalabilidade, Orquestração</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="dark-card rounded-xl p-8 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Performance Otimizada</h4>
              <p className="text-white/70">
                Rust no núcleo para computação intensiva, complementado por Python para tarefas de IA e scripting, assegurando velocidade e eficiência.
              </p>
            </div>
            <div className="dark-card rounded-xl p-8 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Segurança by Design</h4>
              <p className="text-white/70">
                A segurança de memória de Rust e as práticas de desenvolvimento seguro permeiam nossa arquitetura, criando um ecossistema confiável.
              </p>
            </div>
            <div className="dark-card rounded-xl p-8 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Ecossistema Colaborativo</h4>
              <p className="text-white/70">
                Nossa stack diversificada e moderna atrai talentos de diferentes especialidades, fomentando uma comunidade rica e inovadora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision/Roadmap Section */}
      <section id="futuro" className="py-32 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Visão de Impacto: Roteiro Estratégico</h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Não estamos apenas desenvolvendo software; estamos arquitetando o futuro da educação tecnológica.
              Nossa visão é audaciosa, nosso plano é meticuloso, e nossa execução é impulsionada pela excelência técnica e
              um compromisso profissional com o impacto.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Nossa Trajetória de Crescimento Estratégico</h3>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Iniciamos com o LibrePhy como nossa plataforma fundamental, mas nossa ambição estratégica se estende
                a um ecossistema completo de ferramentas educacionais. Visualizamos um futuro onde o conhecimento é
                transmitido, absorvido e criado de maneiras inovadoras e profundamente eficazes.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Fase Fundação: Construindo o Alicerce Robusto</h5>
                    <p className="text-white/60 text-sm">
                      Desenvolvimento e lançamento do LibrePhy (Core e Pro) com motor em Rust. Estabelecimento de uma
                      comunidade open source com governança clara e profissional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/60 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Fase Expansão: Diversificação Inteligente do Portfólio</h5>
                    <p className="text-white/60 text-sm">
                      Lançamento de ferramentas CAD educacionais integradas, plataformas de aprendizado adaptativo
                      (IA-driven) e expansão do LibrePhy Cloud.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/40 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Fase Ecossistema: Plataforma Integrada de Inovação</h5>
                    <p className="text-white/60 text-sm">
                      Consolidação de um ecossistema LZRSoft completo: integração total com IA educacional avançada,
                      simuladores de robótica, e ferramentas de análise científica colaborativa em nuvem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark-card rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-6">Métricas de Impacto Projetadas (5 Anos)</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/60">Usuários Ativos na Plataforma</span>
                    <span className="text-primary font-semibold">100K+</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/60">Instituições Educacionais Parceiras</span>
                    <span className="text-primary font-semibold">500+</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-1/2"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/60">Contribuidores Ativos no Ecossistema Open Source</span>
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
              <h4 className="font-semibold text-sm">Ferramentas CAD/CAE</h4>
              <p className="text-xs text-white/60 mt-1">Modelagem e Análise 3D Educacional</p>
            </div>
            <div className="dark-card rounded-xl p-6 text-center">
              <Brain className="h-10 w-10 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm">IA Educacional Avançada</h4>
              <p className="text-xs text-white/60 mt-1">Aprendizado Personalizado e Preditivo</p>
            </div>
            <div className="dark-card rounded-xl p-6 text-center">
              <Cpu className="h-10 w-10 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm">Simuladores de Robótica e IoT</h4>
              <p className="text-xs text-white/60 mt-1">Programação Robótica Virtual e Conectada</p>
            </div>
            <div className="dark-card rounded-xl p-6 text-center">
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm">Análise Científica Colaborativa</h4>
              <p className="text-xs text-white/60 mt-1">Visualização de Dados e Pesquisa em Nuvem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LZRSoft Section */}
      <section id="diferenciais" className="py-32 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Por Que LZRSoft: A Escolha Estratégica</h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Em um cenário de soluções padronizadas, a LZRSoft se distingue por oferecer tecnologia brasileira de
              classe mundial, desenvolvida com paixão técnica, precisão de engenharia e um profissionalismo visionário
              para resolver desafios educacionais e científicos complexos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Nossos Diferenciais Estratégicos Fundamentais</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-2">Excelência Técnica em Engenharia de Software</h5>
                    <p className="text-white/60">
                      Nossa escolha estratégica por Rust para o núcleo de nossos sistemas, combinada com uma arquitetura
                      moderna de microsserviços, assegura software robusto, seguro, escalável e de altíssima performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-2">Compromisso Profissional com Open Source</h5>
                    <p className="text-white/60">
                      Adotamos transparência radical, governança clara para nossa comunidade ativa, e desenvolvimento
                      colaborativo que gera valor compartilhado e sustentável para todos os envolvidos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <TrendingUp className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-2">Inovação Contínua e Orientada a Resultados</h5>
                    <p className="text-white/60">
                      Estamos na vanguarda da tecnologia educacional, antecipando tendências e desenvolvendo soluções
                      que não apenas atendem, mas definem as necessidades futuras do setor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-2">Suporte Técnico e Comunitário Excepcional</h5>
                    <p className="text-white/60">
                      Equipe técnica dedicada e uma comunidade engajada e profissional garantem o sucesso de educadores,
                      estudantes e pesquisadores com nossas ferramentas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark-card rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-6">O Valor Estratégico que Entregamos</h4>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold mb-1">Otimização de Investimento Tecnológico</h5>
                  <p className="text-white/60 text-sm">
                    Elimine custos com licenças de software proprietário sem comprometer a qualidade, performance ou
                    segurança, adotando soluções open source de nível empresarial.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold mb-1">Aumento Exponencial de Produtividade</h5>
                  <p className="text-white/60 text-sm">
                    Ferramentas intuitivas e poderosas que aceleram o ciclo de aprendizado, a execução de projetos
                    complexos e a pesquisa científica.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold mb-1">Flexibilidade e Customização Profunda</h5>
                  <p className="text-white/60 text-sm">
                    Nossas soluções open source podem ser customizadas e adaptadas para atender precisamente às
                    necessidades específicas de sua instituição ou projeto.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold mb-1">Parceria Tecnológica para o Futuro</h5>
                  <p className="text-white/60 text-sm">
                    Adote uma tecnologia moderna que evolui continuamente, garantindo que suas capacidades
                    permaneçam na vanguarda da inovação educacional e científica.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="dark-card rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Junte-se à Vanguarda da Revolução Educacional Tecnológica</h3>
              <p className="text-lg text-white/70 mb-8">
                A LZRSoft é mais que uma desenvolvedora de software – somos seus parceiros estratégicos na transformação
                da educação brasileira. Ao escolher a LZRSoft, você investe em um futuro onde a tecnologia educacional é
                poderosa, acessível e desenvolvida com excelência profissional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/em-construcao" className="flex items-center">
                    Agendar Consulta Estratégica
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
                    Explorar Nossos Repositórios
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">O Arquiteto da Visão Estratégica</h2>
              <p className="text-xl text-white/70">
                Conheça Emanuel Lázaro, o fundador que combina entusiasmo técnico com uma visão profissional para
                redefinir o futuro da educação tecnológica no Brasil.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Emanuel Lázaro</h3>
                  <p className="text-primary text-lg mb-4">Fundador, Arquiteto de Software & Estrategista Chefe</p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Aos 19 anos, Emanuel é um desenvolvedor full stack e arquiteto de software com uma paixão contagiante
                    por tecnologia de ponta e seu potencial transformador na educação. Nascido em Sobral e criado em Mucambo,
                    Ceará, ele canaliza sua profunda expertise técnica e visão estratégica para enfrentar os desafios
                    educacionais brasileiros com soluções inovadoras e profissionalmente robustas.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Uma Jornada de Rigor Técnico e Propósito Visionário</h4>
                  <p className="text-white/70 leading-relaxed">
                    Estudante de Engenharia de Software na UNESA, Emanuel compreende que projetos de grande impacto exigem
                    não apenas brilhantismo técnico, mas também colaboração estratégica e governança profissional. Sua
                    experiência em desenvolvimento full stack e arquitetura de sistemas complexos, aliada à sua fervorosa
                    crença no potencial do open source e na performance de Rust, o motivou a fundar a LZRSoft em Mucambo,
                    com o objetivo de construir uma comunidade de desenvolvedores de elite, focada em transformar a educação
                    com profissionalismo e excelência.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Buscando Colaboradores para uma Missão Estratégica</h4>
                  <p className="text-white/70 leading-relaxed">
                    Emanuel acredita que os projetos mais ambiciosos são forjados pela união de mentes brilhantes e
                    comprometidas. Ele está ativamente buscando desenvolvedores (especialmente com experiência em Rust,
                    Python e sistemas distribuídos), designers UX/UI, e educadores visionários que compartilhem seu
                    entusiasmo técnico e seu compromisso profissional para democratizar a tecnologia educacional através
                    de código aberto de alta qualidade.
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
                    <div className="text-xs text-white/60 uppercase tracking-wider">Sede Estratégica</div>
                    <div className="text-sm font-medium">Mucambo, Ceará</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-xs text-white/60 uppercase tracking-wider">Foco</div>
                    <div className="text-sm font-medium">Open Source Profissional</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="dark-card rounded-2xl p-8 text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6 border border-primary/20">
                    <Code className="h-16 w-16 text-primary" /> {/* Rust logo implicitly here */}
                  </div>
                  <h4 className="font-semibold mb-4">Expertise Técnica & Interesses Estratégicos</h4>
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Desenvolvimento Full Stack (Rust, Python, TS)</div>
                    <div>• Arquitetura de Software Distribuído</div>
                    <div>• Tecnologias Open Source de Alta Performance</div>
                    <div>• Inovação Educacional Estratégica</div>
                    <div>• Liderança de Comunidades Técnicas</div>
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
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Pronto para Co-Criar o Futuro da Educação Tecnológica?</h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              A LZRSoft é mais que uma organização – é uma comunidade de profissionais e entusiastas da tecnologia,
              dedicados a democratizar a educação de ponta através de engenharia de software superior e colaboração
              estratégica. Se você compartilha nossa paixão por inovação técnica, impacto social e profissionalismo,
              queremos conectar com você.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg">
                <Link href="/em-construcao" className="flex items-center">
                  Iniciar Colaboração Estratégica
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
                  Contribuir com Código de Impacto
                </Link>
              </Button>
            </div>

            <p className="text-sm text-white/50">
              Junte-se a uma crescente rede de desenvolvedores, educadores e visionários que estão ativamente
              construindo o futuro conosco, com profissionalismo e entusiasmo técnico.
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
                Engenharia de software para a vanguarda da educação tecnológica, impulsionada por soluções open source
                inovadoras, seguras e performáticas.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/lzrsoft", label: "GitHub LZRSoft" },
                  { icon: Instagram, href: "https://instagram.com/lzrsoft_org", label: "Instagram LZRSoft" }, // Exemplo de link atualizado
                  { icon: Facebook, href: "https://facebook.com/lzrsoftofficial", label: "Facebook LZRSoft" }, // Exemplo de link atualizado
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soluções</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="#produtos" className="hover:text-white transition-colors">
                    LibrePhy Core (Rust Based)
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
                    Documentação Técnica Detalhada
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Organização</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="#sobre" className="hover:text-white transition-colors">
                    Nossa Estratégia
                  </Link>
                </li>
                <li>
                  <Link href="#futuro" className="hover:text-white transition-colors">
                    Visão de Impacto
                  </Link>
                </li>
                <li>
                  <Link href="/em-construcao" className="hover:text-white transition-colors">
                    Oportunidades de Colaboração
                  </Link>
                </li>
                <li>
                  <Link href="/em-construcao" className="hover:text-white transition-colors">
                    Media & Imprensa
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suporte & Comunidade</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="/em-construcao" className="hover:text-white transition-colors">
                    Central de Ajuda Profissional
                  </Link>
                </li>
                <li>
                  <Link href="/em-construcao" className="hover:text-white transition-colors">
                    Contato Estratégico
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/lzrsoft/community" className="hover:text-white transition-colors"> {/* Exemplo de link para comunidade */}
                    Fórum da Comunidade
                  </Link>
                </li>
                <li>
                  <Link href="/em-construcao" className="hover:text-white transition-colors">
                    Status da Plataforma
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} LZRSoft. Engenharia de Software Visionária. Feito com ❤️ e Rust no Brasil.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <Link href="/em-construcao" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/em-construcao" className="hover:text-white transition-colors">
                Termos de Serviço
              </Link>
              <Link href="/em-construcao" className="hover:text-white transition-colors">
                Uso de Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
