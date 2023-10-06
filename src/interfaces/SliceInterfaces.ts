interface AnimalInterface {
  name: string;
  age: number;
  weight: number;
  problemStatus: boolean;
}

interface AnimalSliceInterface {
  animals: AnimalInterface[];
  animal: AnimalInterface | null;
  loading: boolean;
  error: string | null;
  nextPage: string | null;
  prevPage: string | null;
}

interface AnimalActionIntarface {
  type: string,
  payload?: any
}

export type { AnimalSliceInterface, AnimalInterface, AnimalActionIntarface };