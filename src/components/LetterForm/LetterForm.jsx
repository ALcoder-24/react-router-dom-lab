import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = ({ mailboxes, addLetter }) => {
    const [formData, setFormData] = useState({
        recipient: "",
        mailBoxId: "",
        message: "",
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
        addLetter(formData);

        navigate(`/mailboxes/${formData.mailBoxId}`);

        setFormData({
            recipientName: "",
            recipientBoxId: "",
            message: "",
        });
    };

    return (
        <div>
            <h2>Send a Letter</h2>

            <form onSubmit={handleSubmit}>
                <label>Recipient Name:</label>
                <input
                type="text"
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
                />

                <label>Message:</label>
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                />

                <label>Send To (Mailbox #):</label>
                <select
                name="mailBoxId"
                value={formData.mailBoxId}
                onChange={handleChange}
                >
                <option value=""> Select Mailbox </option>
                {mailboxes.map((box) => (
                   <option key={box._id} value={box._id}>
                    Box #{box._id} ({box.boxOwner})
                    </option>
                ))}
                </select>
                <button type="submit">Send Letter</button>
            </form>
        </div>
    );
};

export default LetterForm;
