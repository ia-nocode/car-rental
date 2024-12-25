export interface Car {
  id: string;
  make: string;
  model: string;
  name: string;
  year: number;
  price: number;
  transmission: string;
  seats: number;
  image: string;
  rating: number;
  category: 'Popular' | 'Large Car' | 'Small Car' | 'Exclusive Car';
}

export interface SearchFilters {
  pickupLocation?: string;
  dropoffLocation?: string;
  pickupDate?: string;
  pickupTime?: string;
}

export interface CarFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  transmission?: string;
  seats?: number;
}