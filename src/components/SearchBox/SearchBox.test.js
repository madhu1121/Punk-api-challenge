import SearchBox from './SearchBox';
import { render, screen } from '@testing-library/react';

it("it should render the form", () => {
    //1. Arrange
    render(<SearchBox />);

    //2. Act
    const form = screen.getByRole("textbox");
    //name attribute of the form tag 

    //3. Assert
    expect(form).toBeInTheDocument();
})