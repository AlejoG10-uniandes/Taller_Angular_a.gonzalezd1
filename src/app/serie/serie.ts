export class Serie {
  // ---------
  // Atributos
  // ---------

  // id de la pelicula
  id: number;

  // nombre de la pelicula
  name: string;

  // cadena de la pelicula
  channel: string;

  // numero de temporadas que tiene la pelicula
  seasons: number;

  // resumen de la pelicula
  description: string;

  // link para ver la pelicula
  webpage: string;

  // imagen de la pelicula
  poster: string;

  // -----------
  // Constructor
  // -----------

  constructor(
    pId: number,
    pName: string,
    pChannel: string,
    pSeasons: number,
    pDescription: string,
    pWebpage: string,
    pPoster: string
  ) {
    this.id = pId;
    this.name = pName;
    this.channel = pChannel;
    this.seasons = pSeasons;
    this.description = pDescription;
    this.webpage = pWebpage;
    this.poster = pPoster;
  }
}
