import { useQuery } from '@tanstack/react-query';

import { AuthService } from '@shared/api/auth';
import { getTelegramInitData } from '@shared/lib/telegram';

export function useAuth() {
  const sessionQuery = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const initData = getTelegramInitData();
      const { data } = await AuthService.signIn(initData);
      return data;
    },
    staleTime: 1000 * 60 * 5, // кэш 5 минут
  });

  return {
    user: sessionQuery.data || null,
    isAuthenticated: !!sessionQuery.data,
    isLoading: sessionQuery.isLoading,
    isError: sessionQuery.isError,
    error: sessionQuery.error,
    refetchSession: sessionQuery.refetch,
  };
}
