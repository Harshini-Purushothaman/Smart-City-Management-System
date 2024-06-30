import React, { useState } from 'react';
import '../styles/ReportIssue.css';

const ReportIssues = () => {
  const [issue, setIssue] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Address: ${address}, Issue: ${issue}`);
    setIssue('');
    setName('');
    setAddress('');
  };

  return (
    <div className="report-issue">
      <h1>Report an Issue</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Your Address"
          required
        />
        <textarea
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="Please type your issue here..."
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReportIssues;
