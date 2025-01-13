// import request from '@/apis/request';

class GlobalService {
  public async getIdentity() {
    // get current authenticated identity
    // return request.get('/identity');

    return Promise.resolve({
      id: 1,
      name: 'runow',
      nickname: 'Runow',
      avatar: './runow.svg',
      email: 'runow@example.com',
    });
  }
}

export const globalService = new GlobalService();
