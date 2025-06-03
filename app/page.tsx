import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  CheckCircle,
  TrendingUp,
  Building,
  Sparkles,
  Brain,
  Database,
  ExternalLink,
  Terminal,
  Monitor,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="#inicio" className="flex items-center gap-2 text-xl font-bold text-white">
              <LightningIcon className="h-6 w-6 text-primary" />
              LZRSoft
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="#sobre" className="text-sm text-gray-400 hover:text-white transition-colors">
                Sobre
              </Link>
              <Link href="#solucoes" className="text-sm text-gray-400 hover:text-white transition-colors">
                Soluções
              </Link>
              <Link href="#projetos-futuros" className="text-sm text-gray-400 hover:text-white transition-colors">
                Projetos Futuros
              </Link>
              <Link href="#tecnologia" className="text-sm text-gray-400 hover:text-white transition-colors">
                Tecnologia
              </Link>
              <Link href="#roadmap" className="text-sm text-gray-400 hover:text-white transition-colors">
                Roadmap
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="https://github.com/lzrsoft" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/em-construcao">
                <Button size="sm">Contato</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-8 text-primary border-primary/20 bg-primary/5">
              <Sparkles className="h-3 w-3 mr-2" />
              Inovação Open Source para Educação
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Engenharia de Simulação
              <br />
              para Educação de <span className="text-primary">Vanguarda</span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos soluções open source de alta performance para transformar a educação tecnológica no Brasil,
              combinando engenharia de software de precisão com colaboração estratégica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="px-8">
                <Link href="#sobre" className="flex items-center">
                  Conhecer Projeto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white hover:text-black"
              >
                <Link
                  href="https://github.com/lzrsoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Ver no GitHub
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-400">Open Source</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">🇧🇷</div>
                <div className="text-sm text-gray-400">Feito no Brasil</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">🚀</div>
                <div className="text-sm text-gray-400">Alta Performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              Nossa Missão
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Democratizando Tecnologia Educacional</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Combinamos engenharia de software de precisão com colaboração open source para criar ferramentas
              educacionais seguras, performáticas e inovadoras.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Filosofia de Inovação</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A LZRSoft visa unificar desenvolvedores, educadores e estrategistas para democratizar o acesso a
                ferramentas de simulação e aprendizado de alta performance, com governança transparente em projetos open
                source.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nossa colaboração estratégica em código aberto, fundamentada em engenharia de software disciplinada e
                tecnologias de ponta, permite-nos criar soluções adaptadas às necessidades educacionais brasileiras e
                competitivas globalmente.
              </p>
            </div>
            <Card className="p-8 bg-white/5 border-white/10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Missão</h4>
                    <p className="text-sm text-gray-300">
                      Democratizar tecnologia educacional avançada com soluções robustas e performáticas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Visão</h4>
                    <p className="text-sm text-gray-300">
                      Ser referência em inovação educacional, impulsionada por excelência técnica e colaboração.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Valores</h4>
                    <p className="text-sm text-gray-300">
                      Transparência, colaboração, excelência técnica, impacto sustentável.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-white/5 border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Inovação Contínua</h4>
              <p className="text-gray-300 text-sm">
                Desenvolvemos soluções que antecipam e moldam as futuras demandas da educação tecnológica.
              </p>
            </Card>
            <Card className="text-center p-8 bg-white/5 border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Comunidade Colaborativa</h4>
              <p className="text-gray-300 text-sm">
                Fomentamos um ecossistema onde desenvolvedores e educadores co-criam soluções de impacto.
              </p>
            </Card>
            <Card className="text-center p-8 bg-white/5 border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Impacto Global</h4>
              <p className="text-gray-300 text-sm">
                Nossa tecnologia, construída com rigor, visa transformar a educação em escala mundial.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              Nossas Soluções
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              LibrePhy: Simulação Física de Próxima Geração
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Uma plataforma modular de alta performance para simulação física educacional, abrangendo domínios
              complexos com matemática avançada e arquitetura distribuída.
            </p>
          </div>

          {/* LibrePhy Project */}
          <div className="mb-12">
            <Card className="p-8 lg:p-12 bg-white/5 border-white/10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                    <BookOpen className="h-3 w-3 mr-2" />
                    Plataforma Educacional
                  </Badge>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-white">
                    LibrePhy: Ecossistema de Simulação Física
                  </h3>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    LibrePhy é uma plataforma educacional open source projetada para democratizar o acesso a simulações
                    físicas avançadas. Desenvolvida inteiramente em Rust para máxima performance e segurança, oferece um
                    ambiente completo para ensino e pesquisa em física computacional, desde conceitos básicos até
                    simulações complexas de múltiplos domínios físicos.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-white mb-1">Full-Stack Rust Architecture</h5>
                        <p className="text-sm text-gray-300">
                          Sistema completo desenvolvido em Rust, desde o backend de alta performance até o frontend
                          moderno utilizando frameworks como Yew, Leptos ou Tauri para interfaces nativas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-white mb-1">Interface Educacional Intuitiva</h5>
                        <p className="text-sm text-gray-300">
                          Frontend desenvolvido com frameworks Rust modernos, oferecendo componentes visuais interativos
                          para configuração de experimentos e visualização de resultados em tempo real
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-white mb-1">Extensibilidade via Plugin System</h5>
                        <p className="text-sm text-gray-300">
                          API robusta em Rust para desenvolvimento de plugins personalizados, permitindo à comunidade
                          acadêmica contribuir com novos modelos físicos e algoritmos de simulação
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button>
                      <Link href="/em-construcao" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Acessar Site
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">
                      <Link
                        href="https://github.com/lzrsoft/librephy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Ver no GitHub
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Globe className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2 text-white">Plataforma Completa</h4>
                      <p className="text-sm text-gray-300 mb-4">Ecossistema integrado para educação física</p>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Stack</span>
                          <span className="font-medium text-white">Full Rust</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Frontend</span>
                          <span className="font-medium text-white">Yew/Leptos/Tauri</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Licença</span>
                          <span className="font-medium text-white">Apache 2.0</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-white/5 border-white/10">
                    <h4 className="font-semibold mb-4 text-white">Domínios Físicos Suportados</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-300">Mecânica Clássica</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-300">Eletromagnetismo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-300">Termodinâmica</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-300">Física Quântica</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-300">Relatividade</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-300">Astrofísica</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </div>

          {/* LibrePhy Engine */}
          <div className="mb-16">
            <Card className="p-8 lg:p-12 bg-white/5 border-white/10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">
                    <Cpu className="h-3 w-3 mr-2" />
                    Motor Computacional
                  </Badge>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-white">
                    LibrePhy Engine: Núcleo de Alta Performance
                  </h3>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    O LibrePhy Engine é o núcleo computacional da plataforma, desenvolvido em Rust para garantir
                    performance de nível de sistema com segurança de memória. Implementa algoritmos numéricos otimizados
                    para resolução de equações diferenciais, álgebra linear densa e esparsa, e computação paralela
                    massiva utilizando SIMD e aceleração por GPU via CUDA/OpenCL.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-white mb-1">Solver Numérico Otimizado</h5>
                        <p className="text-sm text-gray-300">
                          Implementação de métodos Runge-Kutta adaptativos, solucionadores implícitos para sistemas
                          stiff e algoritmos de integração temporal de alta ordem
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-white mb-1">Paralelização Massiva</h5>
                        <p className="text-sm text-gray-300">
                          Utilização de Rayon para paralelismo em CPU, integração com CUDA/ROCm para aceleração GPU e
                          suporte a computação distribuída via MPI
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-white mb-1">Memory-Safe Architecture</h5>
                        <p className="text-sm text-gray-300">
                          Arquitetura zero-copy com gerenciamento automático de memória, prevenção de data races e
                          garantias de thread safety em tempo de compilação
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button>
                      <Link href="/em-construcao" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Documentação Técnica
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">
                      <Link
                        href="https://github.com/lzrsoft/librephy-engine"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Engine no GitHub
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                        <Code className="h-8 w-8 text-orange-400" />
                      </div>
                      <h4 className="text-lg font-bold mb-2 text-white">LibrePhy Engine</h4>
                      <p className="text-sm text-gray-300 mb-4">Motor de simulação de alta performance</p>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Linguagem</span>
                          <span className="font-medium text-white">Rust</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Paralelismo</span>
                          <span className="font-medium text-white">CPU + GPU</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Precisão</span>
                          <span className="font-medium text-white">IEEE 754</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-white/5 border-white/10">
                    <h4 className="font-semibold mb-4 text-white">Bibliotecas Integradas</h4>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300">BLAS/LAPACK (Intel MKL)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300">FFTW3 (Transformadas)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300">PETSc (Sistemas Lineares)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300">SUNDIALS (EDOs/EDPs)</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </div>

          {/* LibrePhy Ecosystem */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-white">Ecossistema LibrePhy</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Uma família completa de soluções para diferentes necessidades educacionais e científicas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white/5 border-white/10">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">LibrePhy Core</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Versão open source com motor de simulação e módulos essenciais para física fundamental.
              </p>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>• Motor de simulação de alta performance</li>
                <li>• Módulos para física clássica</li>
                <li>• APIs abertas para extensibilidade</li>
                <li>• Interface gráfica intuitiva</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white/5 border-2 border-primary/20 relative">
              <Badge className="absolute -top-2 left-4 bg-primary text-white">Destaque</Badge>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">LibrePhy Pro</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Versão estendida com microsserviços especializados e otimizações avançadas.
              </p>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>• Módulos para física quântica e relatividade</li>
                <li>• Simulações complexas e multifísicas</li>
                <li>• Aceleração GPU/TPU</li>
                <li>• Ferramentas avançadas de análise</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white/5 border-white/10">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">LibrePhy Cloud</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Plataforma SaaS para simulações de alta demanda e colaboração distribuída.
              </p>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>• Infraestrutura distribuída sob demanda</li>
                <li>• Ambientes colaborativos em tempo real</li>
                <li>• Big Data científico</li>
                <li>• Modelos de IA para otimização</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Projects Section */}
      <section id="projetos-futuros" className="py-24 bg-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              Projetos Futuros
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Expandindo o Ecossistema Educacional</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Nossa visão vai além do LibrePhy. Estamos desenvolvendo um ecossistema completo de ferramentas
              educacionais que transformarão a forma como a tecnologia é ensinada e aprendida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* EduArch Linux */}
            <Card className="p-8 bg-white/5 border-white/10 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="text-xs border-purple-500/20 text-purple-400 bg-purple-500/5">
                  Em Planejamento
                </Badge>
              </div>
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <Terminal className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-white">EduArch Linux</h4>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Distribuição Linux baseada em Arch Linux, otimizada para educação tecnológica. Inclui ferramentas
                pré-configuradas para desenvolvimento, simulação científica e aprendizado de programação.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Ambiente de desenvolvimento completo</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">LibrePhy pré-instalado e configurado</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Interface educacional personalizada</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Repositório de software educacional</span>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                <strong>Base:</strong> Arch Linux • <strong>Desktop:</strong> GNOME/KDE Plasma/XFCE •{" "}
                <strong>Kernel:</strong> Linux-zen
              </div>
            </Card>

            {/* LZR IDE */}
            <Card className="p-8 bg-white/5 border-white/10 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="text-xs border-blue-500/20 text-blue-400 bg-blue-500/5">
                  Em Planejamento
                </Badge>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-white">LZR IDE</h4>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Ambiente de desenvolvimento integrado especializado em educação, com suporte nativo para simulações
                físicas, visualização de dados científicos e colaboração em tempo real.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Editor com syntax highlighting científico</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Debugger visual para simulações</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Integração com LibrePhy Engine</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Colaboração multi-usuário</span>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                <strong>Base:</strong> Electron/Tauri • <strong>Linguagens:</strong> Rust, Python, C++ •{" "}
                <strong>Plugins:</strong> LSP
              </div>
            </Card>

            {/* LZR Cloud Platform */}
            <Card className="p-8 bg-white/5 border-white/10 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="text-xs border-green-500/20 text-green-400 bg-green-500/5">
                  Em Planejamento
                </Badge>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-white">LZR Cloud Platform</h4>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Plataforma de computação em nuvem especializada em cargas de trabalho educacionais e científicas, com
                orquestração automática de recursos e billing otimizado para instituições.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Auto-scaling para simulações</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">GPU clusters sob demanda</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Jupyter notebooks integrados</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Pricing educacional</span>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                <strong>Infra:</strong> Kubernetes • <strong>Compute:</strong> NVIDIA H100 • <strong>Storage:</strong>{" "}
                Ceph
              </div>
            </Card>

            {/* LZR CAD */}
            <Card className="p-8 bg-white/5 border-white/10 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="text-xs border-orange-500/20 text-orange-400 bg-orange-500/5">
                  Em Planejamento
                </Badge>
              </div>
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6">
                <Building className="h-6 w-6 text-orange-400" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-white">LZR CAD</h4>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Software CAD educacional com foco em aprendizado de engenharia mecânica, integração com simulações FEA e
                interface simplificada para estudantes.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Modelagem paramétrica</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Simulação FEA integrada</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Tutoriais interativos</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Exportação para LibrePhy</span>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                <strong>Engine:</strong> OpenCASCADE • <strong>Render:</strong> Vulkan • <strong>UI:</strong> Qt/Rust
              </div>
            </Card>

            {/* LZR Learn */}
            <Card className="p-8 bg-white/5 border-white/10 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="text-xs border-pink-500/20 text-pink-400 bg-pink-500/5">
                  Em Planejamento
                </Badge>
              </div>
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-pink-400" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-white">LZR Learn</h4>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Plataforma de aprendizado adaptativo com IA, que personaliza o ensino de física e matemática baseado no
                progresso individual do estudante.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">IA para personalização</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Gamificação educacional</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Analytics de aprendizado</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Integração com simulações</span>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                <strong>IA:</strong> PyTorch • <strong>Backend:</strong> FastAPI • <strong>Frontend:</strong> Next.js
              </div>
            </Card>

            {/* LZR Mobile */}
            <Card className="p-8 bg-white/5 border-white/10 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="text-xs border-cyan-500/20 text-cyan-400 bg-cyan-500/5">
                  Em Planejamento
                </Badge>
              </div>
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6">
                <Monitor className="h-6 w-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-white">LZR Mobile</h4>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Aplicativo móvel para visualização de simulações, controle remoto de experimentos e acesso a conteúdo
                educacional offline.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Visualização 3D otimizada</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Controle remoto de simulações</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Modo offline</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">AR para visualização</span>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                <strong>Framework:</strong> Flutter • <strong>3D:</strong> Filament • <strong>AR:</strong> ARCore/ARKit
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Estes projetos representam nossa visão de longo prazo para criar um ecossistema completo de ferramentas
              educacionais. O desenvolvimento seguirá nossa filosofia open source e será orientado pelas necessidades da
              comunidade educacional.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              Stack Tecnológica
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Performance e Inovação</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Selecionamos as melhores tecnologias para cada desafio, priorizando performance, segurança e
              escalabilidade.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Filosofia Multi-Tecnologia</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nossa stack é uma sinergia estratégica: Rust para performance de sistema com segurança de memória;
                Python para IA e ciência de dados; TypeScript/React para interfaces modernas; WebAssembly para
                performance no navegador; PostgreSQL para persistência confiável.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">Performance nativa com Rust</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">IA e Machine Learning com Python</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">Interfaces modernas com React/Next.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">Performance web com WebAssembly</span>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-white/5 border-white/10">
              <h4 className="text-lg font-semibold mb-6 text-white">Tecnologias Principais</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center">
                      <Code className="h-4 w-4 text-orange-400" />
                    </div>
                    <span className="font-medium text-white">Rust</span>
                  </div>
                  <span className="text-xs text-gray-400">Sistemas Críticos</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center">
                      <Brain className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="font-medium text-white">Python</span>
                  </div>
                  <span className="text-xs text-gray-400">IA & Ciência de Dados</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-yellow-500/10 flex items-center justify-center">
                      <Globe className="h-4 w-4 text-yellow-400" />
                    </div>
                    <span className="font-medium text-white">TypeScript</span>
                  </div>
                  <span className="text-xs text-gray-400">Frontend Moderno</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center">
                      <Layers className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="font-medium text-white">WebAssembly</span>
                  </div>
                  <span className="text-xs text-gray-400">Performance Web</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center">
                      <Database className="h-4 w-4 text-purple-400" />
                    </div>
                    <span className="font-medium text-white">PostgreSQL</span>
                  </div>
                  <span className="text-xs text-gray-400">Banco de Dados</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-white/5 border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Performance Otimizada</h4>
              <p className="text-gray-300 text-sm">
                Tecnologias de alta performance no núcleo para computação intensiva e eficiência máxima.
              </p>
            </Card>
            <Card className="text-center p-8 bg-white/5 border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Segurança by Design</h4>
              <p className="text-gray-300 text-sm">
                Foco em segurança de memória e práticas de desenvolvimento seguro em toda arquitetura.
              </p>
            </Card>
            <Card className="text-center p-8 bg-white/5 border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Ecossistema Colaborativo</h4>
              <p className="text-gray-300 text-sm">
                Stack diversificada que atrai talentos e fomenta uma comunidade rica e inovadora.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 bg-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              Roadmap
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Moldando o Futuro da Educação</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Nossa visão é audaciosa e nosso plano é meticuloso. Estamos arquitetando o futuro da educação tecnológica
              com execução impulsionada pela excelência técnica.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Trajetória de Crescimento</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-white">Fase Fundação</h5>
                    <p className="text-gray-300 text-sm">
                      Desenvolvimento e lançamento de LibrePhy (Core e Pro) com motor de alta performance.
                      Estabelecimento de comunidade open source profissional.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/60 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-white">Fase Expansão</h5>
                    <p className="text-gray-300 text-sm">
                      Lançamento de ferramentas CAD educacionais, plataformas de aprendizado adaptativo e expansão de
                      LibrePhy Cloud.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/40 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-white">Fase Ecossistema</h5>
                    <p className="text-gray-300 text-sm">
                      Consolidação de ecossistema completo com IA educacional avançada, simuladores de robótica e
                      análise científica colaborativa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white/5 border-white/10">
              <h4 className="text-lg font-semibold mb-6 text-white">Métricas de Impacto (5 Anos)</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">Usuários Ativos</span>
                    <span className="font-semibold text-primary">100K+</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">Instituições Parceiras</span>
                    <span className="font-semibold text-primary">500+</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">Contribuidores Open Source</span>
                    <span className="font-semibold text-primary">1K+</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-white/5 border-white/10">
              <Building className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm text-white mb-1">Ferramentas CAD/CAE</h4>
              <p className="text-xs text-gray-400">Modelagem 3D Educacional</p>
            </Card>
            <Card className="p-6 text-center bg-white/5 border-white/10">
              <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm text-white mb-1">IA Educacional</h4>
              <p className="text-xs text-gray-400">Aprendizado Personalizado</p>
            </Card>
            <Card className="p-6 text-center bg-white/5 border-white/10">
              <Cpu className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm text-white mb-1">Simuladores IoT</h4>
              <p className="text-xs text-gray-400">Robótica Virtual</p>
            </Card>
            <Card className="p-6 text-center bg-white/5 border-white/10">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm text-white mb-1">Análise Científica</h4>
              <p className="text-xs text-gray-400">Pesquisa Colaborativa</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
                Liderança
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Emanuel Lázaro</h2>
              <p className="text-lg text-gray-300">
                Fundador visionário que combina expertise técnica com paixão por transformar a educação tecnológica no
                Brasil.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Fundador & Arquiteto de Software</h3>
                  <p className="text-primary mb-4">19 anos • Desenvolvedor Full Stack • Estrategista Chefe</p>
                  <p className="text-gray-300 leading-relaxed">
                    Nascido em Sobral e criado em Mucambo, Ceará, Emanuel canaliza sua expertise técnica e visão
                    estratégica para enfrentar os desafios educacionais brasileiros com soluções inovadoras e
                    profissionalmente robustas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-white">Jornada de Propósito</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Estudante de Engenharia de Software na UNESA, Emanuel compreende que projetos de grande impacto
                    exigem colaboração estratégica e governança profissional. Sua experiência em desenvolvimento e
                    arquitetura de sistemas o motivou a fundar a LZRSoft.
                  </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Card className="text-center p-4 bg-white/5 border-white/10">
                    <GraduationCap className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Formação</div>
                    <div className="text-sm font-medium text-white">Eng. Software - UNESA</div>
                  </Card>
                  <Card className="text-center p-4 bg-white/5 border-white/10">
                    <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Localização</div>
                    <div className="text-sm font-medium text-white">Mucambo, CE</div>
                  </Card>
                  <Card className="text-center p-4 bg-white/5 border-white/10">
                    <Users className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Foco</div>
                    <div className="text-sm font-medium text-white">Open Source</div>
                  </Card>
                </div>
              </div>
              <div className="flex justify-center">
                <Card className="p-8 text-center bg-white/5 border-white/10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6 border border-primary/20">
                    <Code className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-4 text-white">Expertise Técnica</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Full Stack Development</div>
                    <div>• Arquitetura de Software</div>
                    <div>• Tecnologias Open Source</div>
                    <div>• Inovação Educacional</div>
                    <div>• Liderança de Comunidades</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Conecte-se e Colabore</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Junte-se a uma comunidade de profissionais dedicados a democratizar a educação de ponta através de
              engenharia de software superior e colaboração estratégica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="px-8">
                <Link href="/em-construcao" className="flex items-center">
                  Iniciar Colaboração
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white hover:text-black"
              >
                <Link
                  href="https://github.com/lzrsoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Contribuir no GitHub
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              Construindo o futuro da educação tecnológica com profissionalismo e inovação
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LightningIcon className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-white">LZRSoft</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Engenharia de software para a vanguarda da educação tecnológica, impulsionada por soluções open source
                inovadoras.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/lzrsoft", label: "GitHub" },
                  { icon: Instagram, href: "https://instagram.com/lzrsoft_org", label: "Instagram" },
                  { icon: Facebook, href: "https://facebook.com/lzrsoftofficial", label: "Facebook" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <social.icon className="h-4 w-4" />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Soluções</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#solucoes" className="hover:text-white transition-colors">
                    LibrePhy Core
                  </Link>
                </li>
                <li>
                  <Link href="#solucoes" className="hover:text-white transition-colors">
                    LibrePhy Pro
                  </Link>
                </li>
                <li>
                  <Link href="#solucoes" className="hover:text-white transition-colors">
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
              <h4 className="font-semibold mb-4 text-white">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#sobre" className="hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#roadmap" className="hover:text-white transition-colors">
                    Roadmap
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
              <h4 className="font-semibold mb-4 text-white">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
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
                  <Link href="https://github.com/lzrsoft/community" className="hover:text-white transition-colors">
                    Comunidade
                  </Link>
                </li>
                <li>
                  <Link href="/em-construcao" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} LZRSoft. Desenvolvido com ❤️ no Brasil.</p>
            <div className="flex gap-6 text-sm text-gray-400">
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
