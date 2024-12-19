const calculateCommission = (servicePrice, commissionRate) => {
  return servicePrice * (commissionRate / 100);
};

module.exports = { calculateCommission };
