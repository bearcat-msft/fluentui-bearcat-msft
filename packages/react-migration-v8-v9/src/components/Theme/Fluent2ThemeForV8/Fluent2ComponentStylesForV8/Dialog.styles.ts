import type {
  IDialogContentStyleProps,
  IDialogContentStyles,
  IDialogStyleProps,
  IDialogStyles,
  IStyleFunctionOrObject,
} from '@fluentui/react';
import type { IExtendedEffects } from '@m365-admin/customizations';

export function getDialogStyles(props: IDialogStyleProps): IStyleFunctionOrObject<IDialogStyleProps, IDialogStyles> {
  const { theme } = props;
  const { effects } = theme;

  const styles: Partial<IDialogStyles> = {
    main: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      borderRadius: (effects as IExtendedEffects).roundedCorner8,
      boxShadow: effects.elevation64,
    },
  };

  return styles;
}

export function getDialogContentStyles(
  props: IDialogContentStyleProps,
): IStyleFunctionOrObject<IDialogContentStyleProps, IDialogContentStyles> {
  const { theme } = props;
  const { effects } = theme;

  const styles: Partial<IDialogContentStyles> = {
    topButton: {
      '&:hover': {
        '.ms-Dialog-button': {
          borderRadius: effects.roundedCorner4,
        },
      },
    },
    button: {
      borderRadius: effects.roundedCorner4,
    },
  };

  return styles;
}
