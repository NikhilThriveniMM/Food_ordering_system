import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should check weather the ligin button is loaded or not" , () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByText(/cart/ig);

    console.log(loginBtn);

    expect(loginBtn).toBeInTheDocument();

})

it("Should check login and logout button is loaded or not" , () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const signInBtn = screen.getByRole("button",{name: "Sign In"});

    fireEvent.click(signInBtn);

    const signOutBtn = screen.getByRole("button",{name: "Sign Out"});

    // console.log(loginBtn);

    expect(signOutBtn).toBeInTheDocument();

})