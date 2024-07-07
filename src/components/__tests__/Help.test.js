import { render, screen } from "@testing-library/react";
import Help from "../Help";
import "@testing-library/jest-dom"

test("testing the help component" , () => {
    render(<Help/>)

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("testing the button is present or not" , () => {
    render(<Help/>)

    const input = screen.getByPlaceholderText("Enter your name");

    expect(input).toBeInTheDocument();

})
// test("testing the button is present or not" , () => {
//     render(<Help/>)

//     const input = screen.getAllByRole("textbox");

//     expect(input).toBeInTheDocument();

// })