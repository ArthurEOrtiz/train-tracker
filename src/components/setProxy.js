const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://lapi.transitchicago.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/1.0/ttarrivals.aspx?key=${process.env.REACT_APP_CTA_API_KEY}&outputType=JSON'
      }
    })
  );
};
