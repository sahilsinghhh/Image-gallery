import React, { useState } from "react";
import {
  Card,
  CardFooter,
  Box,
  Flex,
  Input,
  Image,
  Button,
  Text,
  List,
  ListItem,
  Avatar,
  WrapItem,
  Stack,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

interface IPostCardProps {
  post: any;
}

const PostCard = (props: IPostCardProps) => {
  const { post } = props || {};
  const [showComment, setShowComment] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [commentedPost, setCommentedPost] = useState<any>({
    image: post,
    text: [],
  });
  const [length, setLength] = useState<number>(2);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {
    if (comment !== "") {
      setCommentedPost((prevCommentedPost:any) => ({
        ...prevCommentedPost,
        text: [...prevCommentedPost.text, comment],
      }));
      setComment("");
    }
  };

  const commentHandler = () => {
    setShowComment(true);
  };

  return (
    <Box  rounded="md">
      <Card boxShadow="2xl" maxW="md" >
        <Image
          src={post ? URL.createObjectURL(post) : ""}
          alt="post"
          objectFit="fill"
          height="300px"
          width="100%"
        />

        <CardFooter>
          {showComment ? (
            <>
              <Input
                value={comment}
                borderRadius={10}
                onChange={(e) => handleInputChange(e)}
                placeholder="Add Comment Here"
                size="md"
              />
              <WrapItem>
                <Button
                  colorScheme="linkedin"
                  marginX={5}
                  onClick={handlePostComment}
                >
                  Post
                </Button>
              </WrapItem>
            </>
          ) : (
            <Flex color="white">
              <Button
                onClick={commentHandler}
                flex="1"
                variant="ghost"
                leftIcon={<ChatIcon />}
              >
                Comment
              </Button>
            </Flex>
          )}
        </CardFooter>

        {commentedPost?.text.length > 0 && (
          <Text
            fontSize="14px"
            marginLeft={5}
            fontWeight={600}
            fontFamily={"sans-serif"}
            paddingBottom="8px"
          >
             Comments...  ({commentedPost?.text.length})
          </Text>
        )}

        <Flex
          overflowY="auto"
          borderRadius="md"
          sx={{
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555",
            },
          }}
        >
          {commentedPost?.text.length > 0 && (
            <List height={8} marginX={5} marginY={4} spacing={3}>
              {commentedPost?.text?.map((comment: string, index: number) => {
                if (index <= length - 1) {
                  return (
                    <>
                      <ListItem key={index} display={"flex"}>
                        <Avatar size={"xs"} marginRight={5} name={comment} />
                        <Text
                          fontSize="12px"
                          fontWeight={400}
                          fontFamily={"sans-serif"}
                        >
                          {comment}
                        </Text>
                      </ListItem>
                    </>
                  );
                }
              })}
            </List>
          )}
        </Flex>
        <Stack direction="row" spacing={4} margin={1} align={"flex-start"}>
          {commentedPost?.text?.length > 2 &&
            commentedPost.text.length > length && (
              <Button
                size="sm"
                onClick={() => setLength(length + 2)}
                colorScheme="teal"
                variant="ghost"
                fontSize="xs"
              >
                Load More ...
              </Button>
            )}
        </Stack>
      </Card>
    </Box>
  );
};

export default PostCard;
