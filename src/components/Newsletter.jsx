import React, { useState } from 'react';

export default function Newsletter() {
  const formActionURL =
    'https://736593c5.sibforms.com/serve/MUIEANOTdko2t6YoHlDYjQ6Bok6-9SPT-CDDskD-XjQJ4HIcD1TRZzi1thO1LldDnYMR5j-tebc1VkEWXRDBVG-bbN8VRV3ry2-Gs7S3DUkgyAi-2aRitraVsSu_drw9EAOWnUYeWN98Xu1e5y_tcXnx583Wp71YUbjY0szQPHNwgXtUNcCYZIZyw3CuMdS7ZxAXWlxDjjf8YUCv';

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    await fetch(formActionURL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    });

    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">Want product news and updates?</h2>{' '}
          <p className="inline sm:block lg:inline xl:block">Sign up for our newsletter.</p>
        </div>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2" onSubmit={handleSubmit}>
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="EMAIL"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                'Ok! A très vite'
              ) : (
                'Valider'
              )}
            </button>
          </div>
          {/* <p className="mt-4 text-sm leading-6 text-gray-300">
            We care about your data. Read our{' '}
            <a href="#" className="font-semibold text-white">
              privacy&nbsp;policy
            </a>
            .
          </p> */}
        </form>
      </div>
    </div>
  );
}