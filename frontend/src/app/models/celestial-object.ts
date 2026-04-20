export interface ICelestialObject {
  name: string;
  type: string; // galaxy, star, planet etc.
  ra?: number;
  dec?: number;
  magnitude?: number;
}