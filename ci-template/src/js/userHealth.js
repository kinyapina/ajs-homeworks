export const user = {
  name: 'Маг',
  health: 90,
}

export default function checkUserHealth(value) {
  if (typeof value !== 'number' || value < 0) {
    return 'this is not a number';
  }

  if (value > 50) {
    return 'healthy';
  }

  if (value > 15) {
    return 'wounded';
  }

  return 'critical';
}


