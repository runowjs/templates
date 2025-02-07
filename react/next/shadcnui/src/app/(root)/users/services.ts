// import request from '@/apis/request';

class UserServices {
  public async getUsers(params?: any): Promise<{
    data: any[];
    total: number;
  }> {
    // return request.get('/users', {
    //   params,
    // });

    // mock data
    const page = params?.current || 1;
    const pageSize = params?.pageSize || 10;
    return new Promise((resolve) => {
      fetch(
        `https://randomuser.me/api/?page=${page}&results=${pageSize}&noinfo`,
      )
        .then((res) => res.json())
        .then((json) => {
          resolve({
            data: json.results.map((row: any) => {
              return {
                id: row.login.uuid,
                nickname: [row.name.first, row.name.last].join(' '),
                username: row.login.username,
                email: row.email,
                gender: row.gender,
                phone: row.phone,
                avatar: row.picture.thumbnail,
              };
            }),
            total: Math.floor(Math.random() * 10000) + 1000,
          });
        });
    });
  }
}

export const userServices = new UserServices();
