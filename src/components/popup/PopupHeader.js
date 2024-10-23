import styled from 'styled-components';
import { FaMale, FaFemale, FaGenderless, FaQuestion } from 'react-icons/fa';

export function PopupHeader({ name, gender, image, status, species, type }) {
  // Функция для выбора иконки в зависимости от пола персонажа
  const renderGenderIcon = () => {
    switch (gender) {
      case 'Male':
        return <FaMale />;
      case 'Female':
        return <FaFemale />;
      case 'Genderless':
        return <FaGenderless />;
      default:
        return <FaQuestion />;
    }
  };

  return (
    <HeaderContainer>
      <Image src={image} alt={name} />
      <InfoContainer>
        <Name>
          {name} {renderGenderIcon()}
        </Name>
        <Details>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          {type && <p>Type: {type}</p>}
        </Details>
      </InfoContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.h2`
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 10px; /* Расстояние между именем и иконкой */
  color: #83bf46;
`;

const Details = styled.div`
  font-size: 18px;
  color: #ccc;
`;
