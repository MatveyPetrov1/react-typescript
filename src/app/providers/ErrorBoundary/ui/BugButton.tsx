import React from "react";
import { Button } from "@/shared/ui/Button/Button";

//Компонент для тестирования

export const BugButton: React.FC = () => {
  const [error, setError] = React.useState<boolean>(false);

  const onThrowError = () => {
    setError(true);
  };

  React.useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrowError}>Throw Error</Button>;
};
