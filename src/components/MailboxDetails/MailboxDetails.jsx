import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes, letters }) => {
    
const { mailboxId } = useParams();
const selectedMailBox = mailboxes.find(
    (box) => box._id === Number(mailboxId)
);

if(!selectedMailBox) {
    return <h2>Mailbox Not Found!</h2>;
}

const selectedLetters = letters.filter(
    (letter) => (letter.mailBoxId) === (mailboxId)
);


    
    return (
        <div>
            <h2>Mailbox #{selectedMailBox._id}</h2>
            <p><strong>Owner:</strong> {selectedMailBox.boxOwner}</p>
            <p><strong>Size:</strong> {selectedMailBox.boxSize}</p>

            <h3>Letters Sent to This Mailbox:</h3>
            {selectedLetters.length === 0 ? (
                <p>No letters yet.</p>
            ) : (
                <ul>
                    {selectedLetters.map((letter, index) => (
                        <li key={index}>
                           <p> <strong>To:</strong> {letter.recipient}</p>
                            <p><strong>Message:</strong> {letter.message}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MailboxDetails;