export interface Location {
  lat: number;
  lng: number;
}

export interface Pub {
  id: number;
  name: string;
  price: number;
  googleMapsLink: string;
  location: Location;
}

export interface PubData {
  pubs: Pub[];
} 