 import { getByTestId, render, screen } from "@testing-library/react";
 import userEvent from "@testing-library/user-event";
 import Toppings from ".";

 test("sosları ekleme ve çıkarma işleminin toplam fiyata etkisi", async () => {
   const user = userEvent.setup();

   render(<Toppings />);

   const toppings = await screen.findAllByRole("checkbox");

   const total = screen.getByTestId("total");

   toppings.forEach((i) => expect(i).not.toBeChecked());

   expect(total.textContent).toBe("0");

   await user.click(toppings[0])

   expect(total.textContent).toBe("3");

   await user.click(toppings[4])

   expect(total.textContent).toBe("6");

  
   await user.click(toppings[0])
   expect(total.textContent).toBe("3");
   await user.click(toppings[4])
  
   expect(total.textContent).toBe("0");

 });
