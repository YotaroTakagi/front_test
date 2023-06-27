NPM := npm
NPX := npx

.PHONY: install
install:
	$(NPM) install

.PHONY: start
start:
	$(NPX) ng serve

.PHONY: format
format:
	$(NPX) prettier --write .

.PHONY: check-format
check-format:
	$(NPX) prettier --check .

.PHONY: lint
lint:
	$(NPX) ng lint

.PHONY: create-vite
create-vite:
	$(NPM) create vite@latest