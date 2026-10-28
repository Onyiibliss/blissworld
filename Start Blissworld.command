#!/bin/zsh
cd "${0:A:h}"
BLISS_NODE="${HOME}/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"
if command -v node >/dev/null 2>&1; then
  BLISS_NODE="$(command -v node)"
fi
if [[ ! -x "$BLISS_NODE" ]]; then
  print 'Please install Node.js 20.9 or later to run this website.'
  read -k 1
  exit 1
fi
if [[ ! -f node_modules/next/dist/bin/next ]]; then
  print 'Dependencies are missing. Run pnpm install in this folder first.'
  read -k 1
  exit 1
fi
print 'Blissworld preview: http://127.0.0.1:3000'
"$BLISS_NODE" node_modules/next/dist/bin/next dev --hostname 127.0.0.1
