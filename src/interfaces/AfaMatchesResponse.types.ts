interface Team {
  id: string;
  sigla: string;
  nombre: string;
  goles: string;
  golesPenal: string;
  logo: string;
}
export interface Match {
  id: string;
  campeonato: {
    id: string;
    key: string;
    name: string;
    long_name: string;
  };
  Fecha: {
    label: string;
    fecha: string;
    hora: string;
    gmt: string;
  };
  Inicio: {
    fecha: string;
    hora: string;
    gmt: string;
  };
  tiempoEvento: {
    tiempos: string;
    minutosJugados: string;
    SegundosJugados: string;
  };
  estadoEvento: {
    id: string;
    desc: string;
  };
  EquipoLoc: Team;
  EquipoVis: Team;
  incidencias: any[];
  Medios: any[];
}
export interface AfaMatches {
  Partidos: Match[];
  MosotrarLogoCampeonato: number;
  ImgLogoCampeonato: string;
}
