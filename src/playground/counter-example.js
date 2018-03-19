

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  console.log('minusOne');
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button id="my_id" className="button" onClick={addOne}>+1</button>
      <button id="my_id" className="button" onClick={minusOne}>-1</button>
      <button id="my_id" className="button" onClick={reset}>reset</button>    
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
