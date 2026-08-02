{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/basics/

  # https://devenv.sh/packages/
  packages = [ ];

  # https://devenv.sh/languages/
  languages.javascript = {
    enable = true;
    pnpm.enable = true;
  };

  # https://devenv.sh/processes/

  # https://devenv.sh/services/

  # https://devenv.sh/scripts/

  # https://devenv.sh/basics/

  # https://devenv.sh/tasks/

  # https://devenv.sh/tests/

  # https://devenv.sh/git-hooks/

  # See full reference at https://devenv.sh/reference/options/
}
