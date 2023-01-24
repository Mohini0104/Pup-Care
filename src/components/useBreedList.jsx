import { useQuery } from "@tanstack/react-query";
import fetchBreedist from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedist);
  return [results?.data?.breeds ?? [], results.status];
}
