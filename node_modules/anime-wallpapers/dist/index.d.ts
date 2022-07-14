import { AnimeWall1, AnimeWall2, searchOpt } from "./typings";
export declare class AnimeWallpaper {
    constructor();
    getAnimeWall1(param: searchOpt): Promise<AnimeWall1[]>;
    getAnimeWall2(param: string): Promise<AnimeWall2[]>;
    getAnimeWall3(): Promise<AnimeWall2[]>;
    private _request;
}
