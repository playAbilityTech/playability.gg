export default function Youtube() {
    return (
      <div className="overflow-hidden bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ma nouvelle invention m'a mené jusqu'au Concours Lépine !
              </h2>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Je vous raconte comment tout a commencé dans ma dernière vidéo Youtube. C'était il y a 3 mois. Merci ChatGPT.
              </p>
              <div className="mt-10 flex">
                <a
                  href="https://www.youtube.com/watch?v=E2yJn7mEN5s"
                  className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Regardez la video sur youtube  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 sm:gap-8 lg:contents max-w-[90vw]">
            
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <a href="https://www.youtube.com/watch?v=E2yJn7mEN5s" target="_blank">
                <img
                  src="https://res.cloudinary.com/hcklp/image/upload/c_scale,w_1000/v1683461231/Ma_nouvelle_invention_m_a_men%C3%A9e_jusqu_au_concours_L%C3%A9pine_-_v3.2_fuxdm1.jpg"
                  alt=""
                  className="aspect-[16/9] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
  