import { useNavigate } from 'react-router-dom'      

function MyLinkButton() {
  const navigate = useNavigate()
  return (
      <button onClick={() => navigate("/home")}>
        Go Home
      </button>
  );
}
export default MyLinkButton;