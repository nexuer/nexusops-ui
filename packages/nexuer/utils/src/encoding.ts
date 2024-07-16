import destr from "destr";

export interface Codec {
  Marshal: (value: any) => string;
  Unmarshal: (text: string) => any;
}

class Json implements Codec {
  private static instance: Json;

  private constructor() {}

  // Get the singleton instance
  public static getInstance(): Json {
    if (!Json.instance) {
      Json.instance = new Json();
    }
    return Json.instance;
  }

  Marshal(value: any): string {
    return JSON.stringify(value);
  }

  Unmarshal(text: string): any {
    return destr(text);
  }
}

export class CodecFactory {
  public static newJson(): Codec {
    return Json.getInstance();
  }
}
