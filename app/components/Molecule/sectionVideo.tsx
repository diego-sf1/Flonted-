"use client";

import React, { useEffect, useRef } from "react";

export const SectionVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries: any[], observer: any) => {
      entries.forEach((entry: { isIntersecting: any }) => {
        // entry.isIntersecting será verdadero si el elemento está actualmente en la pantalla
        if (entry.isIntersecting) {
          // Reproducir el video cuando esté en pantalla
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          // Pausar el video cuando no esté en pantalla
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const targetElement = videoRef.current;

    if (targetElement) {
      observer.observe(targetElement);
    }

    // Limpia el observador cuando el componente se desmonta
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-5">
    <div className="container flex flex-col md:justify-between md:items-center md:flex-row mx-auto">
      <h2 className="text-5xl font-black text-black mb-8 text-center">
        Toda Tu Música Favorita, Radio y Podcasts, Todo Gratis.
      </h2>
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
        <video className="w-full" controls ref={videoRef}>
          <source src="/video.mp4" type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      </div>
    </div>
  </section>
  );
};
