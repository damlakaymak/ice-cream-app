
import Form from "."
import { fireEvent, render,screen } from "@testing-library/react"


test("Koşulların onaylanmasına göre button aktifliği",()=>{

render(<Form/>)


 const button = screen.getByRole("button");
 const checkbox = screen.getByRole("checkbox");


 expect(checkbox).not.toBeChecked();
 expect(button).toBeDisabled();
 fireEvent.click(checkbox);
 expect(button).toBeEnabled();
 fireEvent.click(checkbox);
 expect(button).toBeDisabled()



})

test("buttonun hover durumuna göre bildirim gözükür",()=>{

render(<Form/>)

const checkbox= screen.getByRole("checkbox");
const button = screen.getByRole("button");
const alert = screen.getByText(/Size gerçekten/i);


fireEvent.click(checkbox);
expect(alert).not.toBeVisible();

fireEvent.mouseEnter(button);
expect(alert).toBeVisible();

fireEvent.mouseLeave(button);

expect(alert).not.toBeVisible();

})