# Project information
PROJECT_DIR := $(shell dirname $(abspath $(lastword $(MAKEFILE_LIST))))

## protoc files
PROTO_DIR=$(PROJECT_DIR)/proto
THIRD_PARTY_DIR=$(PROTO_DIR)/third_party
PROTO_FILES=$(shell find -L $(PROTO_DIR) -path $(THIRD_PARTY_DIR) -prune -o -name *.proto -print)

##@ General

.PHONY: help
help: ## Display this help.
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make \033[36m<target>\033[0m\n"} /^[%\/a-zA-Z_._0-9-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
.DEFAULT_GOAL := help

##@ Development
api: ## generate proto/*/*.proto
	node ./bin/cli.mjs generate --target src/gen/api -e third_party -p $(THIRD_PARTY_DIR) $(PROTO_DIR)
	pnpm run build
