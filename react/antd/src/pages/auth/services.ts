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

  public async forgotPassword(data: any) {
    return request.post('/auth/forgotPassword', data);
  }

  public async resetPassword(data: any) {
    return request.post('/auth/resetPassword', data);
  }
}

export const authService: AuthService = new AuthService();
