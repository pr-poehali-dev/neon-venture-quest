import { useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const sections = [
  {
    id: 'normative',
    title: 'Нормативные документы',
    icon: 'FileText',
    description: 'Федеральные и региональные нормативные акты, образовательные стандарты, программы и учебные планы.',
    items: [
      { label: 'ФГОС НОО', url: 'https://sh-sazonovskaya-r19.gosweb.gosuslugi.ru/netcat_files/30/50/FGOS_NOO_ot_18.07.2022.pdf' },
      { label: 'ФОП НОО Направления и цели внеурочной деятельности', url: 'https://sudact.ru/law/prikaz-minprosveshcheniia-rossii-ot-18052023-n-372/federalnaia-obrazovatelnaia-programma-nachalnogo-obshchego/iv/173/173.7/' },
      { label: 'Учебный план и расписание', url: null },
      { label: 'Локальные акты школы', url: null },
      { label: 'Должностные инструкции', url: null },
    ],
  },
  {
    id: 'theory',
    title: 'Теоретические аспекты проблемы',
    icon: 'BookOpen',
    description: 'Научные статьи, исследования и теоретическая база по ключевым педагогическим проблемам.',
    items: [
      { label: 'Обзор научной литературы', url: null },
      { label: 'Концепции и подходы', url: null },
      { label: 'Исследовательские статьи', url: null },
      { label: 'Методологические основы', url: null },
    ],
  },
  {
    id: 'practice',
    title: 'Практические аспекты',
    icon: 'Layers',
    description: 'Конспекты уроков, практические задания, разработки занятий и дидактические материалы.',
    items: [
      { label: 'Конспекты уроков', url: null },
      { label: 'Практические задания', url: null },
      { label: 'Дидактические материалы', url: null },
      { label: 'Технологические карты', url: null },
    ],
  },
  {
    id: 'methodical',
    title: 'Методическая копилка',
    icon: 'Archive',
    description: 'Авторские методические разработки, рекомендации, памятки и полезные материалы для педагогов.',
    items: [
      { label: 'Авторские разработки', url: null },
      { label: 'Методические рекомендации', url: null },
      { label: 'Памятки и инструкции', url: null },
      { label: 'Презентации к урокам', url: null },
    ],
  },
  {
    id: 'results',
    title: 'Результаты и достижения',
    icon: 'Award',
    description: 'Грамоты, дипломы, результаты олимпиад, публикации и профессиональные достижения.',
    items: [
      { label: 'Награды и грамоты', url: null },
      { label: 'Победители олимпиад', url: null },
      { label: 'Публикации и статьи', url: null },
      { label: 'Сертификаты и курсы', url: null },
    ],
  },
];

export default function MaterialsSection() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <section className="bg-zinc-950 py-20 px-8 md:px-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-light text-white md:text-4xl">
            Учебно-методические материалы
          </h2>
          <p className="mt-4 text-white/50 text-lg font-light">
            Хакимов Хакимжон Халилиллаевич
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-white/20" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, idx) => (
            <div
              key={section.id}
              className={cn(
                'group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300',
                'hover:border-white/30 hover:bg-white/10',
                activeSection === section.id && 'border-white/30 bg-white/10',
                idx === 4 && 'md:col-span-2 lg:col-span-1'
              )}
              onClick={() =>
                setActiveSection(activeSection === section.id ? null : section.id)
              }
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white group-hover:bg-white/20 transition-colors">
                  <Icon name={section.icon} size={20} />
                </div>
                <h3 className="text-base font-medium text-white leading-tight">
                  {section.title}
                </h3>
              </div>

              <p className="text-sm text-white/50 leading-relaxed mb-4">
                {section.description}
              </p>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  activeSection === section.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <ul className="space-y-2 pt-2 border-t border-white/10">
                  {section.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="h-1 w-1 rounded-full bg-white/40 flex-shrink-0" />
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.label}
                        </a>
                      ) : (
                        item.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-1 text-xs text-white/30 group-hover:text-white/50 transition-colors">
                <span>{activeSection === section.id ? 'Скрыть' : 'Подробнее'}</span>
                <Icon
                  name={activeSection === section.id ? 'ChevronUp' : 'ChevronDown'}
                  size={12}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}