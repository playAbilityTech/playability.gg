import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, PuzzlePieceIcon, CursorArrowRaysIcon, WifiIcon, UserIcon } from '@heroicons/react/24/outline'

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

export default function Hero2() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <h1 className="mx-auto text-center max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
        Rendre{' '}
        <span className="relative whitespace-nowrap text-violet-700/90">
          {/* <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-violet-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg> */}
          <span className="relative">Accessible</span>
        </span>{' '}
        le jeu vidéo à tout le monde
      </h1>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Une solution simple et abordable pour facilement jouer en utilisant votre matériel existant et l intelligence artificielle
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-700/80">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
