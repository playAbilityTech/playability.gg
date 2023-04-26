import React from 'react';
import Iframe from 'react-iframe';

export default function CTA() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Tu veux jouer avec ? Tu veux soutenir le projet ?
              
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                On lance en juin sur Kickstarter pour une livraison en octobre cette année !
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
              <Iframe
            src="https://736593c5.sibforms.com/serve/MUIEAL5fLMyrsyDa3v-uUrHPA7Z-aTYQvACSM86549fCY907wlTO6WiIpduL-nkvCKRHIU8cd1nBjaG7oVyOw_Jr3UWCoQD-ftcV3oV0FwWpeCtGDuM47tDFYpyuchJiDriJPl9HdED_ONnjp3VZKTJ6AIQBB7VG6w_YFsKOkkTRCjUdMyxLc96W1GznVW0WsyWrwmee_IDiUlu2"
            width="500px"
            height="1050px"
            frameborder="0"
            scrolling="auto"
            allowfullscreen
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '100%',
            }}
          />
              </div>
            </div>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      )
    }

    
    