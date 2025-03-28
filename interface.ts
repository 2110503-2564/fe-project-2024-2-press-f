export interface BookingItem {
  nameLastname: string;
  tel: string;
  company: string;
  bookDate: string;
}

export interface InterviewItem {
  _id: string,
  interviewDate: string,
  user: {
    _id: string,
    name: string,
    role: string,
    email: string,
    id: string,
  },
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
  data: InterviewItem[],
  userRole: string,
}

export interface CompanyItem {
  _id: string,
  id:string,
  name: string,
  address: string,
  website: string,
  description: string,
  tel: string,
  picture: string,
  __v: number
}

export  interface CompanyJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: CompanyItem[]
}