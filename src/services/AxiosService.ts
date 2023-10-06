import axios, {AxiosResponse} from "axios";
import {BASE_URL} from "../configs";

export type AxiosRes<T> = Promise<AxiosResponse<T>>

const axiosService = axios.create({
    baseURL: BASE_URL
});

axiosService.interceptors.request.use()

axiosService.interceptors.response.use()

export {
    axiosService
}