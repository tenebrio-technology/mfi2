export interface LogFn {
  (message?: any, ...params: any[]): void;
}

export interface ILogger {
  log: LogFn;
  warn: LogFn;
  error: LogFn;
  debug: LogFn;
}

export type LogLevel = 'log' | 'warn' | 'error';

export class Logger implements ILogger {
  readonly log: LogFn;
  readonly warn: LogFn;
  readonly error: LogFn;
  readonly debug: LogFn;

  constructor() {
    this.log = console.log.bind(console);
    this.warn = console.warn.bind(console);
    this.error = console.error.bind(console);
    this.debug = console.debug.bind(console);
  }
}
