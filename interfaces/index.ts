// Interface for Card component props
export interface CardProps {
  title: string;
  description: string;
  image: string;
  price?: number;
  rating?: number;
  location?: string;
  onClick?: () => void;
}

// Interface for Button component props
export interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

// Interface for property listing
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  rating: number;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

// Interface for user
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  verified: boolean;
  joinDate: string;
}
