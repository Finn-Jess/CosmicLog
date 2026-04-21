export interface CelestialObject {
  id: string;
  name: string;
  mId: string;
  type: string;
  constellation: string;
  magnitude: string;
  distance: string;
  description: string;
}

export const CELESTIAL_DATA: Record<string, CelestialObject> = {
  'm31': {
    id: 'm31',
    mId: 'M31',
    name: 'Andromeda Galaxy',
    type: 'Spiral Galaxy',
    constellation: 'Andromeda',
    magnitude: '3.44',
    distance: '2.537 Million ly',
    description: 'The Andromeda Galaxy is the nearest major galaxy to the Milky Way. Visible to the naked eye under dark skies.'
  },
  'm42': {
    id: 'm42',
    mId: 'M42',
    name: 'Orion Nebula',
    type: 'Diffuse Nebula',
    constellation: 'Orion',
    magnitude: '4.0',
    distance: '1,344 ly',
    description: 'One of the brightest nebulae in the sky, visible to the naked eye. It is a massive star-forming region.'
  },
  'm45': {
    id: 'm45',
    mId: 'M45',
    name: 'Pleiades',
    type: 'Open Cluster',
    constellation: 'Taurus',
    magnitude: '1.6',
    distance: '444 ly',
    description: 'Also known as the Seven Sisters, this is a prominent open star cluster containing middle-aged, hot blue stars.'
  },
  'm57': {
    id: 'm57',
    mId: 'M57',
    name: 'Ring Nebula',
    type: 'Planetary Nebula',
    constellation: 'Lyra',
    magnitude: '8.8',
    distance: '2,300 ly',
    description: 'A planetary nebula with a distinctive ring shape, formed from the outer layers of a dying star.'
  },
  'm51': {
    id: 'm51',
    mId: 'M51',
    name: 'Whirlpool Galaxy',
    type: 'Spiral Galaxy',
    constellation: 'Canes Venatici',
    magnitude: '8.4',
    distance: '23 Million ly',
    description: 'A grand-design spiral galaxy interacting with a smaller companion galaxy, NGC 5195.'
  },
  'm13': {
    id: 'm13',
    mId: 'M13',
    name: 'Hercules Cluster',
    type: 'Globular Cluster',
    constellation: 'Hercules',
    magnitude: '5.8',
    distance: '22,200 ly',
    description: 'One of the brightest globular clusters in the northern sky, containing hundreds of thousands of stars.'
  }
};