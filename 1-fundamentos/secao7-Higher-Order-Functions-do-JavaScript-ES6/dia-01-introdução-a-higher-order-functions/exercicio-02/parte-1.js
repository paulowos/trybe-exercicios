const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: 0,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: 0,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: 0,
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
    dmg: ' - Não possui mana suficiente',
    manaSpent: 0
  };
  if (mageMana > 15) {
    status.dmg = Math.floor(Math.random() * (maxDmg - minDmg) + minDmg),
      status.manaSpent = 15;
    return status;
  }
  return status;
};

const gameActions = {
  warriorTurn(callback) {
    const hitPoint = callback();
    dragon.healthPoints -= hitPoint;
    warrior.damage += hitPoint;
  },
  mageTurn(callback) {
    const hitPoint = callback();
    if (typeof hitPoint.dmg === 'number') dragon.healthPoints -= hitPoint.dmg;
    mage.mana -= hitPoint.manaSpent;
    mage.damage += hitPoint.dmg;
  },
  dragonTurn(callback) {
    const hitPoint = callback();
    mage.healthPoints -= hitPoint;
    warrior.healthPoints -= hitPoint;
    dragon.damage += hitPoint;
  },
  turnStatus() { return battleMembers; }
};

gameActions.warriorTurn(warriorDmg);
gameActions.mageTurn(mageDmg);
gameActions.dragonTurn(dragonDmg);
console.log(gameActions.turnStatus());