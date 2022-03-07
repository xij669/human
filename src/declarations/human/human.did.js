export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add_to_height' : IDL.Func([IDL.Float64], [], []),
    'change_favorite_show' : IDL.Func([IDL.Opt(IDL.Text)], [], []),
    'get_favorite_show' : IDL.Func([], [IDL.Opt(IDL.Text)], []),
    'get_height' : IDL.Func([], [IDL.Float64], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'set_height' : IDL.Func([IDL.Float64], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
