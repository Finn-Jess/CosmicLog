export interface IObservation {
  _id?: string;
  targetName: string;
  date: string;
  bortleScale: number;
  notes: string;
  ownerId: string;
}