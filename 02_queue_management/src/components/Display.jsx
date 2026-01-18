const Display = ({ queue, onUpdate, onRemove }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-indigo-300 mb-3">Current Queue</h2>
      {queue?.length > 0 && (
        <div className="overflow-hidden max-h-96 mt-2 rounded-xl text-white font-semibold w-full p-4 bg-slate-800 shadow-lg">
          {queue.map((customer) => (
            <div
              key={customer.id}
              className="queue-card flex justify-between items-center mb-4 last:mb-0"
            >
              <div className="flex flex-col">
                <h2 className="text-2xl text-blue-300 font-bold">
                  {customer.name}
                </h2>
                <p className="text-amber-200 capitalize">{customer.service}</p>
                <p
                  className={`mt-1 text-sm font-medium ${
                    customer.status === 'waiting'
                      ? 'text-amber-500'
                      : 'text-green-400'
                  }`}
                >
                  {customer.status}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className="btn-serve disabled-btn"
                  disabled={customer.status === 'completed'}
                  onClick={() => onUpdate(customer.id, 'completed')}
                >
                  Serve
                </button>
                <button
                  className="btn-remove"
                  onClick={() => onRemove(customer.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Display;
