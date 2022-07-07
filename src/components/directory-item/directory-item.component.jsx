import { Link } from "react-router-dom";
import "./directory-item.styles.scss";
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    // <div className="directory-item-container">
    <Link to={title.toLowerCase()} className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="body">
        <h2 className="name">{title}</h2>
        <p>Shop now</p>
      </div>
    </Link>
    // </div>
  );
};

export default DirectoryItem;
