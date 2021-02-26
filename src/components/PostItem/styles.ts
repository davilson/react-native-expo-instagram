import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Title = styled.View`
  justify-content: center;
  flex: 1;
  padding: 0 10px;
`;

export const User = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #272a27;
`;

export const Place = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #666666;
`;

export const Options = styled.TouchableOpacity``;

export const Image = styled.Image`
  width: 100%;
  height: 400px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 15px;
`;

export const ActionsGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Action = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const Likes = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #272a27;
  padding-left: 15px;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  font-size: 13px;
  font-weight: 400;
  color: #272a27;
  padding: 0 15px;
  line-height: 18px;
`;
