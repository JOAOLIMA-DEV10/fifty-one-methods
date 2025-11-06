import { Home, Play, Book, Settings } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'principal', label: 'Principal', icon: Home },
    { id: 'continuar', label: 'Continuar', icon: Play },
    { id: 'conteudos', label: 'Conteúdos', icon: Book },
    { id: 'config', label: 'Config', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
      <div className="max-w-lg mx-auto px-4">
        <div className="flex justify-around items-center">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex flex-col items-center py-3 px-4 transition-all duration-300 ${
                activeTab === id ? 'text-primary' : 'text-muted-foreground hover:text-secondary'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
