import { zenduApi } from '..';

export class AuthService {
  static async signIn(initData: string) {
    return await zenduApi.post('/auth/sign-in', { initData });
  }
}
