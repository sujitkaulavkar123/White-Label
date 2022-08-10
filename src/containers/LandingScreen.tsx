import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React, { FC, useCallback } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import { Album } from '../redux/photoReducer';
import { useFetchPhotoListQuery } from '../redux/rtkQuery';

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoaderText = styled.Text`
  font-size: 20px;
  height: 50px;
`;

const CellContainer = styled.View`
  margin: 5px;  
  padding: 5px;
  border-width: 2px;
  border-style: solid;
  border-color: gray;
`

function LandingScreen() {
  const navigation = useNavigation();

  const { data, isLoading, error } = useFetchPhotoListQuery();

  const loadData = useCallback((({ item }: { item: Album }) => {

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

  const keyExtractor = useCallback(((item: Album) => {
    return `${item.id}`
  }), []);

  return (
    <Container>
      {
        isLoading ? <LoaderText>Fetching Photos...</LoaderText> : <>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LoaderText>Logout</LoaderText>
          </TouchableOpacity>

          <View style={{ width: "100%", height: "90%" }}>
            <FlashList
              estimatedItemSize={200}
              data={data}
              renderItem={loadData}
              keyExtractor={keyExtractor}
            />
          </View>
        </>
      }

    </Container>
  );
}

export default LandingScreen;
