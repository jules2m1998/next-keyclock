import Home from "@/app/(public)/page";
import { render, screen } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber/dist/src/";

const feature = loadFeature("__tests__/app/Home/home.feature");

defineFeature(feature, (test) => {
  test("Contain header", ({ given, when, then }) => {
    given("I render home page", () => {
      render(<Home />);
    });
    then("Home page contain header", () => {
      const heading = screen.getByRole("heading", {
        name: /welcome to next\.js!/i,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
