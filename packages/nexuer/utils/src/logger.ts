import { logger as baseLogger, field } from "@kirklin/logger";

class Logger {
  private createFieldsArray(args: any[]): any[] {
    if (args.length % 2 !== 0) {
      throw new Error("Logging method requires an even number of arguments for key-value pairs");
    }

    const fieldsArray: any[] = [];
    for (let i = 0; i < args.length; i += 2) {
      fieldsArray.push(field(args[i], args[i + 1]));
    }
    return fieldsArray;
  }

  info(msg: string, ...args: any[]) {
    const fieldsArray = this.createFieldsArray(args);
    baseLogger.info(msg, ...fieldsArray);
  }

  debug(msg: string, ...args: any[]) {
    const fieldsArray = this.createFieldsArray(args);
    baseLogger.debug(msg, ...fieldsArray);
  }

  error(msg: string, ...args: any[]) {
    const fieldsArray = this.createFieldsArray(args);
    baseLogger.error(msg, ...fieldsArray);
  }

  warn(msg: string, ...args: any[]) {
    const fieldsArray = this.createFieldsArray(args);
    baseLogger.warn(msg, ...fieldsArray);
  }
}

const logger = new Logger();

export { logger };
