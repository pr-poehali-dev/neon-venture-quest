import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function PracticalAspects() {
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
              <Icon name="Layers" size={24} />
            </div>
            <h1 className="text-3xl font-light text-white md:text-4xl">
              Практические аспекты
            </h1>
          </div>
          <div className="h-px w-16 bg-white/20 mt-6" />
        </div>

        <div className="text-white/50 text-lg">
          Раздел в разработке. Здесь появятся конспекты уроков, практические задания, дидактические материалы и технологические карты.
        </div>
      </div>
    </div>
  );
}
