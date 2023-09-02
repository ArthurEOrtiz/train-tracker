import('node-fetch').then(({ default: fetch }) => {
  const express = require('express');
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(express.json());

  app.use('/', async (req, res) => {
    try {
      const apiUrl = `http://lapi.transitchicago.com${req.url}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Proxy server error' });
    }
  });

  app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
  });
});
