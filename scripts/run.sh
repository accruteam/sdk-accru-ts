#!/bin/bash

DIR=$(cd "$(dirname "$0")/.." && pwd)

if ! [ -x "$(command -v node)" ]; then
  echo "Error: node is not installed." >&2
  exit 1
fi

if [ ! -f "$HOME/.nvm/nvm.sh" ] && [ ! -s "$NVM_DIR/nvm.sh" ]; then
  echo "Error: nvm is not installed." >&2
  exit 1
fi

source "$HOME/.nvm/nvm.sh" || source "$NVM_DIR/nvm.sh"

if ! [ -x "$(command -v yarn)" ]; then
  echo "Error: yarn is not installed in bash, see the nvm installation instructions and check your .bashrc or .bash_profile." >&2
  exit 1
fi

if ! [ -x "$(command -v yalc)" ]; then
  echo "Installing yalc..."
  yarn global add yalc
fi

if ! [ -x "$(command -v yalc)" ]; then
  echo "Error: yalc is not installed." >&2
  echo "Please add yarn to PATH using: export PATH=\"$(yarn global bin):\$PATH\"" >&2
  exit 1
fi

if ! [ -f "$DIR/package.json" ]; then
  echo "Error: package.json not found in $DIR" >&2
  exit 1
fi

if ! [ -f "$DIR/yarn.lock" ]; then
  echo "Error: yarn.lock not found in $DIR" >&2
  exit 1
fi

PACKAGE_NAME=$(node -p "require('$DIR/package.json').name")

if [ -z "$PACKAGE_NAME" ]; then
  echo "Error: package.json name is not set in $DIR" >&2
  exit 1
fi

rm -rf "$DIR/dist"

if [ -f "$DIR/.env" ]; then
  set -a
  source "$DIR/.env"
  set +a
else
  echo "Warning: .env file not found in $DIR"
fi

if [ -z "$PROJECT_PATH" ]; then
  echo "Warning: PROJECT_PATH is not set in $DIR/.env"
else
  if ! [ -d "$PROJECT_PATH" ]; then
    echo "Error: PROJECT_PATH is not a directory in $DIR/.env" >&2
    exit 1
  fi

  if ! [ -f "$PROJECT_PATH/package.json" ]; then
    echo "Error: package.json not found in $PROJECT_PATH" >&2
    exit 1
  fi

  if ! [ -f "$PROJECT_PATH/yarn.lock" ]; then
    echo "Error: yarn.lock not found in $PROJECT_PATH" >&2
    exit 1
  fi
fi

executeInProject() {
  if [ -z "$PROJECT_PATH" ]; then
    return
  fi

  (cd "$PROJECT_PATH" && nvm use && "$@")
}

cleanup() {
  echo "Cleaning up..."

  if [ -n "$PROJECT_PATH" ]; then
    echo "Removing $PACKAGE_NAME from $PROJECT_PATH..."
    executeInProject yalc remove $PACKAGE_NAME && yarn

    echo "Unregistering $PACKAGE_NAME"
    yalc installations clean $PACKAGE_NAME

    if [ -d "$HOME/.yalc/packages/$PACKAGE_NAME" ]; then
      rm -rf "$HOME/.yalc/packages/$PACKAGE_NAME"
    fi
  fi

  echo "Completed."

  while read -r -t 0; do read -r; done

  exit 0
}

trap cleanup SIGINT SIGTERM

yarn --cwd "$DIR/" tsup --watch --onSuccess "yalc publish" &

while [ ! -d "$DIR/dist" ]; do
  sleep 1
done

if [ -n "$PROJECT_PATH" ]; then
  echo "Adding $PACKAGE_NAME to $PROJECT_PATH..."
  executeInProject yalc add $PACKAGE_NAME && yarn

  if ! grep -q "yalc.lock" "$PROJECT_PATH/.gitignore"; then
    echo "Adding yalc.lock to .gitignore..."
    echo "" >> "$PROJECT_PATH/.gitignore"
    echo "# yalc" >> "$PROJECT_PATH/.gitignore"
    echo ".yalc" >> "$PROJECT_PATH/.gitignore"
    echo "yalc.lock" >> "$PROJECT_PATH/.gitignore"
  fi
fi

(cd $DIR && yalc push)

wait
