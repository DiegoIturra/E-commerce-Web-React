import React from 'react'
import NAS9 from '../../assets/NAS9.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-800 mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row md:justify-center flex-col items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
            Consiguelos antes de que
            <br className="hidden lg:inline-block" />se acaben
          </h1>
          <p className="mb-8 leading-relaxed text-gray-400">
            Toda la tecnologia que buscas en la palma de tu mano
          </p>
          <div className="flex justify-center">
            <Link to="/products" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Mostrar todos los productos
            </Link>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Contactanos
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="NAS9" src={NAS9} />
        </div>
      </div>
    </section>
  );
}

export default Hero;