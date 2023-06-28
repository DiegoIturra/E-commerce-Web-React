import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = ({cards = [1, 2, 3]}) => {
  return (
    <section className="text-gray-600 body-font bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 text-gray-400">CATEGORIAS</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-200">Nuestras Categorias mas Populares</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      {
        cards?.map((card) => {
          return (
            <Link to={`/products`} className="p-4 md:w-1/3 cursor-pointer">
              <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-medium capitalize">{card || 'Example card'}</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-gray-300">Ingresa a nuestros productos relacionados</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Ver Mas
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Link>
          )
        })
      }
    </div>
  </div>
</section>

  )
}

export default FeatureCard