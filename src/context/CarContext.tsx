import React, { createContext, useContext, useState, useEffect } from 'react';
import { Car, SearchFilters, CarFilters } from '../types/car';
import { CarService } from '../services/carService';

interface CarContextType {
  cars: Car[];
  searchFilters: SearchFilters;
  setSearchFilters: (filters: SearchFilters) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export function CarProvider({ children }: { children: React.ReactNode }) {
  const [cars, setCars] = useState<Car[]>([]);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({});
  const [activeCategory, setActiveCategory] = useState('Popular');

  useEffect(() => {
    const carService = CarService.getInstance();
    const results = carService.searchCars(searchFilters);
    const filteredResults = carService.filterCars(results, { category: activeCategory });
    setCars(filteredResults);
  }, [searchFilters, activeCategory]);

  return (
    <CarContext.Provider 
      value={{ 
        cars, 
        searchFilters, 
        setSearchFilters, 
        activeCategory, 
        setActiveCategory 
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

export function useCarContext() {
  const context = useContext(CarContext);
  if (context === undefined) {
    throw new Error('useCarContext must be used within a CarProvider');
  }
  return context;
}