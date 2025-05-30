import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LightningIcon } from "@/components/lightning-icon"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Construction, ArrowLeft, Heart } from "lucide-react"

export default function EmConstrucaoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity animated-hover">
            <LightningIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LZRSoft</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="text-center p-8 md:p-12">
              <CardHeader className="space-y-6">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Construction className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl md:text-3xl font-bold">Página em Construção</CardTitle>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    <Heart className="h-4 w-4" />
                    Feito com carinho
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                  Estamos trabalhando com muito carinho para trazer esta funcionalidade para você! Nossa equipe está
                  dedicada em criar a melhor experiência possível.
                </p>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    🚀 Esta página estará disponível em breve
                    <br />💝 Desenvolvida com amor pela equipe LZRSoft
                    <br />🔧 Fique ligado nas nossas atualizações
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button asChild className="animated-hover">
                    <Link href="/">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Voltar ao Início
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="animated-hover">
                    <Link href="https://github.com/lzrsoft" target="_blank" rel="noopener noreferrer">
                      Acompanhar no GitHub
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <LightningIcon className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} LZRSoft. Feito com ❤️ no Brasil.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
