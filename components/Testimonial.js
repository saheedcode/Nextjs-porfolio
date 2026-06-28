'use client';
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const testimonials = [
  { text: "Saheed is a great developer! He delivered the project on time...", name: "Ebenezer Bezen", role: "Energxi, Tech Institute", img: "/images/ben.jpg" },
  { text: "Great communication and excellent problem-solving skills...", name: "Michael Mathew", role: "Product Manager", img: "/images/tec.jpeg" },
  { text: "Working with saheed was a fantastic experience. Professional...", name: "Taiwo Olaide", role: "UI/UX Designer", img: "/images/tboy.jpeg" },
   
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12">
        <h4 className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">Testimonials</h4>
        <h2 className="text-3xl font-bold text-gray-900">What People Say</h2>
      </div>

      <div className="max-w-6xl mx-auto" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_33.33%] min-w-0">
              <div className="bg-white p-14 rounded-2xl border border-gray-100 shadow-sm h-full">
                <p className="text-gray-600 mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${index === selectedIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'}`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}