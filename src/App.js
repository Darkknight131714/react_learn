import "./App.css";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
function App() {
  return (
    <div className="ui container comments">
      <br></br>
      <ApprovalCard>
        <CommentDetail
          author="Gautam"
          comment="Bonjour"
          image={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Aum"
          comment="Shame it is!"
          image={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Aryan"
          comment="Snek"
          image={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
