export enum LocalesType {
  FA = "fa-IR",
  EN = "en-US",
  AR = "ar-UA",
}

export type finalResultType = {
  data: finalResultItemType;
  type: string;
};

export type finalResult = Array<finalResultType>;

export type finalResultItemType = {
  action: string;
  address: string;
  area: string;
  backgroundImage: string;
  backgroundImageCustom: string;
  badges: Array<any>;
  best_coupon: string;
  bid: boolean;
  budgetClass: string;
  childType: string;
  city: string;
  click_id: null;
  commentCount: number;
  containerFee: number;
  costsForTwo: number;
  countOfUserImages: number;
  countReview: number;
  coupon_count: number;
  coverPath: string;
  cpc_campaign_hash: null;
  cuisinesArray: Array<any>;
  defLogo: string;
  delay: string;
  delay_time: number;
  deliver: boolean;
  deliveryArea: string;
  deliveryFee: number;
  deliveryFeeDiscount: number;
  deliveryGuarantee: boolean;
  deliveryTime: number;
  description: string;
  discount: number;
  discountForAll: boolean;
  discountStartHour1: string;
  discountStartHour2: string;
  discountStopHour1: string;
  discountStopHour2: string;
  discountType: null;
  discountValue: number;
  discountValueForView: number;
  establishment: string;
  eta: number;
  foodTypes: Array<any>;
  has_coupon: boolean;
  has_delay: boolean;
  id: number;
  isFavorite: boolean;
  isOpen: boolean;
  isZFExpress: boolean;
  is_ecommerce: boolean;
  is_economical: boolean;
  is_food_party: boolean;
  is_grocery_economic: boolean;
  is_grocery_returnable: boolean;
  is_grocery_vip: boolean;
  is_market_party: boolean;
  lat: number;
  logo: string;
  lon: number;
  maxDeliveryFee: number;
  max_eta: number;
  menuImage: [];
  menuUrl: string;
  minDeliveryFee: number;
  minOrder: number;
  min_eta: number;
  mostPopularItems: string;
  noOrder: boolean;
  onlineOrder: boolean;
  open_at_eta: boolean;
  paymentTypes: Array<number>;
  phone: string;
  preOrderEnabled: boolean;
  priority: number;
  rate: number;
  rating: number;
  recommendedFor: string;
  restaurantClass: string;
  restaurantTypes: [];
  schedules: Array<any>;
  serviceFee: number;
  status: number;
  status_description: string;
  status_text: string;
  status_title: string;
  superTypeAlias: string;
  tax: number;
  taxEnabled: boolean;
  taxEnabledInDeliveryFee: boolean;
  taxEnabledInPackaging: boolean;
  taxEnabledInProducts: boolean;
  taxIncluded: boolean;
  title: string;
  total_time: number;
  trendingScore: number;
  userImage: Array<any>;
  vendorCode: string;
  vendorType: string;
  vendorTypeTitle: string;
  voteCount: number;
  website: string;
};

export type vendors = {
  count: number;
  extra_sections: extraSectionsType;
  finalResult: finalResult;
  meta_tags: { header: string; title: string; description: string };
  open_count: number;
};

export type extraSectionsType = {
  categories: categories;
  filters: filters;
};

export type categories = {
  data: [];
  single_choice: boolean;
};

export type filters = {
  sections: Array<{
    data: Array<{
      image: null;
      kind: string;
      selected: boolean;
      single_choice: boolean;
      title: string;
      value: string;
    }>;
    section_name: string;
    section_name_fa: string;
  }>;
  top: {
    data: Array<{
      image: null;
      kind: string;
      selected: boolean;
      single_choice: boolean;
      title: string;
      value: string;
    }>;
  };
};
