const { User } = require('../../src/app/models');
describe('Authentication',()=>{
    it('should sum two numbers',()=>{
       const user =  await User.create({name:'Felipe', email:'felipe@test.com', password_hash:'123123'})

       console.log(user);

       exprect(user.email).toBe('felipe@test.com')
    });
})
