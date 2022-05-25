const { User } = require('../../src/app/models');

describe('Authentication',() => {
   it('should authenticate with valid credentials', async ()=>{
       const user = User.create({
           name: "Felipe",
           email: "felipe@test.com.br",
            password_hash: "123123"
       });
       console.log(JSON.stringify(user, null, 4))
    //    expect(user.email).toBe("felipe@test.com.br")
   })
})
