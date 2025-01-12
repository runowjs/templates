import request from '@/apis/request';

class AuthService {
  public login(data: any) {
    return request.post('/auth/login', data);
  }
}

export const authService: AuthService = new AuthService();
