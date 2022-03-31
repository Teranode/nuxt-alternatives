import type { ProviderOptions, ProviderPartialOptions } from "../../types";
import type { Oauth2SchemeOptions } from "../schemes";
export interface DiscordProviderOptions extends ProviderOptions, Oauth2SchemeOptions {
}
export declare function discord(nuxt: any, strategy: ProviderPartialOptions<DiscordProviderOptions>): void;
