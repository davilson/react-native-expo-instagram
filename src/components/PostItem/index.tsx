import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Options,
  Image,
  Avatar,
  User,
  Place,
  Actions,
  ActionsGroup,
  Action,
  Likes,
  Description,
} from './styles';

type PostItemProps = {
  post: {
    id: string;
    user: string;
    avatar: string;
    image: string;
    likes: number;
    description: string;
    hashtags: string;
    place: string;
  };
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Container>
      <Header>
        <Avatar source={{ uri: post.avatar }} resizeMode="cover" />
        <Title>
          <User>{post.user}</User>
          <Place>{post.place}</Place>
        </Title>
        <Options onPress={() => {}}>
          <Entypo name="dots-three-horizontal" size={24} color="#000000" />
        </Options>
      </Header>
      <Image source={{ uri: post.image }} resizeMode="cover" />
      <Actions>
        <ActionsGroup>
          <Action onPress={() => {}}>
            <AntDesign name="hearto" size={24} color="black" />
          </Action>
          <Action onPress={() => {}}>
            <Ionicons name="chatbubble-outline" size={24} color="black" />
          </Action>
          <Action onPress={() => {}}>
            <Feather name="send" size={24} color="black" />
          </Action>
        </ActionsGroup>
        <Action onPress={() => {}}>
          <Feather name="bookmark" size={24} color="black" />
        </Action>
      </Actions>
      <Likes>{`${post.likes} likes`}</Likes>
      <Description>{post.description}</Description>
    </Container>
  );
};

export default PostItem;
