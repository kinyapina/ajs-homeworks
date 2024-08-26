import { Character, Magician, Daemon } from '../js/character';

describe("Character Tests", () => {
  let magician;
  let daemon;

  beforeEach(() => {
    magician = new Magician("Гарри", 100);
    daemon = new Daemon("Демон", 100);
  });

  test("Magician attack without distance should return 0", () => {
    expect(magician.calculateAttack(6)).toBe(0);
  });

  test("Daemon attack without distance should return 0", () => {
    expect(daemon.calculateAttack(6)).toBe(0);
  });

  test("Magician attack on distance 1 should return 100", () => {
    expect(magician.calculateAttack(1)).toBe(100);
  });

  test("Daemon attack on distance 1 should return 100", () => {
    expect(daemon.calculateAttack(1)).toBe(100);
  });

  test("Magician attack on distance 2 should return 90", () => {
    expect(magician.calculateAttack(2)).toBe(90);
  });

  test("Daemon attack on distance 2 should return 90", () => {
    expect(daemon.calculateAttack(2)).toBe(90);
  });

  test("Magician attack with stoned level at distance 2", () => {
    magician.stonedLevel = 1;
    expect(magician.calculateAttack(2)).toBe(85);  // 90 - Math.log2(2) * 5 => 90 - 5 = 85
  });

  test("Daemon attack with stoned level at distance 2", () => {
    daemon.stonedLevel = 1;
    expect(daemon.calculateAttack(2)).toBe(85);  // 90 - Math.log2(2) * 5 => 90 - 5 = 85
  });

  test("Magician attack with stoned level at distance 3", () => {
    magician.stonedLevel = 1;
    expect(magician.calculateAttack(3)).toBe(80);  // 80 - Math.log2(3) * 5
  });

  test("Daemon attack with stoned level at distance 4", () => {
    daemon.stonedLevel = 1;
    expect(daemon.calculateAttack(4)).toBe(70);  // 70 - Math.log2(4) * 5
  });

  test("Magician attack with stoned level at distance 5", () => {
    magician.stonedLevel = 1;
    expect(magician.calculateAttack(5)).toBe(60);  // 60 - Math.log2(5) * 5
  });

  test("Daemon attack with stoned level at distance 5", () => {
    daemon.stonedLevel = 1;
    expect(daemon.calculateAttack(5)).toBe(60);  // 60 - Math.log2(5) * 5
  });

  test("No attack lowering attack below zero", () => {
    magician.stonedLevel = 10; // make sure this reduces attack further
    expect(magician.calculateAttack(1)).toBe(0); // should not go below 0
  });
});