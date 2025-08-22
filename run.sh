#!/bin/bash

set -ex 

svelte_version=$1
svelte_experimental_async=$2

pnpm install
pnpm install svelte@$svelte_version

export SVELTE_EXPERIMENTAL_ASYNC=$svelte_experimental_async

./node_modules/.bin/vite dev
