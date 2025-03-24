export interface VenueItem {
  _id: string,
  name: string,
  address: string,
  district: string,
  province: string,
  postalcode: string,
  tel: string,
  picture: string,
  dailyrate: number,
  __v: number,
  id: string
}
  
export interface VenueJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: VenueItem[]
}

export interface BookingItem {
  nameLastname: string;
  tel: string;
  venue: string;
  bookDate: string;
}

export interface InterviewItem {
  _id: string,
  interviewDate: Date,
  user: string,
  company: string,
  createdAt: Date,
  __v: number
}

export  interface InterviewJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: InterviewItem[]
}

export interface CompanyItem {
  _id: string,
  name: string,
  address: string,
  website: string,
  description: string,
  tel: string,
  __v: number
}

export  interface CompanyJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: CompanyItem[]
}