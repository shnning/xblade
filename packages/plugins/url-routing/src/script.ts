import {
  TemplateScriptObject,
  getExternalScripts,
} from '@sh.ning/import-html-entry';

export function overrideIframeScriptGlobalVars(
  iframe: HTMLIFrameElement,
  scripts: (TemplateScriptObject | string)[]
) {
  getExternalScripts(scripts, fetch, () => {}).then((scriptContents) => {
    scriptContents.map((s) => {
      const scriptElement = iframe.contentDocument.createElement('script');
      if (typeof s === 'string') {
        const code = `(function(window, self, location, history){
          try{
            ${s}
          } catch(e){
            console.log(e)
          }
          \n
        }).bind(window.__xblade__window)(
          window.__xblade__window,
          window.__xblade__window,
          window.__xblade__location,
          window.__xblade__history
        );`;

        scriptElement.text = code;
      }
      iframe.contentDocument.head.appendChild(scriptElement);
    });
  });
}
