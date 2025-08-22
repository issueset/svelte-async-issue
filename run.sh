#!/bin/bash

set -ex 

svelte_version=$1
enable_experimental_async=$2

pnpm install svelte@$svelte_version

export ENABLE_EXPERIMENTAL_ASYNC=$enable_experimental_async

./node_modules/.bin/vite dev
