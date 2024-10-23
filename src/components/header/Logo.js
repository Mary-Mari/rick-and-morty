import styled from 'styled-components';
import widgetLogo from '../../assets/widget-logo.png';

export function Logo() {
  return <StyledLogo src={widgetLogo} alt="logo" />;
}

const StyledLogo = styled.img`
  max-width: 300px;
  user-select: none;
  margin-bottom: 20px; // Убираем условие, добавляем margin-bottom для адаптивности по умолчанию

  @media (min-width: 930px) {
    margin-bottom: 0; // Убираем margin-bottom на больших экранах
  }
`;
