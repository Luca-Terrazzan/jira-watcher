import JiraClient, { Config } from 'jira-connector';
import * as ConnectionConfig from '../config.json';

export class Jira {

  private readonly jiraConnection: JiraClient;

  constructor() {
    const jiraConnectionConfig: Config = {
      host: ConnectionConfig.jira_url
    };

    this.jiraConnection = new JiraClient(jiraConnectionConfig);
  }

}
