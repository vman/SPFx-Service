import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './Consumer.module.scss';
import { IConsumerWebPartProps } from './IConsumerWebPartProps';

import  { IListService, ListService } from 'list-service-demo';

export default class ConsumerWebPart extends BaseClientSideWebPart<IConsumerWebPartProps> {

  private _listServiceInstance: IListService;

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.helloWorld}">
        <div class="${styles.container}">
          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span class="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
              <p class="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
              <p class="ms-font-l ms-fontColor-white">${escape(this.properties.description)}</p>
              <a href="https://aka.ms/spfx" class="${styles.button}">
                <span class="${styles.label}">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;

      this._listServiceInstance = this.context.serviceScope.consume(ListService.serviceKey as any) as IListService;
      
      this.getData();
  }

  private async getData()
  {
    const _docLib: JSON = await this._listServiceInstance.getDocumentLibrary();
    
    console.log(_docLib);

    const _pnpDocLib: JSON = await this._listServiceInstance.getDocumentLibraryWithPnPJS();

    console.log(_pnpDocLib);
    
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
