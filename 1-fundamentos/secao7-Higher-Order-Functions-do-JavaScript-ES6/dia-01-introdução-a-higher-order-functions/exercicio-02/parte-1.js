const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = () => {
  const maxDmg = dragon.strength;
  return Math.floor(Math.random() * (maxDmg - 15) + 15);
};

const warriorDmg = () => {
  const maxDmg = warrior.strength * warrior.weaponDmg;
  const minDmg = warrior.strength;
  return Math.floor(Math.random() * (maxDmg - minDmg) + minDmg);
};

const mageDmg = () => {
  const maxDmg = mage.intelligence * 2;
  const minDmg = mage.intelligence;
  const mageMana = mage.mana;
  const status = {
    dmg: 'Não possui mana suficiente',
    manaSpent: 0
  };
  if (mageMana > 15) {
    status.dmg = Math.floor(Math.random() * (maxDmg - minDmg) + minDmg),
      status.manaSpent = 15;
    return status;
  }
  return status;
};