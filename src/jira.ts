import JiraClient, { Config } from 'jira-connector';
import * as ConnectionConfig from '../config.json';
import { Issue } from 'jira-connector/types/api';

export class Jira {

  private readonly jiraConnection: JiraClient;

  constructor() {
    const jiraConnectionConfig: Config = {
      host: ConnectionConfig.jira_url,
      basic_auth: {
        email: ConnectionConfig.jira_user,
        api_token: ConnectionConfig.jira_api_token
      }
    };

    this.jiraConnection = new JiraClient(jiraConnectionConfig);
  }

  async getIssue(issueCode: string): Promise<Issue> {
    const issue: Issue = await this.jiraConnection.issue.getIssue({
      issueKey: issueCode
    });

    return issue;
  }

}
