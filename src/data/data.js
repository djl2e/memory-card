class PlayerData {
  constructor() {
    this.data = {
      0: 'Stephen_Curry',
      1: 'Lebron_James',
      2: 'Kevin_Durant',
      3: 'Giannis_Antetokounmpo',
      4: 'Joel_Embiid',
      5: 'Nikola_Jokic',
      6: 'Draymond_Green',
      7: 'Jayson_Tatum',
      8: 'Jimmy_Butler',
      9: 'Luka_Doncic',
      10: 'Paul_George',
      11: 'Ja_Morant',
      12: 'Devin_Booker',
      13: 'James_Harden',
      14: 'Kawhi_Leonard',
      15: 'Damian Lillard',
    };
  }

  getPlayerName(id) {
    return this.data[id];
  }

  static getPlayerIds() {
    const playerIds = [...Array(16).keys()];
    let index = playerIds.length;
    let random;

    while (index !== 0) {
      random = Math.floor(Math.random() * index);
      index -= 1;
      [playerIds[index], playerIds[random]] = [playerIds[random], playerIds[index]];
    }

    return playerIds;
  }
}

const playerData = new PlayerData();

export default playerData;
