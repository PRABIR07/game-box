import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props{
  onSelectedGenre :(genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({selectedGenre,onSelectedGenre}:Props) => {
  const { data, isLoading, error } = useGeneres();
  if (error) return <Spinner />;
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <List>
      {isLoading &&
        skeleton.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="30px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold': 'normal'} onClick={()=> onSelectedGenre(genre)} variant="link" fontSize="lg">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
