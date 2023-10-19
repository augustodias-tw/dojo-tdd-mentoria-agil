import { render, screen } from "@testing-library/react";
import TransactionsTable from "./TransactionsTable";

describe("TransactionsTable", () => {
  it("should render table headers correctly", () => {
    render(<TransactionsTable transactions={[]} />);

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

  it("should render the transaction values", () => {
    const transactions = [
      {
        id: "5f89f9f257fe42957bf6dbfd",
        title: "Resgate",
        description: "et labore proident aute nulla",
        status: "created",
        amount: 2078.66,
        date: "2018-12-22",
        from: "Aposentadoria",
        to: "Conta Warren",
      },
    ];

    render(<TransactionsTable transactions={transactions} />);

    expect(screen.getByText(transactions[0].title)).toBeInTheDocument();
    expect(screen.getByText(transactions[0].description)).toBeInTheDocument();
    expect(screen.getByText(transactions[0].status)).toBeInTheDocument();
    expect(screen.getByText(transactions[0].amount)).toBeInTheDocument();
  });
});
