#!/bin/bash

DIR=$(realpath $(dirname $0))/../

cleanup() {
  yarn --cwd "$DIR/dist" unlink

  clear

  echo "=========================================================="
  echo "                                                          "
  echo "  Run yarn unlink \"accru-client\" in the projects where  "
  echo "         you no longer want to use this package.          "
  echo "                                                          "
  echo "              Press any CTRL+C to continue...             "
  echo "                                                          "
  echo "=========================================================="

  exit 0
}

trap cleanup SIGINT SIGTERM

yarn --cwd "$DIR/" watch &

while [ ! -d "$DIR/dist" ]; do
  sleep 1
done

yarn --cwd "$DIR/dist" link

wait
