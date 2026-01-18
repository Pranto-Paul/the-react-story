import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';

const QueueForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    setName('');
    setService('');
  };

  return (
    <form
      className="flex flex-col gap-4 p-4 bg-slate-700 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold text-indigo-300">Add Customer</h2>

      <input
        type="text"
        name="customer name"
        placeholder="Customer name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-style"
      />

      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="select-style"
      >
        <option value="">Select service</option>
        <option value="consultation">Consultation</option>
        <option value="payment">Payment</option>
        <option value="support">Support</option>
      </select>

      <button type="submit" className="btn-primary flex items-center gap-2">
        <FaUserPlus />
        Add customer
      </button>
    </form>
  );
};

export default QueueForm;
