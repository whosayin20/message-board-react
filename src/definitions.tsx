export enum Route {
    CREATE = 'CREATE',
    VIEW = 'VIEW'
  }
  
  export type Message = {
    id: number,
    subject: string,
    body: string,
    read: boolean
  }