import React, { FC, useState, useEffect, useCallback } from 'react'
import styled from "styled-components/native";
import { FlatList, Text } from 'react-native';
import axios from 'axios';
import ToggleHOC from './ToggleHOC';

interface Post {
  userId?: string,
  id: string,
  title?: string,
  body?: string
}

interface Test {
  response?: Post[],
  isExpanded: boolean,
  data: { name: string; lastName: string; };
}

const Container = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const CellContainer = styled.View`
  margin: 5px;  
  padding: 5px;
  border-width: 2px;
  border-style: solid;
  border-color: gray;
`

const First: FC = (props) => {
  const [response, setResponse] = useState<Post[] | null>(null);
  console.log("First props", props);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setResponse(result.data);
      } catch (error) {

      }
    })()
  }, []);

  const loadData = useCallback((({ item }: { item: Post }) => {
    return <CellContainer>
      <Text key={item.id}>{item.title}</Text>
    </CellContainer>
  }), [])

  const keyExtractor = useCallback((item: Post) => {
    return item.id
  }, []);

  return (
    <Container>
      <FlatList
        data={response}
        renderItem={loadData}
        keyExtractor={keyExtractor}
      />

    </Container>
  )
}

export default ToggleHOC(First);
