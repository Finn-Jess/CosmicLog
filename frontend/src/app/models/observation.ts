export interface IObservation {
  _id?: string;
  targetId: string;
  date: string;
  location: string;
  bortleScale: number; 
  notes: string;
  ownerId: string;
}