#1
mkdir unix_tests_permissions
cd unix_tests_permissions
#

#2
ls -l
#

#3
touch arquivo_teste.txt
#

#4
chmod a+rw arquivo_teste.txt 
ls -l
#

#5
chmod a-w arquivo_teste.txt
ls -l
#

#6
chmod 644 arquivo_teste.txt
#