import { ElementViewTemplate } from '@microsoft/fast-element';
import { buttonTemplate } from '@microsoft/fast-foundation';
import type { Button } from './button.js';

/**
 * The template for the Button component.
 * @public
 */
export const template: ElementViewTemplate<Button> = buttonTemplate();
