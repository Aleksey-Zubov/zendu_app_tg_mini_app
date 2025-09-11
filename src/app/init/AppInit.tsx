import { useAuth } from '@shared/hooks/useAuth';

type AppInitProps = {
  children: React.ReactNode;
};

export function AppInit({ children }: AppInitProps) {
  const { isLoading, isError, error } = useAuth();

  if (isLoading) {
    return <div>Загрузка сессии...</div>; //
  }

  if (isError) {
    return <div>Ошибка инициализации: {error?.message}</div>;
  }

  return <>{children}</>;
}
