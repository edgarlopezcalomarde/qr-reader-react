import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

function HomePage() {
  return (
    <section className="flex-col sm:flex-row flex gap-2 justify-center items-center h-[100vh]">
      <Button>
        <Link to="/generate">Generate</Link>
      </Button>

      <Button>
        <Link to="/scanner">Scanner</Link>
      </Button>
    </section>
  );
}

export default HomePage;
