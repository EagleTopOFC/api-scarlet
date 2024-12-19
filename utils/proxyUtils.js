// Utilidad para rotar proxies
const proxies = [
  'http://proxy1.com',
  'http://proxy2.com',
  'http://proxy3.com',
];

const getProxy = () => {
  const randomIndex = Math.floor(Math.random() * proxies.length);
  return proxies[randomIndex];
};

module.exports = { getProxy };
