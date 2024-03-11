import Image from "next/image";

export const SectionImage = () =>{
    return(
        <section className="cover-hero  h-auto md:h-screen justify-center flex items-center">
            <figure className="p-5">
                <Image src="https://miemisorasmedia.online/wp-content/uploads/2023/10/peoples-1024x682.png" alt="locutores" width={640} height={314} />
            </figure>
        </section> 
    )
}