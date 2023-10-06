import {Link} from "react-router-dom";


const UserHeader = () => {
  return (
    <div className="">
      <Link to={'/'}>Home</Link>
      <Link to={'/animals'}>Animals</Link>
      <Link to={'/auth/login'}>Exit</Link>
    </div>
  );
};
export { UserHeader }; 