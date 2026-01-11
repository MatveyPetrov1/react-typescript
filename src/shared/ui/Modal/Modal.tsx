import React from "react";
import styles from "./Modal.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import { useTheme } from "@/app/providers/ThemeProvider";

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;

  const { theme } = useTheme();
  const [isClosing, setIsClosing] = React.useState<boolean>(false);
  // Зачем useRef? Если по какой то причине из dom дерева демонтируется компонент модального окна, и мы попытаемся изменить несуществующее состояние, то будет пиздец. Приложение упадет с ошибкой а ты пойдешь побираться в аутсорс галеру за еду. Поэтому предотвраещаем такой исход событий, а еще желательно чистим всю асинхронщину в useEffect
  const timeRef = React.useRef<ReturnType<typeof setTimeout>>(null);

  const ANIMATION_DELAY = 200;

  // Обработчки функции закрытия окна ( вместе с состоянием "закрывания" ). Оборачиваем в коллбек, т.к. функция будет пересоздаваться каждый перерендер, что не требуется.

  const closeHandler = React.useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  // Т.к. каждый перерендер компонента дает этой функции новую ссылку, что не требуется, мы уменьшаем нагрузку на проект путем использования хука useCallback, передавая туда нашу проверку события.

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  // Очищаем асинхронные операции и вешаем обработчик события (попутно очищая их во время демонтирования)

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div className={classNames(styles.modal, mods, [className, theme])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div onClick={onContentClick} className={classNames(styles.content)}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
