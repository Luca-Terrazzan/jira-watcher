import JiraClient from 'jira-connector';

export class Jira {

  private readonly jiraConnection: JiraClient;

  constructor() {
    this.jiraConnection = new JiraClient();
  }

}
