import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>All Mailboxes</h2>
      <div className="mailbox-list" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {mailboxes.map((mailbox) => (
          <Link
            key={mailbox._id}
            to={`/mailboxes/${mailbox._id}`}
            className="mail-box"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "100px",
              backgroundColor: "#ccc",
              color: "black",
              fontWeight: "bold",
              textDecoration: "none",
              borderRadius: "8px",
            }}
          >
            Box #{mailbox._id}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MailboxList;
