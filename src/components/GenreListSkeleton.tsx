import { List, ListItem, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px" justifyContent={"space-between"}>
        <SkeletonCircle size="40px" />
        <SkeletonText noOfLines={1} skeletonHeight={1} />
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
