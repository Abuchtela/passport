import { AppContext, ProviderPayload } from "../types";
import { Platform } from "../utils/platform";

export class GTCPlatform extends Platform {
  platformId = "GTC";
  path = "GTC";
  isEVM = true;

  async getProviderPayload(appContext: AppContext): Promise<ProviderPayload> {
    const result = await Promise.resolve({});
    return result;
  }
}
