const request = require('supertest')
const app = require('../../src/app')
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate')

describe('Authentication',() => {
    beforeEach(async()=>{
        console.log('truncate')
        await truncate();
    })
   it('should authenticate with valid credentials', async ()=>{
       const user = User.create({
           name: "Felipe",
           email: "felipe@test.com.br",
            password_hash: "123123"
       });
       
       const response = await request(app)
       .post('/session')
       .send({
           email: user.email,
           password:'123123'
       })

       expect(response.status).toBe(200);
   })
})
