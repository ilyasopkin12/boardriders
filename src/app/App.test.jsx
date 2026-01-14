import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  // Проверяем, что приложение рендерится (ищем любой элемент из Header)
  const headerElement = screen.getByText(/Москва/i);
  expect(headerElement).toBeInTheDocument();
});
