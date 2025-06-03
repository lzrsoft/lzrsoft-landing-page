import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LightningIcon } from "@/components/lightning-icon"
import { Construction, ArrowLeft, Heart, Sparkles, Rocket, Code, Zap } from "lucide-react"

export default function EmConstrucaoPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <LightningIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LZRSoft</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Card className="p-8 md:p-12 bg-white/5 border-white/10 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>

              <CardHeader className="space-y-6 relative z-10">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                  <Construction className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                    <Sparkles className="h-4 w-4" />
                    Em Desenvolvimento
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Página em Construção
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-8 relative z-10">
                <p className="text-gray-300 md:text-lg max-w-2xl mx-auto leading-relaxed">
                  Estamos trabalhando com dedicação para trazer esta funcionalidade para você! Nossa equipe está
                  desenvolvendo uma experiência excepcional que estará disponível em breve.
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <Rocket className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">Em Desenvolvimento</h3>
                    <p className="text-sm text-gray-400">Criando algo incrível</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <Code className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">Open Source</h3>
                    <p className="text-sm text-gray-400">Transparência total</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">Alta Performance</h3>
                    <p className="text-sm text-gray-400">Tecnologia de ponta</p>
                  </div>
                </div>

                <div className="text-center p-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                  <Heart className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="text-sm text-gray-300 mb-2">
                    <strong className="text-white">🚀 Novidade em breve:</strong> Esta funcionalidade estará disponível
                    nas próximas atualizações
                  </p>
                  <p className="text-xs text-gray-400">
                    💝 Desenvolvida com amor pela equipe LZRSoft • 🔧{" "}
                    <Link
                      href="https://github.com/lzrsoft"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Acompanhe nosso progresso no GitHub
                    </Link>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <Button asChild className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    <Link href="/" className="flex items-center justify-center">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Voltar ao Início
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-white/20 text-white hover:bg-white hover:text-black w-full sm:w-auto"
                  >
                    <Link
                      href="https://github.com/lzrsoft"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Acompanhar no GitHub
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <LightningIcon className="h-5 w-5 text-primary" />
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} LZRSoft. Desenvolvido com ❤️ no Brasil.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
