const express = require('express');
const app = express();

const boards = [
  {
    goals: [
      'All 3 Kokiri Forest Area Skulltulas',
      '2 Compasses',
      'Get Inside Ganon\'s Castle as Adult',
      'Iron Boots',
      'Bullet Bag (50)',
      'Magic Bar',
      '3 Tunics',
      'Fire Compass',
      'Steal Epona',
      '1 Skulltula from each Child Dungeon',
      '3 Maps',
      '200 Rupees',
      'Din\'s Fire',
      'Both HPs in Death Mountain Crater',
      '5 Zora Area Skulltulas',
      'Defeat King Dodongo',
      'Get Poacher\'s Saw',
      '5 Hearts',
      'Boomerang',
      '3 Real Bottles',
      '1 Boss Key',
      'Beat Jabu-Jabu\'s Belly',
      'Map & Compass in Dodongo\'s Cavern',
      '15 Different Skulltulas',
      '4 Songs',
    ],
    notes: [
      '"Zora Area" consists of Zora\'s River, Zora\'s Domain, and Zora\'s Fountain. (Ice Cavern and Jabu do not count)',
      '"Real Bottles" come from their natural source. Duping or RBAing a bottle does not count for this goal',
    ]
  }, {
    goals: [
      'Map & Compass in Bottom of the Well',
      'Farore\'s Wind',
      'Mirror Shield',
      'Bolero of Fire',
      'Goron Bracelet',
      '3 Boots',
      '1 Skulltula in Shadow Temple',
      'Lon-Lon Ranch HP',
      'Lens of Truth',
      'Map in Water Temple',
      '2 Real Bottles',
      'Defeat Barinade',
      'Defeat all 4 Lizalfos in Dodongo\'s Cavern',
      'Red Potion',
      'Ice Cavern HP',
      'Zora Tunic',
      'Minuet of Forest',
      'Nayru\'s Love',
      'Fairy Bow',
      'Bombchu chest in Spirit Trial',
      'Requiem of Spirit',
      'Fairy Slingshot',
      '2 Small Keys in Gerudo Training Ground',
      '5 Skulltulas in Kakariko Village',
      'Defeat Gohma',
    ],
    notes : [],
  }
];

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('board', boards[(Math.random() * 2) | 0]);
})

app.get('/:id', (req, res) => {
  if (req.params.id === 'bingo-popout') {
    let row = req.query.rowName;
    let goals = []
    for (let i = 0; i < 5; i++) {
      goals[i] = req.query['goal' + i];
    }
    res.render('bingo-popout', { row, goals })
  } else if (req.params.id == 1 || req.params.id == 2) {
    res.render('board', boards[+req.params.id - 1]);
  } else {
    res.render('board', boards[(Math.random() * 2) | 0]);
  }
})

app.listen(process.env.PORT || 3000, () => {
  console.log('listening');
})
