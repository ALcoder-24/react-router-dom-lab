import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    boxOwner: "",
    boxSize: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    navigate("/mailboxes"); // 👈 redirect after submission
  };

  return (
    <div>
      <h2>Mailbox Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Owner Name:</label>
        <input
          type="text"
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
        />

        <label>Box Size:</label>
        <select
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="">Select Size </option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Add Mailbox</button>
      </form>
    </div>
  );
};

export default MailboxForm;
