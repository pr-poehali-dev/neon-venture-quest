import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const personalItems = [
  {
    title: 'Благодарственное письмо «Орлята России»',
    img: 'https://cdn.poehali.dev/projects/daccd443-1fe0-4e95-a060-ea7945817d80/bucket/1ccf9a7b-a411-453e-88af-aa4cf93f19ae.jpg',
  },
  {
    title: 'Благодарственное письмо МЦОиП',
    img: 'https://cdn.poehali.dev/projects/daccd443-1fe0-4e95-a060-ea7945817d80/bucket/ff64065d-4a0b-4b3f-9ce1-1e7a4cabc490.jpg',
  },
  {
    title: 'Сертификат эксперта «Абилимпикс» 2025',
    img: 'https://cdn.poehali.dev/projects/daccd443-1fe0-4e95-a060-ea7945817d80/bucket/434599a7-a37a-49e8-b9c7-bc212b0423ca.jpg',
  },
  {
    title: 'Сертификат младшего инструктора по первой помощи',
    img: 'https://cdn.poehali.dev/projects/daccd443-1fe0-4e95-a060-ea7945817d80/bucket/6d4a899a-df64-44c3-9c15-338bf0f2e69e.jpg',
  },
  {
    title: 'Благодарственное письмо «МедиаПритяжение»',
    img: 'https://cdn.poehali.dev/projects/daccd443-1fe0-4e95-a060-ea7945817d80/bucket/95904ce5-4d43-498a-b61d-7f168d39e464.jpg',
  },
];

export default function Results() {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 px-8 py-16 md:px-16">
      <div className="container mx-auto max-w-5xl">
        <button
          onClick={() => navigate('/')}
          className="mb-10 flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
              <Icon name="Award" size={24} />
            </div>
            <h1 className="text-3xl font-light text-white md:text-4xl">
              Результаты и достижения
            </h1>
          </div>
          <div className="h-px w-16 bg-white/20 mt-6" />
        </div>

        {/* Личные */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
              <Icon name="User" size={18} />
            </div>
            <h2 className="text-xl font-medium text-white">Личные</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {personalItems.map((item) => (
              <div
                key={item.title}
                className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/30 transition-all duration-300"
                onClick={() => setLightbox(item.img)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm text-white/70 leading-snug">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Детские */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
              <Icon name="Star" size={18} />
            </div>
            <h2 className="text-xl font-medium text-white">Детские</h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/40">Материалы появятся здесь.</p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Документ"
            className="max-h-screen max-w-full rounded-xl object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
