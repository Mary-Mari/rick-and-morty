import styled from 'styled-components';
import { Logo } from './Logo';
import { useData } from '../providers/DataProvider';

export function Header() {
  const { setApiURL } = useData();

  const handleFilterChange = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const status = form.status.value;
    const species = form.species.value;
    const gender = form.gender.value;

    const queryParams = new URLSearchParams();

    if (name) queryParams.set('name', name);
    if (status) queryParams.set('status', status);
    if (species) queryParams.set('species', species);
    if (gender) queryParams.set('gender', gender);

    // Устанавливаем API URL с параметрами фильтрации
    setApiURL(
      `https://rickandmortyapi.com/api/character/?${queryParams.toString()}`
    );
  };

  return (
    <HeaderContainer>
      <Logo />
      <FilterForm onSubmit={handleFilterChange}>
        <input name="name" placeholder="Name" />
        <select name="status">
          <option value="">Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select name="species">
          <option value="">Species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
        <select name="gender">
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <button type="submit">Filter</button>
      </FilterForm>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FilterForm = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  input,
  select,
  button {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;
