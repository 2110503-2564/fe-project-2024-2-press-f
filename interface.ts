export interface CompanyItem {
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
  
export interface CompanyJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: CompanyItem[]
}

export interface BookingItem {
  nameLastname: string;
  tel: string;
  company: string;
  bookDate: string;
}

export interface InterviewItem {
  _id: string,
  interviewDate: string,
  user: string,
  company: {
    _id: string,
    name: string,
    description: string,
    tel: string,
    id: string,
  }
  createdAt: string,
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