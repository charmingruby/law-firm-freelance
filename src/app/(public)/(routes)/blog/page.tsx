import * as Container from '@/components/ui/container'
import * as CTA from '@/components/cta'
import exampleImage from '@/assets/images/lawyers.png'
import { Box } from '@/components/ui/box'
import Image from 'next/image'
import exampleUser from '@/assets/images/lawyer.jpg'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageTitle } from '@/components/page-title'
import { Text } from '@/components/ui/text'
import { generateStaticSeo } from '@/components/seo/static'

export const metadata = generateStaticSeo({
  rawTitle: 'Blog',
  description: '',
})

export default function Blog() {
  const exampleDate = new Date().toDateString()

  return (
    <>
      <Container.Root className="pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col text-left md:text-center items-start md:items-center gap-6">
          <h2 className="text-white font-bold text-5xl">Blog</h2>
          <span className="text-gray-200 text-xl">
            Veja nossa qualidade atraves dos nossos clientes
          </span>
        </Container.Content>
      </Container.Root>

      {/* Most recents */}
      <Container.Root backgroundColor="white">
        <Container.Content className="pt-24 flex flex-col items-center gap-8">
          <div className="grid grid-cols-3 gap-8">
            <Box className="p-0">
              <div className="relative">
                <div className="absolute h-full w-full bg-gray-900 rounded-t-sm opacity-40" />
                <Image
                  src={exampleImage}
                  alt="Foto de exemplo"
                  className="rounded-t-sm"
                />
                <div className="absolute top-0 p-4">
                  <div className="p-2 border border-gray-50 text-gray-50 font-medium">
                    Direito civil
                  </div>
                </div>
              </div>

              <div className="px-6 py-3">
                {/* Title */}
                <strong className="text-2xl block mb-4">
                  Novidades na advocacia
                </strong>

                {/* Details */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={exampleUser}
                    alt="Foto de exemplo"
                    className="rounded-full h-8 w-8"
                  />

                  <strong className="font-medium">Paulo Renato</strong>

                  <div className="h-px flex-1 bg-gray-200" />

                  <small className="text-gray-400 text-xs">{exampleDate}</small>
                </div>

                {/* Excerpt */}
                <div className="mb-8">
                  <p className="text-sm text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dicta magnam error eos, rem amet aperiam. Nulla nostrum
                    voluptate, praesentium possimus ullam saepe asperiores
                    similique at deserunt, earum explicabo laborum corrupti?
                  </p>
                </div>

                <Link
                  prefetch={false}
                  href="/"
                  className="flex items-center gap-1"
                >
                  <span className="font-medium text-sm">Ver post</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Box>{' '}
            <Box className="p-0">
              <div className="relative">
                <div className="absolute h-full w-full bg-gray-900 rounded-t-sm opacity-40" />
                <Image
                  src={exampleImage}
                  alt="Foto de exemplo"
                  className="rounded-t-sm"
                />
                <div className="absolute top-0 p-4">
                  <div className="p-2 border border-gray-50 text-gray-50 font-medium">
                    Direito civil
                  </div>
                </div>
              </div>

              <div className="px-6 py-3">
                {/* Title */}
                <strong className="text-2xl block mb-4">
                  Novidades na advocacia
                </strong>

                {/* Details */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={exampleUser}
                    alt="Foto de exemplo"
                    className="rounded-full h-8 w-8"
                  />

                  <strong className="font-medium">Paulo Renato</strong>

                  <div className="h-px flex-1 bg-gray-200" />

                  <small className="text-gray-400 text-xs">{exampleDate}</small>
                </div>

                {/* Excerpt */}
                <div className="mb-8">
                  <p className="text-sm text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dicta magnam error eos, rem amet aperiam. Nulla nostrum
                    voluptate, praesentium possimus ullam saepe asperiores
                    similique at deserunt, earum explicabo laborum corrupti?
                  </p>
                </div>

                <Link
                  prefetch={false}
                  href="/"
                  className="flex items-center gap-1"
                >
                  <span className="font-medium text-sm">Ver post</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Box>{' '}
            <Box className="p-0">
              <div className="relative">
                <div className="absolute h-full w-full bg-gray-900 rounded-t-sm opacity-40" />
                <Image
                  src={exampleImage}
                  alt="Foto de exemplo"
                  className="rounded-t-sm"
                />
                <div className="absolute top-0 p-4">
                  <div className="p-2 border border-gray-50 text-gray-50 font-medium">
                    Direito civil
                  </div>
                </div>
              </div>

              <div className="px-6 py-3">
                {/* Title */}
                <strong className="text-2xl block mb-4">
                  Novidades na advocacia
                </strong>

                {/* Details */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={exampleUser}
                    alt="Foto de exemplo"
                    className="rounded-full h-8 w-8"
                  />

                  <strong className="font-medium">Paulo Renato</strong>

                  <div className="h-px flex-1 bg-gray-200" />

                  <small className="text-gray-400 text-xs">{exampleDate}</small>
                </div>

                {/* Excerpt */}
                <div className="mb-8">
                  <p className="text-sm text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dicta magnam error eos, rem amet aperiam. Nulla nostrum
                    voluptate, praesentium possimus ullam saepe asperiores
                    similique at deserunt, earum explicabo laborum corrupti?
                  </p>
                </div>

                <Link
                  prefetch={false}
                  href="/"
                  className="flex items-center gap-1"
                >
                  <span className="font-medium text-sm">Ver post</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Box>{' '}
            <Box className="p-0">
              <div className="relative">
                <div className="absolute h-full w-full bg-gray-900 rounded-t-sm opacity-40" />
                <Image
                  src={exampleImage}
                  alt="Foto de exemplo"
                  className="rounded-t-sm"
                />
                <div className="absolute top-0 p-4">
                  <div className="p-2 border border-gray-50 text-gray-50 font-medium">
                    Direito civil
                  </div>
                </div>
              </div>

              <div className="px-6 py-3">
                {/* Title */}
                <strong className="text-2xl block mb-4">
                  Novidades na advocacia
                </strong>

                {/* Details */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={exampleUser}
                    alt="Foto de exemplo"
                    className="rounded-full h-8 w-8"
                  />

                  <strong className="font-medium">Paulo Renato</strong>

                  <div className="h-px flex-1 bg-gray-200" />

                  <small className="text-gray-400 text-xs">{exampleDate}</small>
                </div>

                {/* Excerpt */}
                <div className="mb-8">
                  <p className="text-sm text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dicta magnam error eos, rem amet aperiam. Nulla nostrum
                    voluptate, praesentium possimus ullam saepe asperiores
                    similique at deserunt, earum explicabo laborum corrupti?
                  </p>
                </div>

                <Link
                  prefetch={false}
                  href="/"
                  className="flex items-center gap-1"
                >
                  <span className="font-medium text-sm">Ver post</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Box>{' '}
            <Box className="p-0">
              <div className="relative">
                <div className="absolute h-full w-full bg-gray-900 rounded-t-sm opacity-40" />
                <Image
                  src={exampleImage}
                  alt="Foto de exemplo"
                  className="rounded-t-sm"
                />
                <div className="absolute top-0 p-4">
                  <div className="p-2 border border-gray-50 text-gray-50 font-medium">
                    Direito civil
                  </div>
                </div>
              </div>

              <div className="px-6 py-3">
                {/* Title */}
                <strong className="text-2xl block mb-4">
                  Novidades na advocacia
                </strong>

                {/* Details */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={exampleUser}
                    alt="Foto de exemplo"
                    className="rounded-full h-8 w-8"
                  />

                  <strong className="font-medium">Paulo Renato</strong>

                  <div className="h-px flex-1 bg-gray-200" />

                  <small className="text-gray-400 text-xs">{exampleDate}</small>
                </div>

                {/* Excerpt */}
                <div className="mb-8">
                  <p className="text-sm text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dicta magnam error eos, rem amet aperiam. Nulla nostrum
                    voluptate, praesentium possimus ullam saepe asperiores
                    similique at deserunt, earum explicabo laborum corrupti?
                  </p>
                </div>

                <Link
                  prefetch={false}
                  href="/"
                  className="flex items-center gap-1"
                >
                  <span className="font-medium text-sm">Ver post</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Box>
            <Box className="p-0">
              <div className="relative">
                <div className="absolute h-full w-full bg-gray-900 rounded-t-sm opacity-40" />
                <Image
                  src={exampleImage}
                  alt="Foto de exemplo"
                  className="rounded-t-sm"
                />
                <div className="absolute top-0 p-4">
                  <div className="p-2 border border-gray-50 text-gray-50 font-medium">
                    Direito civil
                  </div>
                </div>
              </div>

              <div className="px-6 py-3">
                {/* Title */}
                <strong className="text-2xl block mb-4">
                  Novidades na advocacia
                </strong>

                {/* Details */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={exampleUser}
                    alt="Foto de exemplo"
                    className="rounded-full h-8 w-8"
                  />

                  <strong className="font-medium">Paulo Renato</strong>

                  <div className="h-px flex-1 bg-gray-200" />

                  <small className="text-gray-400 text-xs">{exampleDate}</small>
                </div>

                {/* Excerpt */}
                <div className="mb-8">
                  <p className="text-sm text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dicta magnam error eos, rem amet aperiam. Nulla nostrum
                    voluptate, praesentium possimus ullam saepe asperiores
                    similique at deserunt, earum explicabo laborum corrupti?
                  </p>
                </div>

                <Link
                  prefetch={false}
                  href="/"
                  className="flex items-center gap-1"
                >
                  <span className="font-medium text-sm">Ver post</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Box>
          </div>

          <Button color="outline">Carregar mais</Button>
        </Container.Content>
      </Container.Root>

      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="space-y-4 mb-12">
            <PageTitle title="Áreas em destaque" />
            <Text opacity="low" size="md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              ipsam incidunt, velit iusto ea repellat veritatis dolore magni
              consectetur dignissimos obcaecati architecto vero deserunt, et
              laudantium doloremque? Culpa, delectus magnam.
            </Text>
          </div>

          <div className="grid grid-cols-5">
            <div>
              <Image src={exampleImage} alt="" className="object-cover h-64" />
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      <Container.Root>
        <Container.Content>Carregar mais</Container.Content>
      </Container.Root>

      {/* CTA */}
      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Enfrente Desafios Legais
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Estamos aqui para enfrentar os desafios legais ao seu lado. Conte
            com nossa experiência e dedicação.
          </Text>
        </div>

        <CTA.ContactButtonGroup />
      </CTA.Root>
    </>
  )
}
