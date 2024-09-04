import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function ButtonLink({ type, to, className, children }) {
  if (type === 'link') {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <Button className={className}>
      {children}
    </Button>
  );
}

export default ButtonLink;