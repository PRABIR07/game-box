
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}



const useGeneres = () => useData<Genre>('/genres')
 
export default useGeneres;
