import React from 'react';

import { Text } from 'react-native';
import PostItem from '../../components/PostItem';

import { Container, FeedList } from './styles';

const Feed = () => {
  const posts = [
    {
      id: '1',
      user: 'somosestrelas',
      avatar: 'https://picsum.photos/id/1005/200/200',
      image: 'https://picsum.photos/600/600?random=1',
      likes: 1000,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos obcaecati, error ullam aperiam id possimus aspernatur saepe, eius eum sapiente quod reprehenderit quam consectetur. Illum officia incidunt maiores cumque dolores?',
      hashtags: '',
      place: 'Cinema Ouro Branco',
    },
    {
      id: '2',
      user: 'somosestrelas',
      avatar: 'https://picsum.photos/id/1005/200/200',
      image: 'https://picsum.photos/600/600?random=2',
      likes: 1000,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos obcaecati, error ullam aperiam id possimus aspernatur saepe, eius eum sapiente quod reprehenderit quam consectetur. Illum officia incidunt maiores cumque dolores?',
      hashtags: '',
      place: 'Cinema Ouro Branco',
    },
    {
      id: '3',
      user: 'somosestrelas',
      avatar: 'https://picsum.photos/id/1005/200/200',
      image: 'https://picsum.photos/600/600?random=3',
      likes: 1000,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos obcaecati, error ullam aperiam id possimus aspernatur saepe, eius eum sapiente quod reprehenderit quam consectetur. Illum officia incidunt maiores cumque dolores?',
      hashtags: '',
      place: 'Cinema Ouro Branco',
    },
  ];

  const renderItem = ({ item }: any) => <PostItem post={item} />;

  return (
    <Container>
      <FeedList
        data={posts}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Feed;
