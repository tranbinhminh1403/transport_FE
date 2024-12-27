import { descriptionConfig } from "../../config/constants/description";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";

interface DescriptionProps {
  children?: React.ReactNode;
}

export const Description = ({ children }: DescriptionProps) => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];
  const description = descriptionConfig[currentPath];

  return (
    <div className={styles.description}>
      <h3 className={styles.descriptionTitle}>{description}:</h3>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
