// ---------------------------------------------------------------
// 1. THE MENU
// ---------------------------------------------------------------

// TS: These three objects share a structure - declare an interface (call it
//     MenuItem) that describes it, and annotate each declaration with it.
//     Note that 'nutrition' is a nested object, so it needs a nested type.
export type Course = "starter" | "main" | "dessert";

export interface MenuItem {
  id: number;
  name: string;
  course: Course;
  price: number;
  nutrition: {
    calories: number;
    allergens: string[];
  };
  discountPercent?: number;
  availableFrom?: Date;
}

export interface ComboDeal {
  id: number;
  name: string;
  items: MenuItem[];
  price: number;
}

export type OrderLine = MenuItem | ComboDeal;