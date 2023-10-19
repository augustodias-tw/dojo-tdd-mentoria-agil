import { useEffect, useState } from "react";
import getTransactions from "./services/getTransactions";
import TransactionsTable from "./components/TransactionsTable/TransactionsTable";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((transactions) => {
      setTransactions(transactions);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <main className="container pt-4">
        {isLoading ? (
          <em>Loading...</em>
        ) : (
          <>
            <Filters />
            <TransactionsTable transactions={transactions} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
