import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, PuzzlePieceIcon, CursorArrowRaysIcon, WifiIcon, UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const features = [
    {
      name: 'Facile à utiliser',
      description:
        'Une clé usb bluetooth vendue moins de 50 euros et une app gratuite pour facilement jouer sur console et pc',
      icon: WifiIcon,
    },
    {
      name: 'Jouer à Mario Kart avec son fauteuil roulant',
      description:
        'Tu controles déjà ton téléphone avec ton fauteuil ? Pas besoin de racheter un nouveau joystick !',
      icon: CursorArrowRaysIcon,
    },
    {
      name: 'Joue avec ta voix et ton visage',
      description:
        'Controle tes jeux favoris grace à la reconnaisssance faciale et vocale. Enregistre tes propres sons / mots et contractions musculaires pour personnaliser ton expérience de jeu',
      icon: UserIcon,
    },
    {
      name: 'Utilise ton matériel existant',
      description:
        'Compatible avec le Xbox Adaptive Controller, le Hori Flex Controller, le Microsoft Adaptive Hub, et périphériques Bluetooth (gamepad, clavier, souris, etc)',
      icon: PuzzlePieceIcon,
    },
  ]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                  <Image
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    src="https://res.cloudinary.com/hed2t4hrt/image/upload/v1683212250/playability/playability_usb_dongle_1_mqkn7k.jpg"
                    alt=""
                    width={396}
                    height={528}
                    unoptimized
                    />
                  </div>
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
