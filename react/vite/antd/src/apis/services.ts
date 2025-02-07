// import request from '@/apis/request';

class GlobalService {
  public async getIdentity() {
    // get current authenticated identity
    // return request.get('/identity');

    return Promise.resolve({
      id: 1,
      username: 'runow',
      nickname: 'Runow',
      avatar: 'https://i.pravatar.cc/128?img=12',
      email: 'runow@example.com',
    });
  }
}

export const globalService = new GlobalService();
