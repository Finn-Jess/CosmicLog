export interface ICelestialObject {
  _id: string;
  name: string;
  commonName: string; 
  catalogId: string;  
  type: 'Galaxy' | 'Nebula' | 'Star Cluster' | 'Planet';
}