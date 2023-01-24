#1
mkdir git
#

#2
cd git
#

#3
git init
#

#4
code .
#

#5
touch README.md
#

#6
git add .
git commit -m "Criação do arquivo README.md"
#

#7
git checkout -b nova-branch
#

#8
git add .
git commit -m "Alterando README.md"
#

#9
git checkout main
git merge nova-branch
#

#10
git checkout main
git checkout -b atualiza-readme
#

#11
git checkout atualiza-readme
touch infos.txt
#

#12
git add .
git commit -m "Criação do arquivo infos.txt"
#

#14
git add .
git commit -m "Nomes adicionados no infos.txt"
#

#15
git branch adiciona-infos
#

#16
git checkout adiciona-infos
#

#17
git add .
git commit -m "Alteração do arquivo readme"
#

#18
git checkout atualiza-readme
git merge adiciona-infos
#

#19
git checkout main
git merge atualiza-readme
#