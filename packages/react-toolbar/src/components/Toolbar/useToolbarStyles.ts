import { makeStyles, mergeClasses } from '@griffel/react';
import type { ToolbarState } from './Toolbar.types';

export const toolbarClassName = 'fui-Toolbar';
/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
  },

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the Toolbar slots based on the state
 */
export const useToolbarStyles_unstable = (state: ToolbarState): ToolbarState => {
  const styles = useStyles();
  state.root.className = mergeClasses(toolbarClassName, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
