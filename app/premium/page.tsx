import Image from "next/image";
import Logo from '@/public/logo.png'
import Link from "next/link";

export default function Home() {
  return (
   <main>
    <header className="bg-[#041925] p-5">
      <div className="container mx-auto flex justify-start items-center h-[96px] md:justify-center">
        <span className="block md:hidden cursor-pointer ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
          </svg>
        </span>
        <nav className="hidden md:block text-center">
            <Link href="#" className=" size-6 text-white mr-2 text-base font-medium hover:text-red-600 transition-all"> Inicio </Link>
            <Link href="#" className=" size-6 text-white mr-2 text-base font-medium hover:text-red-600 transition-all"> Estaciones en vivo </Link>
            <Link href="#" className=" size-6 text-white mr-2 text-base font-medium hover:text-red-600 transition-all"> Grupo DS Radio </Link>
            <Link href="#" className=" size-6 text-white mr-2 text-base font-medium hover:text-red-600 transition-all"> Premium </Link>
            <Link href="#" className=" size-6 text-white mr-2 text-base font-medium hover:text-red-600 transition-all"> Ondemand </Link>
            <Link href="#" className=" size-6 text-white mr-2 text-base font-medium hover:text-red-600 transition-all"> Deportes </Link>
        </nav>
      </div>
    </header>
    <section className="cover-hero h-screen justify-center flex items-center">
      <figure className="cover p-5">
          <Image src="https://miemisorasmedia.online/wp-content/uploads/2023/10/peoples-1024x682.png" alt="locutores" width={640} height={314} />
          <a href="#" className=" w-52 mt-4 hover:bg-red-600 bg-red-500 text-white rounded-lg py-3 px-4 border-solid border-2 mx-auto block">Comienza a escuchar</a>
      </figure>
      
    </section>
    <footer className=" bg-[#041925] py-9 text-white">
      <div className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      <div className="col-span-2">
        <figure className=" mb-3">
          <Image src={Logo} alt="radio" width={168} height={53} />
        </figure>
        <p> Música, radio y podcasts, todo gratis.</p>
        <p>Escucha en Línea o descarga la aplicación MI Emisoras</p>
      </div>
      <div className="col-auto">
        <h2 className="text-lg font-semibold mb-4">Escuchar</h2>
        <ul>
          <li><a href="#">Deportes</a></li>
          <li><a href="#">Noticias y Hablada</a></li>
          <li><a href="#">Musica</a></li>
        </ul>
      </div>
      <div className="col-auto">
        <h2 className="text-lg font-semibold mb-4">Información</h2>
        <ul>
          <li><a href="#">Dispositivos</a></li>
          <li><a href="#">On air</a></li>
          <li><a href="#">Ayuda</a></li>
        </ul>
      </div>
      <div className="col-auto">
        <h2 className="text-lg font-semibold mb-4"> Exclusivo</h2>
        <ul>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Prensa</a></li>
          <li><a href="#">Concursos</a></li>
        </ul>
      </div>
      {/* <div className="col-auto">
        <h2 className="text-lg font-semibold mb-4">Sobre MI emisora</h2>
        <ul>
          <li><a href="#">Mi Radio difusora</a></li>
          <li><a href="#">Marcas</a></li>
          <li><a href="#">Podcasters</a></li>
        </ul>
      </div> */}
    </div>
    <div className="flex justify-end items-center pt-8">
        <ul className="flex mr-7 w-[41.5%]">
          <li className=" mr-3 "><a href="#">Privacidad</a></li>
          <li className=" mr-3"><a href="#">Términos</a></li>
          <li className=" mr-3"><a href="#">Mapa del sitio</a></li>
        </ul>

        <ul className="flex gap-4">
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" className=" fill-white mr-4 ">
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
              </svg>
            </a>
            </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" className=" fill-white mr-4">
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" className=" fill-white mr-4">
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" className=" fill-white mr-4">
                <path d="M 25.40625 3 C 19.304688 3 12.585938 5.3125 11.1875 12.8125 C 10.988281 13.613281 11.59375 13.992188 12.09375 14.09375 L 18.3125 14.6875 C 18.914063 14.6875 19.300781 14.101563 19.5 13.5 C 20 10.898438 22.195313 9.59375 24.59375 9.59375 C 25.894531 9.59375 27.386719 10.113281 28.1875 11.3125 C 29.085938 12.613281 28.90625 14.40625 28.90625 15.90625 L 28.90625 16.8125 C 25.207031 17.210938 20.40625 17.5 16.90625 19 C 12.90625 20.699219 10.09375 24.207031 10.09375 29.40625 C 10.09375 36.007813 14.292969 39.3125 19.59375 39.3125 C 24.09375 39.3125 26.59375 38.195313 30.09375 34.59375 C 31.292969 36.292969 31.710938 37.105469 33.8125 38.90625 C 34.011719 39.007813 34.207031 39.09375 34.40625 39.09375 C 34.707031 39.09375 35.011719 39.011719 35.3125 38.8125 L 35.3125 38.90625 C 36.613281 37.804688 38.886719 35.695313 40.1875 34.59375 C 40.6875 34.195313 40.585938 33.507813 40.1875 32.90625 C 38.988281 31.40625 37.8125 30 37.8125 27 L 37.8125 17.09375 C 37.8125 12.894531 38.101563 8.992188 35 6.09375 C 32.5 3.792969 28.507813 3 25.40625 3 Z M 25.40625 5 C 28.105469 5 31.59375 5.695313 33.59375 7.59375 C 35.695313 9.59375 35.8125 12.09375 35.8125 16.09375 L 35.8125 27 C 35.8125 30.300781 37.085938 32.09375 38.1875 33.59375 C 37.886719 33.792969 37.613281 34.105469 37.3125 34.40625 L 37.3125 34.3125 L 34.40625 36.90625 C 33.304688 35.90625 32.886719 35.3125 32.1875 34.3125 C 32.085938 34.113281 31.886719 33.894531 31.6875 33.59375 L 30.3125 31.59375 L 28.59375 33.3125 C 25.492188 36.511719 23.492188 37.40625 19.59375 37.40625 C 14.894531 37.40625 12.09375 34.398438 12.09375 29.5 C 12.09375 25.5 14.085938 22.507813 17.6875 20.90625 C 20.289063 19.804688 23.988281 19.394531 27.1875 19.09375 C 27.886719 18.992188 28.492188 19.007813 29.09375 18.90625 L 30.90625 18.6875 L 30.90625 15.5 C 30.90625 13.898438 30.914063 12.011719 29.8125 10.3125 C 28.710938 8.710938 26.792969 7.6875 24.59375 7.6875 C 21.195313 7.6875 18.488281 9.59375 17.6875 12.59375 L 13.5 12.1875 C 15.101563 5.988281 21.605469 5 25.40625 5 Z M 27.09375 20 C 19.195313 20.5 17.5 24.804688 17.5 28.40625 C 17.398438 32.304688 19.8125 35 23.3125 35 C 25.8125 35 28.101563 33.492188 29.5 31.09375 C 30.898438 28.59375 30.90625 26.304688 30.90625 23.90625 L 30.90625 20 Z M 27.09375 22 L 28.90625 22 L 28.90625 23.40625 C 28.90625 25.90625 28.988281 27.894531 27.6875 30.09375 C 26.6875 31.894531 25.011719 33 23.3125 33 C 20.914063 33 19.40625 31.207031 19.40625 28.40625 C 19.40625 23.707031 23.09375 22.300781 27.09375 22 Z M 44.6875 36.59375 C 43.085938 36.59375 41.210938 37 39.8125 38 C 39.414063 38.300781 39.40625 38.6875 39.90625 38.6875 C 41.507813 38.488281 45.113281 38.007813 45.8125 38.90625 C 46.414063 39.707031 45.101563 43.085938 44.5 44.6875 C 44.300781 45.1875 44.695313 45.300781 45.09375 45 C 47.792969 42.699219 48.5 38.007813 48 37.40625 C 47.699219 36.90625 46.289063 36.59375 44.6875 36.59375 Z M 2.3125 37.5 C 2.011719 37.5 1.789063 38.011719 2.1875 38.3125 C 8.1875 43.710938 16.199219 47 25 47 C 31.300781 47 38.585938 45.011719 43.6875 41.3125 C 44.488281 40.710938 43.800781 39.695313 43 40.09375 C 37.300781 42.492188 31.195313 43.6875 25.59375 43.6875 C 17.292969 43.6875 9.3125 41.386719 2.8125 37.6875 C 2.613281 37.488281 2.414063 37.5 2.3125 37.5 Z"></path>
              </svg>
            </a>
          </li>
        </ul>
    </div>
    <div className="flex justify-start items-center pt-6">
      <p>2023 Mi Emisoras, Inc. Todos los derechos reservados</p>
    </div>

      </div>
   
  </footer>
    
   </main>
  );
}
