.PHONY: reinitialize_git setup_node start_docker

all: reinitialize_git setup_node start_docker

reinitialize_git:
	@echo "Start removing git repository"
	rm -rf .git
	@echo "Initialize new repository"
	git init

setup_node:
	npm install

start_docker: 
	docker compose up -d