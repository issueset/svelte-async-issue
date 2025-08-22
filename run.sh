#!/bin/bash

set -ex 

svelte_version=$1
svelte_experimental_async=$2
svelte_flush_mode=$3

pnpm install
pnpm install svelte@$svelte_version

export SVELTE_EXPERIMENTAL_ASYNC=$svelte_experimental_async
export VITE_PUBLIC_SVELTE_FLUSH_MODE=$svelte_flush_mode

./node_modules/.bin/vite dev
