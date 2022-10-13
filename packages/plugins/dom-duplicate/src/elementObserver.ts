import { hasTargetSelector } from './dom';
import {
  addChildListHandler,
  attributesHandler,
  removeChildListHandler,
} from './mutationHandler';

export function createTargetElementObserver(
  iframe: HTMLIFrameElement,
  selectors: string[],
  overlayElement: HTMLElement
) {
  const observer = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
      switch (mutation.type) {
      case 'attributes':
        if (hasTargetSelector(mutation.target, selectors)) {
          attributesHandler(mutation);
        }
        break;
      case 'childList':
        addChildListHandler(mutation, selectors, overlayElement);
        removeChildListHandler(mutation);
        break;
      default:
        break;
      }
    });
  });

  observer.observe(iframe.contentDocument.body, {
    attributes: true,
    childList: true,
    subtree: true,
  });

  return observer;
}
