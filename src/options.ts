export interface PrintThatOptions {
  /** show the iframe for debugging */
  debug: boolean
  /** import parent page css */
  importCSS: boolean
  /** import style tags */
  importStyle: boolean
  /** print outer container/$.selector */
  printContainer: boolean
  /** path to additional css file - use an array [] for multiple */
  loadCSS: string
  /** add title to print page */
  pageTitle: string
  /** remove inline styles from print elements */
  removeInline: boolean
  /** custom selectors to filter inline styles. removeInline must be true  */
  removeInlineSelector: string
  /** variable print delay */
  printDelay: number
  /** prefix to html */
  header: Element | null
  /** postfix to html */
  footer: Element | null
  /** preserve the BASE tag or accept a string for the URL */
  base: boolean
  /** preserve input/form values */
  formValues: boolean
  /** copy canvas content */
  canvas: boolean
  /** enter a different doctype for older markup */
  doctypeString: string
  /** remove script tags from print content */
  removeScripts: boolean
  /** copy classes from the html & body tag */
  copyTagClasses: boolean
  /** copy styles from html & body tag (for CSS Variables)  */
  copyTagStyles: boolean
  /** callback function for printEvent in iframe */
  beforePrintEvent: Function | null
  /** function called before iframe is filled */
  beforePrint: Function | null
  /** function called before iframe is removed */
  afterPrint: Function | null
}

export const DEFAULT_OPTIONS: PrintThatOptions = {
  debug: false,
  importCSS: true,
  importStyle: true,
  printContainer: true,
  loadCSS: "",
  pageTitle: "",
  removeInline: false,
  removeInlineSelector: "*",
  printDelay: 1000,
  header: null,
  footer: null,
  base: false,
  formValues: true,
  canvas: true,
  doctypeString: '<!DOCTYPE html>',
  removeScripts: false,
  copyTagClasses: true,
  copyTagStyles: true,
  beforePrintEvent: null,
  beforePrint: null,
  afterPrint: null
}