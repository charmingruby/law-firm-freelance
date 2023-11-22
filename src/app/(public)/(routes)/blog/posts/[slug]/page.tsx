import * as Container from '@/components/ui/container'
import * as CTA from '@/components/cta'
import { Text } from '@/components/ui/text'
import { Socials } from '@/components/cta/socials'
import { OtherPosts } from '@/app/(public)/(routes)/areas-de-atuacao/[slug]/components/other-posts'
import CardItem from './components/card-item'

interface PostPageProps {
  params: { slug: string }
}

export default function PostPage({ params }: PostPageProps) {
  return (
    <>
      {/* Hero */}
      <Container.Root className="hero-img flex items-center sm:pt-16 bg-no-repeat bg-center bg-fixed md:min-h-screen sm:text-left">
        <Container.Content>
          <div className="z-10 mt-16 sm:mt-0 w-full md:max-w-2xl flex flex-col justify-center ">
            {/* Title */}
            <h1 className="text-gray-50 font-semibold m-0 text-4xl md:text-4xl mb-6 break-words">
              {params.slug}
            </h1>

            <p className="text-gray-100 text-lg mb-16">
              Uma análise detalhada das garantias no contexto imobiliário sob as
              disposições do Marco Legal. Conheça seus direitos e as
              salvaguardas essenciais para transações seguras.
            </p>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Conteúdo */}
      <Container.Root border="borderBottom">
        <Container.Content>
          <div className="flex pt-4 gap-8">
            <div>
              Structured gripped tape invisible moulded cups for sauppor firm
              hold strong powermesh front liner sport detail. Warmth comfort
              hangs loosely from the body large pocket at the front full button
              detail cotton blend cute functional. Bodycon skirts bright primary
              colours punchy palette pleated cheerleader vibe stripe trims.
              Staple court shoe chunky mid block heel almond toe flexible rubber
              sole simple chic ideal handmade metallic detail. Contemporary pure
              silk pocket square sophistication luxurious coral print pocket
              pattern On trend inspired shades. Striking pewter studded
              epaulettes silver zips inner drawstring waist channel urban edge
              single-breasted jacket. Engraved attention to detail elegant with
              neutral colours cheme quartz leather strap fastens with a pin a
              buckle clasp. Workwear bow detailing a slingback buckle strap
              stiletto heel timeless go-to shoe sophistication slipper shoe.
              Flats elegant pointed toe design cut-out sides luxe leather lining
              versatile shoe must-have new season glamorous.
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p>Redes sociais</p>
              <div>
                <Socials flexColumn size></Socials>
              </div>
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Categorias */}
      <Container.Root border="borderBottom">
        <Container.Content>
          <div className="text-center w-full mb-8">
            <strong className="text-3xl">Categorias do post</strong>
          </div>
          <div className="flex gap-4 justify-center">
            <CardItem
              name="Direito Civil"
              url="/blog/categorias/direito-civil"
            ></CardItem>
            <CardItem
              name="Direito Civil"
              url="/blog/categorias/direito-civil"
            ></CardItem>
            <CardItem
              name="Direito Civil"
              url="/blog/categorias/direito-civil"
            ></CardItem>
            <CardItem
              name="Direito Civil"
              url="/blog/categorias/direito-civil"
            ></CardItem>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Veja também */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="text-center w-full mb-8">
            <strong className="text-3xl">Veja também</strong>
          </div>
          <OtherPosts />
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Converse Conosco Agora
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Pronto para resolver suas questões legais? Clique aqui para iniciar
            uma conversa e contar com a nossa experiência e comprometimento.
          </Text>
        </div>

        <CTA.ContactButtonGroup title="Entre em contato" url="/contato" />
      </CTA.Root>
    </>
  )
}
