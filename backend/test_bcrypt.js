const bcrypt = require('bcryptjs');

const ADMIN_PASSWORD_RAW = 'Amritanshu#1';

async function test() {
  try {
    const hash = await bcrypt.hash(ADMIN_PASSWORD_RAW, 12);
    console.log('Hash created: OK');
    
    const match = await bcrypt.compare(ADMIN_PASSWORD_RAW, hash);
    console.log('Password match:', match);
    
    const wrongPassword = await bcrypt.compare('wrongpassword', hash);
    console.log('Wrong password match:', wrongPassword);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

test();
