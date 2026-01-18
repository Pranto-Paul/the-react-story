import { useState } from 'react';
import Display from './components/Display';
import QueueForm from './components/QueueForm';

const App = () => {
  const [queue, setQueue] = useState([]);
  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: 'waiting' }]);
  };
  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) => {
        return customer.id === id
          ? { ...customer, status: newStatus }
          : customer;
      })
    );
  };
  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  return (
    <div className="h-screen bg-slate-900 text-white flex flex-col">
      <header className="text-center flex flex-col pt-6 pb-4 bg-slate-800 shadow-md">
        <h2 className="text-3xl font-extrabold tracking-wide text-indigo-400">
          Queue Management Application
        </h2>
        <p className="text-slate-300 mt-1">Manage your customers efficiently</p>
      </header>
      <main className="flex flex-1 p-6 gap-6">
        <div className="flex-1 bg-slate-800 rounded-lg shadow-lg p-4">
          <QueueForm onAdd={addToQueue} />
        </div>
        <div className="flex-3 bg-slate-800 rounded-lg shadow-lg p-4">
          <Display
            queue={queue}
            onUpdate={updateStatus}
            onRemove={removeFromQueue}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
