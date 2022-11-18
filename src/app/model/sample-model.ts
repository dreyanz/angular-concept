
export class ApiData {

    page : number = 0
    per_page : number = 0
    total : number = 0
    total_page : number = 0
    data : UserInfo[] = []
    
}

export class UserInfo {
    id : number = 0
    email : string = ""
    first_name : string = ""
    last_name : string = ""
    avatar : string = ""
    name? : string
    job? : string
    createdAt? : string
}

export class CreateUser {
    name : string = ""
    job : string = ""
}

export class Hero {

    constructor(
      public id?: number,
      public name?: string,
      public power?: string,
      public alterEgo?: string,
      public email?: string) {
  
    }
  
  }
  