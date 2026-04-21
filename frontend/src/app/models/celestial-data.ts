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
  }
};