import { queryOptions } from '@tanstack/react-query';

import { AuthService } from '@shared/api/auth';

export const sessionQueryOptions = queryOptions({
  queryKey: ['session'],

  queryFn: async () => {
    const tg = window.Telegram?.WebApp;

    if (!tg?.initData) {
      throw new Error('No init data');
    }

    try {
      const { data } = await AuthService.signIn(tg.initData);

      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to sign in');
    }
  },
});
