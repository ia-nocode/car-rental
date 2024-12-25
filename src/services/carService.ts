import { Car, SearchFilters, CarFilters } from '../types/car';

const STORAGE_KEY = 'car_rental_data';

// Initial dummy data
const initialCars: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Rush',
    name: 'All New Rush',
    year: 2024,
    price: 72,
    transmission: 'Automatic',
    seats: 5,
    rating: 4.8,
    category: 'Popular',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738'
  },
  {
    id: '2',
    make: 'BMW',
    model: 'X5',
    name: 'BMW X5',
    year: 2024,
    price: 120,
    transmission: 'Automatic',
    seats: 5,
    rating: 4.9,
    category: 'Large Car',
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b'
  },
  {
    id: '3',
    make: 'Mercedes',
    model: 'C-Class',
    name: 'Mercedes C300',
    year: 2024,
    price: 95,
    transmission: 'Automatic',
    seats: 4,
    rating: 4.7,
    category: 'Small Car',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8'
  },
  {
    id: '4',
    make: 'Porsche',
    model: '911',
    name: 'Porsche 911',
    year: 2024,
    price: 200,
    transmission: 'Automatic',
    seats: 2,
    rating: 5.0,
    category: 'Exclusive Car',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f371e'
  }
];

export class CarService {
  private static instance: CarService;
  
  private constructor() {
    // Initialize localStorage with dummy data if empty
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialCars));
    }
  }

  static getInstance(): CarService {
    if (!CarService.instance) {
      CarService.instance = new CarService();
    }
    return CarService.instance;
  }

  getAllCars(): Car[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  searchCars(filters: SearchFilters): Car[] {
    const cars = this.getAllCars();
    
    if (!filters.pickupLocation && !filters.pickupDate) {
      return cars;
    }

    return cars.filter(car => {
      // In a real app, we would check availability based on location and dates
      // For demo purposes, we'll just return all cars
      return true;
    });
  }

  filterCars(cars: Car[], filters: CarFilters): Car[] {
    return cars.filter(car => {
      if (filters.category && car.category !== filters.category) return false;
      if (filters.minPrice && car.price < filters.minPrice) return false;
      if (filters.maxPrice && car.price > filters.maxPrice) return false;
      if (filters.transmission && car.transmission !== filters.transmission) return false;
      if (filters.seats && car.seats !== filters.seats) return false;
      return true;
    });
  }
}