import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User as UserIcon } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Session, User } from '@supabase/supabase-js';

export default function Configuracoes() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success('Logout realizado com sucesso!');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pb-24 pt-6 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

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
              <h2 className="text-foreground font-bold text-xl">Minha Conta</h2>
              <p className="text-muted-foreground text-sm">{user?.email}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-background rounded-lg p-4">
              <p className="text-sm font-medium text-foreground mb-1">Email cadastrado</p>
              <p className="text-muted-foreground text-sm">{user?.email}</p>
            </div>

            <div className="bg-background rounded-lg p-4">
              <p className="text-sm font-medium text-foreground mb-1">ID da conta</p>
              <p className="text-muted-foreground text-sm break-all">{user?.id}</p>
            </div>

            <div className="bg-background rounded-lg p-4">
              <p className="text-sm font-medium text-foreground mb-1">Conta criada em</p>
              <p className="text-muted-foreground text-sm">
                {user?.created_at ? new Date(user.created_at).toLocaleDateString('pt-BR') : 'N/A'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-6">
          <h3 className="text-foreground font-bold text-lg mb-4">Zona de perigo</h3>
          <button
            onClick={handleLogout}
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
