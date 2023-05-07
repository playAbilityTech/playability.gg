export default function Youtube() {
    return (
      <div className="overflow-hidden bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ma nouvelle invention m'a mené jusqu'au Concours Lépine !</h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut
                molestiae velit error quod. Excepturi quidem expedita molestias quas.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
              </p>
              <div className="mt-10 flex">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join our team <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="https://res.cloudinary.com/hcklp/image/upload/c_scale,w_1000/v1683461231/Ma_nouvelle_invention_m_a_men%C3%A9e_jusqu_au_concours_L%C3%A9pine_-_v3.2_fuxdm1.jpg"
                  alt=""
                  className="aspect-[16/9] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
  