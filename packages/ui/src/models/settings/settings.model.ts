export const enum NodeLabelType {
  Id = 'id',
  Description = 'description',
}

export const enum NodeToolbarTrigger {
  onHover = 'onHover',
  onSelection = 'onSelection',
}

export interface ISettingsModel {
  catalogUrl: string;
  apicurioRegistryUrl: string;
  nodeLabel: NodeLabelType;
  nodeToolbarTrigger: NodeToolbarTrigger;
}

export interface AbstractSettingsAdapter {
  getSettings(): ISettingsModel;
  saveSettings(settings: ISettingsModel): void;
}

export class SettingsModel implements ISettingsModel {
  catalogUrl: string = '';
  apicurioRegistryUrl: string = '';
  nodeLabel: NodeLabelType = NodeLabelType.Description;
  nodeToolbarTrigger: NodeToolbarTrigger = NodeToolbarTrigger.onHover;

  constructor(options: Partial<ISettingsModel> = {}) {
    Object.assign(this, options);
  }
}
