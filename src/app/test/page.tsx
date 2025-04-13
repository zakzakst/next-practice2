import { TestComponent } from "./components";
const url = "https://jsonplaceholder.typicode.com/todos/1";

const Page = async () => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
  } catch (err) {
    console.error(err);
  }
  return (
    <div>
      <p>test</p>
      <TestComponent />
    </div>
  );
};

export default Page;
