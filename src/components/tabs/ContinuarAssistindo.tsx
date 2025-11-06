import { Module, Lesson } from '../../types';
import { Play, Clock } from 'lucide-react';

interface ContinuarAssistindoProps {
  lastWatched?: {
    module: Module;
    lesson: Lesson;
    progress: number;
  } | null;
  onContinue?: () => void;
}

export default function ContinuarAssistindo({ lastWatched, onContinue }: ContinuarAssistindoProps) {
  if (!lastWatched) {
    return (
      <div className="min-h-screen bg-background pb-24 pt-6 px-4 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
            <Play className="w-12 h-12 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Nenhum vídeo assistido</h2>
          <p className="text-muted-foreground">
            Comece sua jornada na aba Principal e seus progressos aparecerão aqui.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24 pt-6 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Continuar Assistindo</h1>
          <p className="text-muted-foreground">Continue de onde parou</p>
        </div>

        <div className="bg-card rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-black relative">
            <iframe
              src={`${lastWatched.lesson.videoUrl}?modestbranding=1&rel=0&showinfo=0&controls=1`}
              title={lastWatched.lesson.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
              <div
                className="h-full bg-secondary"
                style={{ width: `${lastWatched.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary text-primary-foreground font-bold text-sm px-3 py-1 rounded-full">
                Módulo {lastWatched.module.id}
              </span>
              <span className="text-muted-foreground text-sm">{lastWatched.module.title}</span>
            </div>

            <h2 className="text-foreground text-2xl font-bold mb-2">
              {lastWatched.lesson.title}
            </h2>

            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
              {lastWatched.lesson.duration && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{lastWatched.lesson.duration}</span>
                </div>
              )}
              <span>• {lastWatched.progress}% concluído</span>
            </div>

            {onContinue && (
              <button
                onClick={onContinue}
                className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Continuar assistindo
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 bg-card rounded-2xl p-6">
          <h3 className="text-foreground font-bold text-lg mb-4">Sobre este módulo</h3>
          <p className="text-muted-foreground mb-4">{lastWatched.module.description}</p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {lastWatched.module.lessons.length} aulas no total
            </span>
            <span className="text-secondary font-semibold">
              Em progresso
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
