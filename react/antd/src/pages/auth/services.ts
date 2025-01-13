import request from '@/apis/request';

class AuthService {
  public async login(data: any) {
    return request.post('/auth/login', data);
  }

  public async register(data: any) {
    return request.post('/auth/register', data);
  }

  public async logout() {
    return request.post('/auth/logout');
  }
}

export const authService: AuthService = new AuthService();
