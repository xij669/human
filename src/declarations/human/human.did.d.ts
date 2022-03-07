import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'add_to_height' : (arg_0: number) => Promise<undefined>,
  'change_favorite_show' : (arg_0: [] | [string]) => Promise<undefined>,
  'get_favorite_show' : () => Promise<[] | [string]>,
  'get_height' : () => Promise<number>,
  'greet' : (arg_0: string) => Promise<string>,
  'set_height' : (arg_0: number) => Promise<undefined>,
}
