import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //arrange
    const {getByText} = render(<CheckoutForm />);
    //act
    const header = getByText(/checkout form/i);
    //assert
    expect(header).toBeInTheDocument();
    expect(header).toBeVisible()
});

test("form shows success message on submit with form details", async () => {
    const {getByLabelText, getByText, findAllByText, getByRole} = render(<CheckoutForm />);

    //query for form inputs
    // const exampleInput = getByLabelText(/example/i);
    const firstName = getByLabelText(/First Name:/i);
    const lastName = getByLabelText(/Last Name:/i);
    const address = getByLabelText(/address:/i);
    const city = getByLabelText(/city:/i);
    const state = getByLabelText(/state/i);
    const zip = getByLabelText(/zip:/i);


    //fire event function to fill in inputs
    // fireEvent.change(exampleInput ,{
    //     target: {name: "example", value: "lorem ipsum"}
    // });
    fireEvent.change(firstName ,{
        target: {name: "firstName", value: "Lizzie"}
    });
    fireEvent.change(lastName ,{
        target: {name: "lastName", value: "Smith"}
    });
    fireEvent.change(address ,{
        target: {name: "address", value: "123 street name"}
    });
    fireEvent.change(city ,{
        target: {name: "city", value: "New York"}
    });
    fireEvent.change(state ,{
        target: {name: "state", value: "Kansas"}
    });
    fireEvent.change(zip ,{
        target: {name: "zip", value: "45678"}
    });
    //query for submit button
    const submitButton = getByRole('button',{text:'checkout'});

    //click the button
    fireEvent.click(submitButton);

    //assertion
    // findAllByText(/lorem ipsum/i)
    await findAllByText(/Lizzie/i)
    await findAllByText(/Smith/i)
    await findAllByText(/123 street name/i)
    await findAllByText(/New York/i)
    await findAllByText(/Kansas/i)
    await findAllByText(/45678/i)
});
