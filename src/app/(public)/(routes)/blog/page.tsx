import * as Container from '@/components/ui/container'
import * as CTA from '@/components/cta'
import { Button } from '@/components/ui/button'
import { PageTitle } from '@/components/page-title'
import { Text } from '@/components/ui/text'
import { generateStaticSeo } from '@/components/seo/static'
import { RecentPostsList } from './components/recent-posts-list'
import { FeaturedCategories } from './components/featured-categories'
import { SocialsHeader } from './components/socials-header'
import { PostsWithTabs } from './components/posts-with-tabs'

export const metadata = generateStaticSeo({
  rawTitle: 'Blog',
  description: '',
})

export default function Blog() {
  return (
    <>
      {/* Header */}
      <Container.Root className="md:pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col text-left md:text-center items-start md:items-center gap-6">
          <h2 className="text-white font-bold text-5xl">Blog</h2>
          <span className="text-gray-200 text-xl">
            Veja nossa qualidade atraves dos nossos clientes
          </span>
        </Container.Content>
      </Container.Root>

      {/* Most recents */}
      <Container.Root backgroundColor="white">
        <Container.Content className="flex flex-col items-center gap-8">
          <SocialsHeader />

          <RecentPostsList />
          <Button color="outline">Carregar mais</Button>
        </Container.Content>
      </Container.Root>

      {/* Cover */}
      <Container.Root backgroundColor="white">
        <Container.Content>cover image</Container.Content>
      </Container.Root>

      {/* Categories */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="space-y-4 mb-12">
            <PageTitle title="Áreas em destaque" />
          </div>

          <FeaturedCategories />
        </Container.Content>
      </Container.Root>

      {/* Tabs navigation */}

      <Container.Content>
        <PostsWithTabs />
      </Container.Content>

      {/* CTA */}
      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Conheça as áreas que trabalhamos
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Do direito empresarial à resolução de conflitos, abrangemos uma
            variedade de áreas jurídicas para atender às suas necessidades.
            Descubra como nossa expertise pode ser a chave para o sucesso dos
            seus casos. Clique para explorar nossas principais áreas de atuação.
          </Text>
        </div>

        <CTA.ContactButtonGroup
          title="Conheça nossa área de trablalho"
          url="/areas-de-atuacao"
        />
      </CTA.Root>
    </>
  )
}
