#!/usr/bin/env bash
set -e # fail fast

# shared function that ensures the argument is properly formatted according to Semantic Versioning 2.0.0
# https://gist.github.com/rverst/1f0b97da3cbeb7d93f4986df6e8e5695
check_semver() {
  if [[ $1 =~ ^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(-((0|[1-9][0-9]*|[0-9]*[a-zA-Z-][0-9a-zA-Z-]*)(\.(0|[1-9][0-9]*|[0-9]*[a-zA-Z-][0-9a-zA-Z-]*))*))?(\+([0-9a-zA-Z-]+(\.[0-9a-zA-Z-]+)*))?$ ]]; then
    echo "${1}" is properly formatted according to Semantic Versioning
    return 0
  else
    echo "${1}" is NOT properly formatted according to Semantic Versioning
    return 1
  fi
}

# shared function that returns whether the first argument is less than or equal to the second argument in Semantic Versioning
# https://stackoverflow.com/a/4024263/7555275
# semver_lte 2.5.7 2.5.6 = false
# semver_lte 2.5.7 2.5.7 = true
# semver_lte 2.5.7 2.5.8 = true
semver_lte() {
  if [[ "${1}" = "$(echo -e "${1}\n${2}" | sort -V | head -n1)" ]]; then
    echo pass
    return 0
  else
    echo fail
    return 1
  fi
}

# shared function that returns whether the first argument is less than the second argument in Semantic Versioning
semver_lt() {
  if [[ "$1" = "$2" ]]; then
    echo fail
    return 1
  else
    semver_lte "${1}" "${2}"
  fi
}
