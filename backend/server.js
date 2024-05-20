// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let users = [
  { id: 1, email: 'user1@example.com', password: 'password1' },
  { id: 2, email: 'user2@example.com', password: 'password2' }
];

app.put('/api/auth/update', (req, res) => {
  const { email, password } = req.body;
  const userIndex = users.findIndex(user => user.email === email);
  if (userIndex !== -1) {
    users[userIndex].password = password;
    res.json({ message: 'User profile updated successfully', user: users[userIndex] });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
