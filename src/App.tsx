import Card from './components/card/Card';
import Header from './components/header/Header';

function App() {
  return (
    <div className="flex flex-col overflow-hidden min-h-[100vh]">
      <Header />
      <main className="flex-1 basis-[100%} my-[20px]">
        <div className="_container">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[10px] gap-y-[20px]">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
