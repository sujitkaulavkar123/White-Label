import React, { FC, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { fetchUserList } from '../server';
import { Container } from './styles';

interface User {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}

const List: FC = () => {

  const [users, setUsers] = useState<User[] | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(0);

  useEffect(() => {
    fetchUserList(pageNumber);
  }, []);

  return (
    <Container>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => { }}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </Container>
  )
}

export default List;
