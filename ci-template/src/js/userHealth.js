
export default function checkUserHealth(health) {
  if (health > 50) {
    return 'healthy';
  }
  if (50 > health > 15) {
    return 'wounded';
  }
  if (health <= 15) {
    return 'critical';
  }
}


