import { FluentDesignSystem } from '../../fluent-design-system.js';
import { AccordionItem } from './accordion-item.js';
import { styles } from './accordion-item.styles.js';
import { template } from './accordion-item.template.js';

export const definition = AccordionItem.compose({
  name: `${FluentDesignSystem.prefix}-accordion-item`,
  template,
  styles,
});
