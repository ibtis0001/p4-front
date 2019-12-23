


const fs = require('fs');


exports.staticMap = ([lng, lat]) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);


exports.siteName = `Homemade with Love`;

exports.menu = [
  { slug: '/stores', title: 'Stores', icon: 'store', },
  { slug: '/tags', title: 'Tags', icon: 'tag', },
  { slug: '/add', title: 'Add', icon: 'add', },
  { slug: '/map', title: 'Map', icon: 'map', },
];
