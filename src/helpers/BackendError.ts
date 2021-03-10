export class BackendError extends Error {
  public response;
  public parsedBody;
  public isBackendError;
  constructor(response, parsedBody) {
    super(response.statusText);
    this.name = "BackendError";
    this.response = response;
    this.parsedBody = parsedBody;

    this.isBackendError = true;
  }
}
