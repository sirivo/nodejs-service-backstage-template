const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const serviceName = '${{ values.name }}';

app.get('/health', (req, res) => {
  res.json({
    service: serviceName,
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`${serviceName} listening on port ${PORT}`);
});
