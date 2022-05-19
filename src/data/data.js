class PlayerData {
  constructor() {
    this.name = {
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
      15: 'Damian_Lillard',
      16: 'Anthony_Davis',
      17: 'Trae Young',
    };
    this.imgSrc = Object.fromEntries([...Array(18).keys()].map((key) => [key, '']));
  }

  setImgSrc(id, src) {
    this.imgSrc[id] = src;
  }

  getPlayerName(id) {
    return this.name[id];
  }

  getImgSrc(id) {
    return this.imgSrc[id];
  }

  async fetchSrc() {
    await Promise.all(
      Object.keys(this.imgSrc).map(async (key) => {
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${this.name[key]}`, { mode: 'cors' });
        const json = await response.json();
        this.imgSrc[key] = await json.player[0].strThumb;
      }),
    );
  }

  static getPlayerIds() {
    const playerIds = [...Array(18).keys()];
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
