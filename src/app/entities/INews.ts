export interface INews{
  id?:number,
  title?:string,
  text?:string,
  date?:string,
}
export interface IAttach{
  id?:number,
  path?:string,
  filename?:string,
  news_id?:number
}
