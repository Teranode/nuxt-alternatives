import type { ProviderOptions, ProviderPartialOptions } from "../../types";
import type { Oauth2SchemeOptions } from "../schemes";
export interface GithubProviderOptions extends ProviderOptions, Oauth2SchemeOptions {
}
export declare function github(nuxt: any, strategy: ProviderPartialOptions<GithubProviderOptions>): void;
