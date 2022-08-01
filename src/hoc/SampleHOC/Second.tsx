import React, { FC, useState, useEffect, useCallback } from 'react'
import styled from "styled-components/native";
import { View, Image, Text } from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image'
import { FlashList } from '@shopify/flash-list';
import ToggleHOC from './ToggleHOC';

interface Post {
  albumId?: number,
  id: string,
  title?: string,
  url?: string,
  thumbnailUrl?: string
}

interface Test {
  response?: Post[],
  data: { name: string; lastName: string; }
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

const Second: FC<Test> = (props) => {
  const [response, setResponse] = useState<Post[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/photos')
        setResponse(result.data);
      } catch (error) {

      }
    })()
  }, []);

  const loadData = useCallback((({ item }: { item: Post }) => {

    return <CellContainer key={item.id}>
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: item.thumbnailUrl,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </CellContainer>
  }), [])

  const keyExtractor = useCallback(((item: Post) => {
    return item.id
  }), []);

  return (
    <Container>
      <View style={{ width: "100%", height: "100%" }}>
        <FlashList
          estimatedItemSize={200}
          data={response}
          renderItem={loadData}
          keyExtractor={keyExtractor}
        />
      </View>

    </Container>
  )
}

export default ToggleHOC(Second);
