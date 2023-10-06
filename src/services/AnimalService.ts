import { urls } from "../configs";

import { axiosService, AxiosRes } from "./AxiosService";
import { AnimalInterface } from "../interfaces";

const animalService = {
    getAll: (): AxiosRes<AnimalInterface[]> =>
        axiosService.get(urls.animals.animals),
    getAnimalById: (id: string): AxiosRes<AnimalInterface> =>
        axiosService.get(`${urls.animals.animals}/${id}`),
    postAnimal: (animal: AnimalInterface) =>
        axiosService.post(urls.animals.animals, animal),
    approveAnimalById: (id: string) =>
        axiosService.patch(`${urls.animals.approve}/${id}`),
    rejectAnimalById: (id: string) =>
        axiosService.patch(`${urls.animals.reject}/${id}`),
};

export { animalService };
