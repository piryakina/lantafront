export interface IFile{
  id?: number,
  filename?: string,
  status?: string,
  period?:string,
  comm?: string
  date?:string
}
export interface IRow{
  id?:number,
  sp?:string,
  filename?:string,
  status?:string,
  period?:string,
  idFile?:number,
  date?:string,
  comment?:string,
  sla?:string
  is_agreed?:string,
  visible?: boolean
  invoices?:string[]
}
export interface IStatus{
  id?:number,
  status_name?:string
}
export interface IComment{
  id?:number,
  comments?:string
}
