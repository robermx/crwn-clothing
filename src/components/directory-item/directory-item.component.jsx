import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemContainer,
  DirectoryItemBody,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageurl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageurl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
