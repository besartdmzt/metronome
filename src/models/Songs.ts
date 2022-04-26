export interface Songs {
  tempo: List[];
}

export interface List {
  song_id: string;
  song_title: string;
  artis: {
    id: string;
    name: string;
  };
}
