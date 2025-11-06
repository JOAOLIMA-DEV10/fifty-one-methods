import { useState } from 'react';
import { User } from '../../types';
import { LogOut, Save, User as UserIcon } from 'lucide-react';

interface ConfiguracoesProps {
  user: User;
  onUpdateUser: (user: User) => void;
  onLogout: () => void;
}

export default function Configuracoes({ user, onUpdateUser, onLogout }: ConfiguracoesProps) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser({ name, email, phone });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background pb-24 pt-6 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Configurações</h1>
          <p className="text-muted-foreground">Gerencie sua conta e preferências</p>
        </div>

        <div className="bg-card rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <UserIcon className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-foreground font-bold text-xl">{user.name}</h2>
              <p className="text-muted-foreground text-sm">{user.email}</p>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {saved && (
              <div className="bg-secondary/10 border border-secondary text-secondary px-4 py-3 rounded-lg text-sm">
                Alterações salvas com sucesso!
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              Salvar alterações
            </button>
          </form>
        </div>

        <div className="bg-card rounded-2xl p-6">
          <h3 className="text-foreground font-bold text-lg mb-4">Zona de perigo</h3>
          <button
            onClick={onLogout}
            className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Sair da conta
          </button>
        </div>
      </div>
    </div>
  );
}
