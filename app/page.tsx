import Image from "next/image";
import { ButtonEnlace } from "./components/Atoms/button";


export default function Home() {
  return (
   <main>
    <section className="cover-hero  h-auto md:h-screen justify-center flex items-center">
      <figure className="cover p-5">
          <Image src="https://miemisorasmedia.online/wp-content/uploads/2023/10/peoples-1024x682.png" alt="locutores" width={640} height={314} />
          <ButtonEnlace href="#" label="Comienza a escuchar" />
      </figure>
    </section>    
   </main>
  );
}
