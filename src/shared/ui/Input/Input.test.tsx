import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('should render', () => {
    render(<Input label="Test" value="test" onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).toBeInTheDocument();
  });
  it('should call onChange when input value changes', () => {
    const onChange = vi.fn();
    render(<Input label="Test" value="test" onChange={onChange} />);
    fireEvent.change(screen.getByLabelText('Test'), { target: { value: 'test2' } });
    expect(onChange).toHaveBeenCalledWith('test2');
  });
  it ('Проверка поля ввода', () => {
    render(<Input label="Test" value="1234" onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText('Test'), { target: { value: '1234' } });
    expect(screen.getByLabelText('Test')).toHaveValue('1234');
  });
});