export interface IObservation {
  _id?: string;
  title: string;
  description: string;
  date: string;
  location: string;
  bortleScale?: number;
  imageUrl?: string;
}