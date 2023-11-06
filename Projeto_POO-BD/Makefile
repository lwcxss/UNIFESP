default:
	@echo "OPÇÕES:"
	@echo "  make install --> instala dependencias do nodejs"
	@echo " "
	@echo "  make compile --> compila projeto"
	@echo " "
	@echo "  make test --> executa testes no projeto"
	@echo " "
	@echo "  make run --> executa a aplicação completa"
	@echo " "

install:
	npm i

compile:
	npx tsc

test: compile
	npx jest /build

run:
	SGBD=${SGBD} node src/app.js

.PHONY: install compile run