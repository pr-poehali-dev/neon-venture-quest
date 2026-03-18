import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function MethodicalCollection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 px-8 py-16 md:px-16">
      <div className="container mx-auto max-w-4xl">
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
              <Icon name="Archive" size={24} />
            </div>
            <h1 className="text-3xl font-light text-white md:text-4xl">
              Методическая копилка
            </h1>
          </div>
          <div className="h-px w-16 bg-white/20 mt-6" />
        </div>

        <ul className="space-y-3">
          <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
            <span className="h-1.5 w-1.5 rounded-full bg-white/40 flex-shrink-0" />
            <a
              href="https://disk.yandex.ru/i/54NP-Tr3CCkgww"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors text-sm"
            >
              Исследовательская работа 4 класс «Микрозелень»
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}