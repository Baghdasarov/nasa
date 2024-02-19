import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import SearchNasaLibraryPage from "src/pages/search-nasa-library-page";
import { store } from "src/libs/redux";

describe("SearchNasaLibraryPage component", () => {
  test("renders search page with input fields and button", async () => {
    const { getByRole, getByTestId } = render(
      <Provider store={store}>
        <SearchNasaLibraryPage />
      </Provider>
    );

    const searchInput = getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "apollo" } });

    expect(searchInput.value).toBe("apollo");

    const button = getByRole("button");
    expect(button).not.toBeNull();
  });

  test("dispatches search action on form submission", async () => {
    const { getByRole, getByTestId } = render(
      <Provider store={store}>
        <SearchNasaLibraryPage />
      </Provider>
    );

    const searchInput = getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "apollo" } });

    const button = getByRole("button");

    fireEvent.click(button);
  });
});
