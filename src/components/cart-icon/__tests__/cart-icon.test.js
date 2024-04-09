import { renderWithProviders } from "../../../utils/test/test.utils";
import { screen } from "@testing-library/react";

import CartIcon from "../cart-icon.component";

describe("Cart icon test", () => {
  test("uses preloaded state to render", () => {
    const initialCartItems = [
      { id: 1, name: "item", imageUrl: "test", price: 10, quantity: 1 },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });

    const cartIconElement = screen.getByText("1");
    expect(cartIconElement).toBeInTheDocument();
  });
});
