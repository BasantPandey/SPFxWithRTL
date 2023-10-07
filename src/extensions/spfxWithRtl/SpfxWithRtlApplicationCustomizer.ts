import { Log } from '@microsoft/sp-core-library';
import * as ReactDOM from 'react-dom'; 
import * as React from 'react'; 
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';
import * as strings from 'SpfxWithRtlApplicationCustomizerStrings';
import { IPeopleProps } from './componets/IPeopleProps';
import PepoleEx from './componets/peopleEx';
const LOG_SOURCE: string = 'SpfxWithRtlApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpfxWithRtlApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpfxWithRtlApplicationCustomizer
  extends BaseApplicationCustomizer<ISpfxWithRtlApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
  
    

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`, {
      confirmOpen() {
        return true;
      },
    }).catch(() => {
      /* handle error */
    });
    
    
    
    const peopleProps:IPeopleProps = { context: this.context};
    //const placeholder: PlaceholderContent | undefined = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
    const element: React.ReactElement<IPeopleProps> = React.createElement(PepoleEx,peopleProps);

   
    // eslint-disable-next-line @microsoft/spfx/pair-react-dom-render-unmount
    //ReactDOM.render(element, placeholder?.domElement);
    // eslint-disable-next-line @microsoft/spfx/pair-react-dom-render-unmount 
    ReactDOM.render(element, document.getElementById("spoAppComponent"));
    return Promise.resolve();
  }
}
