export interface ApiAnimalResponse {
  animal: AnimalPetFinder;
}
export interface ApiAnimalsApiResponse {
  animals: AnimalPetFinder[];
  pagination: Pagination;
}

export interface Pagination {
  count_per_page: number;
  total_count: number;
  current_page: number;
  total_pages: number;
  _links: Links2;
}

interface Links2 {
}

export interface AnimalPetFinder {
  id: number;
  organization_id: string;
  url: string;
  type: string;
  species: string;
  breeds: Breeds;
  colors: Colors;
  age: string;
  gender: string;
  size: string;
  coat: string;
  name: string;
  description: string;
  photos: Photo[];
  status: string;
  attributes: Attributes;
  environment: Environment;
  tags: string[];
  contact: Contact;
  published_at: string;
  distance: number;
  _links: Links;
}

interface Links {
  self: Self;
  type: Self;
  organization: Self;
}

interface Self {
  href: string;
}

interface Contact {
  email: string;
  phone: string;
  address: Address;
}

interface Address {
  address1?: null | string;
  address2?: null | string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}

interface Environment {
  children: boolean;
  dogs: boolean;
  cats: boolean;
}

interface Attributes {
  spayed_neutered: boolean;
  house_trained: boolean;
  declawed: boolean;
  special_needs: boolean;
  shots_current: boolean;
}

interface Photo {
  small: string;
  medium: string;
  large: string;
  full: string;
}

interface Colors {
  primary: string;
  secondary?: null | string;
  tertiary?: null | string;
}

interface Breeds {
  primary: string;
  secondary?: null | string;
  mixed: boolean;
  unknown: boolean;
}