import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const categories = [
  {
    id: 'personal',
    title: 'Личные',
    icon: 'User',
    items: [],
  },
  {
    id: 'children',
    title: 'Детские',
    icon: 'Star',
    items: [],
  },
];

export default function Results() {
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
              <Icon name="Award" size={24} />
            </div>
            <h1 className="text-3xl font-light text-white md:text-4xl">
              Результаты и достижения
            </h1>
          </div>
          <div className="h-px w-16 bg-white/20 mt-6" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon name={cat.icon} size={20} />
                </div>
                <h2 className="text-lg font-medium text-white">{cat.title}</h2>
              </div>
              <div className="h-px w-full bg-white/10 mb-4" />
              <p className="text-sm text-white/40">Материалы появятся здесь.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
