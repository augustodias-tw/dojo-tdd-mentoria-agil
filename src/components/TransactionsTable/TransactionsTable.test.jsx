import { render, screen } from "@testing-library/react";
import TransactionsTable from "./TransactionsTable";

describe("TransactionsTable", () => {
  it("should render table headers correctly", () => {
    render(<TransactionsTable />);

    expect(
      screen.getByRole("columnheader", { name: /título/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /descrição/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /status/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /valor/i })
    ).toBeInTheDocument();
  });
});
