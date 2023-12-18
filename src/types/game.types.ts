export namespace GAMES {

  export interface IPlatform {
    id:number;
    name:string;
    slug:string;
  }
  export interface IGame {
    id: number;
    name: string;
    background_image: string;
    rating_top:number;
    parent_platforms:{platform:IPlatform}[];
    metacritic:number;

  }
}
