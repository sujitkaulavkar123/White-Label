import React, { Component, ComponentType } from "react";
import { Text } from "react-native"
import styled from "styled-components/native";

const ClickMeBtn = styled.TouchableHighlight`
  width: 100px;
  height: 45px;
  backgroundColor: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface MyState {
  isExpanded?: boolean
}

interface Data {
  data: { name: string; lastName: string; }
}

function ToggleHOC(WrappedComponents: ComponentType<MyState & Data>) {

  return class extends Component<MyState & Data, MyState> {
    constructor(props: Data) {
      super(props);
      this.state = {
        isExpanded: false
      }
    }

    handleButtonClick = () => {
      this.setState({
        isExpanded: true
      })
    }

    render() {
      const { isExpanded } = this.state;
      return isExpanded ? <WrappedComponents isExpanded={isExpanded} {...this.props} /> : <ClickMeBtn onPress={this.handleButtonClick}>
        <Text>Click me</Text>
      </ClickMeBtn>
    }
  }
}

export default ToggleHOC;
