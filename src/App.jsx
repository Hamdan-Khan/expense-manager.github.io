import Button from "./components/Button";
import Card from "./components/Card";
import Form from "./components/Form";
import TransactionSection from "./components/TransactionSection";
import { useGlobalContext } from "./context/Context";

function App() {
  const { form, trans } = useGlobalContext();
  const income = trans.filter((x) => x.type == "income");
  const expense = trans.filter((x) => x.type != "income");
  const sum1 = income.reduce((acc, curr) => {
    return acc + parseInt(curr.amount);
  }, 0);
  const sum2 = expense.reduce((acc, curr) => {
    return acc + parseInt(curr.amount);
  }, 0);
  return (
    <div className="">
      <div className="flex flex-col gap-3 max-w-[300px] box-shadow  p-5 rounded-3xl">
        <h1 className="text-2xl font-bold text-center mb-1">Expense Tracker</h1>
        <div className="font-semibold text-lg flex flex-row justify-between items-center">
          Balance: ${sum1 - sum2}
          <Button>{form ? "CANCEL" : "ADD"}</Button>
        </div>
        {form && (
          <div className="border border-zinc-400 p-3 rounded-2xl">
            <Form />
          </div>
        )}
        <div className="flex flex-row gap-2">
          <Card title={"Expense"} value={sum2} type={"secondary"} />
          <Card title={"Income"} value={sum1} type={"primary"} />
        </div>
        <TransactionSection />
        <a
          href="https://github.com/Hamdan-Khan"
          className="text-[10px] font-semibold text-right text-zinc-600"
          target={"_blank"}
        >
          &#169;<span className="hover:underline">Hamdan-Khan</span>
        </a>
      </div>
    </div>
  );
}

export default App;
